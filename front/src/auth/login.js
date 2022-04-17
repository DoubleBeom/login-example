import {useState} from "react";
import {Grid, Header, Segment, Form, Button, Divider} from 'semantic-ui-react'
import axios from "axios";
import {Link} from "react-router-dom";
import {ModalPopup} from "../components/modal";

export function LoginUser(props){
    const [ error, setError ] = useState(false)
    const [ inputs, setInputs ] = useState({
        email: '',
        password: '',
    });
    const { email, password } = inputs;

    const onChange = (e) =>{
        const { value, name } = e.target; // Input 에서 name 과 value 를 추출
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)

        axios.post('http://localhost:3100/api/login', inputs)
            .then(res => {
                if(!res.data.loginSuccess){
                    return setError(true);
                }
                if(res.data.loginSuccess){
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
                        {Object.keys(inputs).map((v) =>
                            (
                                <Form.Input
                                    key={v}
                                    type={v}
                                    name={v}
                                    value={inputs[v]}
                                    onChange={onChange}
                                    placeholder={`please enter your ${v}`}
                                    error={!error?  null : { content: `Please enter your ${v}`, pointing: 'below' }}
                                    label={v}
                                />
                            )
                        )}

                        <Divider/>
                        {/*<Button fluid color="teal" type="submit">로그인</Button>*/}
                        <ModalPopup case={"login"} data={inputs} isLogin={props.isLogin} error={error}/>
                        <Divider/>
                        <Link to="/register">
                            <Button fluid color="violet" type="button">register</Button>
                        </Link>
                    </Form>
                </Segment>
            </Grid.Column>
        </>
    )
}



