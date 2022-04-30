import React, {useEffect, useState} from "react";
import {Button, Divider, Grid, Header, Segment} from "semantic-ui-react";
import {LoginUser} from "./auth/login";
import {Register} from "./auth/register";
import {Link, Route, Routes} from "react-router-dom";


import {ErrorPage} from "./pages/errorpage";

export function App() {
    const [ isLogin, setIsLogin ] = useState(false);

    useEffect(()=> {
        setIsLogin(isLogin);
    },[isLogin]);

    console.log(isLogin);

    // TODO #2 로그인 유지
    return (
        <Grid style={{height: '100vh'}} verticalAlign='middle' centered>
            <Routes>
                <Route
                    path="/"
                    exact
                    element={<IndexPage setIsLogin={v => setIsLogin(v)} isLogin={isLogin}/>}
                />
                <Route
                    path="/login"
                    element={<LoginUser setIsLogin={v => setIsLogin(v)} isLogin={isLogin}/>}
                />
                <Route
                    path="/register"
                    element={<Register setIsLogin={v => setIsLogin(v)} isLogin={isLogin}/>}
                />
                <Route
                    path="*"
                    element={<ErrorPage/>}
                />
            </Routes>
        </Grid>
    );
}

function IndexPage(props){
    const [isLogin, setIsLogin] = useState(false);

    useEffect(()=> {
        setIsLogin(props.isLogin);
    },[props.isLogin]);

    const setLogOut = () => {
        setIsLogin(false);
        props.setIsLogin(false);
    }

    if(isLogin){
        return (
            <Grid.Column width={4}>
                <Header as='h2' attached='top'>
                    Welcome
                </Header>
                <Segment>
                    <Segment>
                        <p>안녕하세요</p>
                    </Segment>
                    <Button type="button" fluid color="red" onClick={setLogOut}>logout</Button>
                </Segment>
            </Grid.Column>
        )
    }
    if(!isLogin){
        return(
            <Grid.Column width={4}>
                <Header as='h2' attached='top'>
                    Welcome
                </Header>
                <Segment>
                    <Link to="/login">
                        <Button fluid color="teal" type="submit">login</Button>
                    </Link>
                    <Divider/>
                    <Link to="/register">
                        <Button fluid color="violet" type="button">register</Button>
                    </Link>
                </Segment>
            </Grid.Column>
        )
    }
}


