import {useState} from "react";
import {Grid, Header, Segment, Form, Button, Divider} from 'semantic-ui-react'
import axios from "axios";
import {Link} from "react-router-dom";
import {ModalPopup} from "../components/modal";

export function LoginUser(props){
    const [ error, setError ] = useState(false)
    
    // const [ inputs, setInputs ] = useState({
    //     email: '',
    //     password: '',
    // });
    
    // FIXME: 보내는 값을 따로 useState 하시는 것을 추천드립니다.
    const [email, setEmail] = useState('')
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const [password, setpassword] = useState('')
    const changePassword = (e) => {
        setpassword(e.target.value)        
    }

    
    const data = {email, password}

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3100/api/login', data)
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
                    <Form onSubmit={onSubmit} error={error}>
                        {/* TODO: Email, password 따로 */}
                        {/* FIXME: Email, password 폼 따로 */}
                        <Form.Input
                            name="email" 
                            value={email}
                            onChange={changeEmail}
                            placeholder="Please enter your Email"
                        />
                        
                        <Form.Input
                            name="password" 
                            value={password}
                            onChange={changePassword}
                            placeholder="Please enter your Password"
                        />
                        <Divider/>
                        {/*  여기서 다 해주면 상범님 실력이 안 늘어요! */}
                        {/* TODO: 버튼을 눌렀을 때 IndexPage로 이동하기 */}
                        <Button fluid color="teal">로그인</Button>

                        {/* FIXME: 어떤 이유인지는 모르겠는데 모달때문에 계속 Submit이 되네욥.. */}
                        {/* <ModalPopup case={"login"} data={data} isLogin={props.isLogin} error={error}/> */}
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



