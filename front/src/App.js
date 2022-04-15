import React from "react";
import {Grid} from "semantic-ui-react";
import {LoginUser} from "./auth/login";
import {Register} from "./auth/register";

export function App() {
    return (
        <>
            <Grid style={{height: '100vh'}} verticalAlign='middle' centered columns={2}>
                {/*<LoginUser/>*/}
                <Register/>
            </Grid>
        </>
    );
}


