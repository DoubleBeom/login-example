import React, {useState} from "react";
import {Grid} from "semantic-ui-react";
import {LoginUser} from "./auth/login";
import {Register} from "./auth/register";

export function App() {
    const [ isLogin, setIsLogin ] = useState(false);
    // TODO 로그인 유지
    return (
        <>
            <Grid style={{height: '100vh'}} verticalAlign='middle' centered columns={2}>
                {/* #2 -#1 확인용  */}
                {!isLogin ?
                    /* #1 로그인여부를 아래 컴포넌트에서 지정하도록 props 전달 */
                    (<LoginUser onClick={v => setIsLogin(v)}/>) :
                    (<div>성공</div>)
                }
                <Register/>
            </Grid>
        </>
    );
}


