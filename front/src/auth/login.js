import {useState} from "react";
import {Grid, Header, Segment, Form, Button, Divider} from 'semantic-ui-react'
import axios from "axios";

export function LoginUser(props){
    const [ error, setError ] = useState(false)
    const [ inputs, setInputs ] = useState({
        email: '',
        password: '',
    });
    const { email, password } = inputs;

    const onChange = (e) =>{
        const { value, name } = e.target; // e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)

        // api 호출
        axios.post('http://localhost:3100/api/login', {
                "email": email,
                "password": password
            })
            .then(res => {
                if(!res.data.loginSuccess){
                    return setError(true);
                }
                if(res.data.loginSuccess){
                    // 후에 필요 없는 기능 ( 동작확인용 )
                    setError(false);

                    // 전달 받은 props값을 변경하여 상위컴포넌트로 전달
                    return props.onClick(true);

                }
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Grid.Column width={4}>

                <Header as='h2' attached='top'>
                    Login
                </Header>
                <Segment>
                    <Form action="" onSubmit={onSubmit} error={error}>
                        {Object.keys(inputs).map((key) =>
                            (
                                <Form.Input
                                    key={key}
                                    type={key}
                                    name={key}
                                    value={inputs[key]}
                                    onChange={onChange}
                                    placeholder={`please enter your ${key}`}
                                    error={!error?  null : { content: `Please enter your ${key}`, pointing: 'below' }}
                                    label={key}
                                />
                            )
                        )}

                        <Divider/>
                        <Button fluid={true} color="teal" type="submit">로그인</Button>
                        <Divider/>
                        <Button fluid={true} color="violet" as="a">회원가입</Button>
                    </Form>
                </Segment>
            </Grid.Column>
            {/*{isLogin?. return(*/}
            {/*    <>*/}
            {/*    </>*/}
            {/*    )*/}
            {/*}*/}
        </>
    )
}



