import React, {useState} from "react";
import {Button, Divider, Grid, Header, Segment} from "semantic-ui-react";
import {LoginUser} from "./auth/login";
import {Register} from "./auth/register";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

import './index.css';
import {ErrorPage} from "./pages/errorpage";

export function App() {
    const [ isLogin, setIsLogin ] = useState(false);


    console.log('app에 있는 isLogin--------------', isLogin)
    // TODO #2 로그인 유지
    return (
        <BrowserRouter>
            <Grid style={{height: '100vh'}} verticalAlign='middle' centered>
                <Routes>
                    <Route
                        path="/"
                        exact
                        element={<IndexPage isLogin={isLogin}/>}
                    />
                    <Route
                        path="/login"
                        element={<LoginUser onClick={v => setIsLogin(v)} isLogin={isLogin}/>}
                    />
                    <Route
                        path="/register"
                        element={<Register onClick={v => setIsLogin(v)} isLogin={isLogin}/>}
                    />
                    <Route
                        path="*"
                        element={<ErrorPage/>}
                    />
                </Routes>
            </Grid>
        </BrowserRouter>
    );
}

function IndexPage({isLogin}){
    console.log('indexPage에 전달되는 -----------------', isLogin)
    return(
        <Grid.Column width={4}>
            <Header as='h2' attached='top'>
                Welcome
            </Header>
            <Segment>
                {isLogin ?
                    (<>
                        <Segment>
                            <p>안녕하세요</p>
                        </Segment>
                        <Divider/>
                        <Button type="button" fluid color="red">logout</Button>
                    </>)
                    :
                    (<>
                        <Link to="/login">
                            <Button fluid color="teal" type="submit">login</Button>
                        </Link>
                        <Divider/>
                        <Link to="/register">
                        <Button fluid color="violet" type="button">register</Button>
                        </Link>
                    </>)
                }
            </Segment>
        </Grid.Column>
    )
}


