import {User} from "../mock/user";
import {useState} from "react";
import { Button, Form } from 'semantic-ui-react'

export function LoginUser(){
    const testUser = {...User, name : 'test', email: 'test@test.com', password: '1234'};
    const [ error, setError ] = useState(false)
    const [ inputs, setInputs ] = useState({
        name: '',
        email: '',
        password: '',
    });
    const { name, email, password } = inputs;

    const onChange = (e) =>{
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
        console.log(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(testUser.email === inputs.email && testUser.name === inputs.name && testUser.password ===  inputs.password){
            return console.log('pass')
        }else {
            return setError(true);
        }

        // if((inputs.email || inputs.name || inputs.password) === ''){
        //     setError(true);
        // }
    }

    return (
        <>
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
        </>
    )
}



