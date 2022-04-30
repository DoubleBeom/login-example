import {useEffect, useState} from "react";
import {Grid, Header, Segment, Form, Button, Divider} from 'semantic-ui-react'
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {ModalPopup} from "../components/modal";

export function LoginUser(props){
    const navigate = useNavigate();
    const [ isLogin, setIsLogin ] = useState(props.isLogin);

    useEffect(()=> {
        setIsLogin(props.isLogin);
        // 이미 로그인 했을경우 home으로 이동시킴
        if(isLogin) navigate('/');
    },[props.isLogin, isLogin, navigate]);


    // inputs
    const [ error, setError ] = useState(false);
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

    // 로그인상태를 변환
    const setChange = () => {
        props.setIsLogin(true);
        setIsLogin(true);
    }

    // submit
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)

        axios.post('http://localhost:3100/api/login', inputs)
            .then(res => {
                if(!res.data.loginSuccess){
                    return setError(true);
                }
                if(res.data.loginSuccess){
                    setChange();
                    return navigate('/');
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
                        <Button type='submit' color="teal" fluid>Login</Button>
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



