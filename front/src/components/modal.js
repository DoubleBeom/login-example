import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom"
import {useState} from "react";

export function ModalPopup(props) {
    console.log(props);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    // if(props.isLogin === false || props.error === true){
    if(props.error === false){
        switch (props.case) {
            case  '회원가입' :
                return (
                    <Modal
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        closeIcon={false}
                        trigger={<Button fluid color="teal" onSubmit={props.onClick}>{props.case}</Button>}
                        dimmer="blurring"
                        size="mini"
                    >
                        <Header content='회원가입을 축하합니다!'/>
                        <Modal.Content>
                            {Object.keys(props.data).map(v =>
                                <p key={v}>
                                    {v} : {props.data[v]}
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
                    </Modal>
                )
            default :
                alert('??')
                // return navigate('/');
        }
    }
    if(props.error === true){
        return (<ErrorModal case={props.case}/>)
    }
}

const ErrorModal = (props) => {
    console.log(props);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            closeIcon={false}
            trigger={<Button fluid color="teal" onSubmit={props.onClick}>{props.case}</Button>}
            dimmer="blurring"
            size="mini"
        >
            <Modal.Content>
                <p>정보가 올바르지 않습니다.</p>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={() => setOpen(false)}>
                    <Icon name='remove'/> 확인
                </Button>
            </Modal.Actions>
        </Modal>
    )
}