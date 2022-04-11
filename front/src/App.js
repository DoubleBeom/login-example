import React from "react";

import {LoginUser} from "./auth/login";
import {Grid} from "semantic-ui-react";


export function App() {
    return (
        <>
            <Grid style={{height: '100vh'}} verticalAlign='middle' centered columns={2}>
                <LoginUser/>
            </Grid>

        </>
    );
}


