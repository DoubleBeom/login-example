import React, {useState} from "react";
import {Button, Divider, Grid, Header, Segment} from "semantic-ui-react";
import {LoginUser} from "./auth/login";
import {Register} from "./auth/register";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

import './index.css';

export function App() {
    const [ isLogin, setIsLogin ] = useState(false);
    // TODO #2 로그인 유지
    return (
        <BrowserRouter>
            <Grid style={{height: '100vh'}} verticalAlign='middle' centered columns={2}>
                <Routes>
                    <Route
                        path="/"
                        exact
                        element={<IndexPage/>}
                    />
                    <Route
                        path="/login"
                        element={<LoginUser onClick={v => setIsLogin(v)}/>}
                    />
                    <Route
                        path="/register"
                        element={<Register/>}
                    />
                </Routes>
            </Grid>
        </BrowserRouter>
    );
}

function IndexPage(){
    return(
        <Grid.Column width={4}>
            <Header as='h2' attached='top'>
                Welcome
            </Header>
            <Segment>
                <Link to="/login">
                    <Button fluid color="teal" type="submit">로그인</Button>
                </Link>
                <Divider/>
                <Link to="/register">
                    <Button fluid color="violet" type="button">회원가입</Button>
                </Link>
            </Segment>
        </Grid.Column>
    )
}


