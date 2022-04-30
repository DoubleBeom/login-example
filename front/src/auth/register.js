import {useEffect, useState} from "react";
import {Grid, Header, Segment, Form, Divider, Button, Modal, Icon} from 'semantic-ui-react'
import axios from "axios";
import {useNavigate} from "react-router-dom";

export function Register(props){
    const navigate = useNavigate();
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

    // modal
    const [open, setOpen] = useState(false);

    // 로그인상태를 변환
    const setChange = (v) => {
        props.setIsLogin(v);
        setIsLogin(v);
        setError(!v);
    }

    // submit
    const onSubmit = (e) => {
        e.preventDefault();
        // setChange();
        axios.post('http://localhost:3100/api/register', inputs)
            .then(res => {
                if(!res.data.success){
                    setOpen(true);
                    return setChange(false);
                }
                if(res.data.success){
                    setOpen(true);
                    return setChange(true);
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
                        {/*<ModalPopup case="회원가입" data={inputs} isLogin={isLogin} error={error} onSubmit={v => onSubmit(v)}/>*/}
                        <Button type="submit" fluid color="teal">제출</Button>
                    </Form>
                </Segment>
            </Grid.Column>

            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                closeIcon={false}
                // trigger={<Button fluid color="teal" onSubmit={props.onSubmit}>{props.case}</Button>}
                dimmer="blurring"
                size="mini"
            >
                {error ?
                    (
                        <>
                            <Modal.Content>
                                <p>정보가 올바르지 않습니다.</p>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button color='red' onClick={() => setOpen(false)}>
                                    <Icon name='remove'/> 확인
                                </Button>
                            </Modal.Actions>
                        </>
                    )
                    : (
                        <>
                            <Header content='회원가입을 축하합니다!'/>
                            <Modal.Content>
                                {Object.keys(inputs).map(v =>
                                    <p key={v}>
                                        {v} : {inputs[v]}
                                    </p>
                                )}
                            </Modal.Content>
                            <Modal.Actions>
                                <Button
                                    color='green'
                                    fluid
                                    onClick={() => {
                                        setOpen(false);
                                        return navigate('/');
                                    }}
                                >
                                    <Icon name='checkmark'/> Yes
                                </Button>
                            </Modal.Actions>
                        </>
                    )
                }
            </Modal>
        </>
    )
}



