import {useState} from "react";
import {Grid, Header, Segment, Form, Button } from 'semantic-ui-react'
import axios from "axios";

export function Register(){
    const [ error, setError ] = useState(false)
    const [ inputs, setInputs ] = useState({
        name: '',
        email: '',
        password: '',
    });
    const { name, email, password } = inputs;

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
        axios.post('http://localhost:3100/api/register', null, {
            params: {
                'name': inputs[name],
                'email': inputs[email],
                'password': inputs[password]
            }
        })
            .then(res => {
                if(!res.data.success){
                    return console.log('안됌',res.data.success)
                }
                if(res.data.success){
                    return console.log('됨',res.data.success)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Grid.Column width={12}>
                <Header as='h2' attached='top'>
                    Register
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
                        <Button type="submit">제출</Button>
                    </Form>
                </Segment>
            </Grid.Column>
        </>
    )
}



