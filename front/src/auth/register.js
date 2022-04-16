import {useState} from "react";
import {Grid, Header, Segment, Form, Button } from 'semantic-ui-react'
import axios from "axios";

export function Register(){
    // TODO 회원가입후 알림창 || 페이지 띄우기
    const [ error, setError ] = useState(false)
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

    const onSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3100/api/register', inputs)
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
                        <Button type="submit" fluid color="teal">제출</Button>
                    </Form>
                </Segment>
            </Grid.Column>
        </>
    )
}



