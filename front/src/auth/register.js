import {useEffect, useState} from "react";
import {Grid, Header, Segment, Form, Divider} from 'semantic-ui-react'
import axios from "axios";
import {ModalPopup} from "../components/modal";

export function Register(props){
    const [ isLogin, setIsLogin ] = useState(props.isLogin);

    useEffect(()=> {
        setIsLogin(props.isLogin);
    },[props.isLogin, isLogin]);

    // inputs
    const [ error, setError ] = useState(false);
    const [ inputs, setInputs ] = useState({
        name: '',
        email: '',
        password: '',
    });
    const { name, email, password } = inputs;

    const onChange = (e) =>{
        const { value, name } = e.target; // Input 에서 name 과 value 를 추출
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    // 로그인상태를 변환
    const setChange = () => {
        props.setIsLogin(true);
        setIsLogin(true);
    }

    // submit
    const onSubmit = (e) => {
        e.preventDefault();
        // setChange();
        axios.post('http://localhost:3100/api/register', inputs)
            .then(res => {
                if(!res.data.success){
                    console.log(res.data)
                    return setError(true);
                }
                if(res.data.success){
                    return setChange();
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Grid.Column width={4}>
                <Header as='h2' attached='top'>
                    Register
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
                        <ModalPopup case="회원가입" data={inputs} isLogin={isLogin} error={error}/>
                        {/*<Button type="submit" fluid color="teal">제출</Button>*/}
                    </Form>
                </Segment>
            </Grid.Column>
        </>
    )
}



