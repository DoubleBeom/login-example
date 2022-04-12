import {User} from "../mock/user";
import {useState} from "react";
import { Button, Form } from 'semantic-ui-react'
import axios from "axios";

export function LoginUser(){
    const [ error, setError ] = useState(false)
    const [ inputs, setInputs ] = useState({
        name: '',
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
        console.log(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        // api 호출
        axios.post('http://localhost:3100/api/login', null, {
            params: {
                'email': inputs[email],
                'password': inputs[password]
                }
            })
            .then(res => {
                if(!res.data.loginSuccess){
                    setError(true)
                    return console.log(res.data.loginSuccess)
                }
                if(res.data.loginSuccess){
                    return console.log('pass')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Grid.Column width={3}>
                <Segment>
                    <h2>Login</h2>
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
                        <Button type="submit">제출</Button>
                    </Form>
                </Segment>
            </Grid.Column>
        </>
    )
}



