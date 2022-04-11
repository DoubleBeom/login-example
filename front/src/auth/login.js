import {User} from "../mock/user";
import {useState} from "react";
import {Button, Form, Grid, Segment} from 'semantic-ui-react'

export function LoginUser(){
    const testUser = {...User, email: 'test@test.com', password: '1234'};
    const [ error, setError ] = useState(false)
    const [ inputs, setInputs ] = useState({
        email: '',
        password: '',
    });
    const { name, email, password } = inputs;

    const onChange = (e) =>{
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
        console.log(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(testUser.name === inputs.name && testUser.password ===  inputs.password){
            return console.log('pass')
        }else {
            return setError(true);
        }
    }

    return (
        <>
            <Grid.Column width={3}>
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



