import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Profile from './component/Profile/profile'
// import Transfer from './component/Transfer/transfer'

function Way() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/Profile" component={Profile} />
                {/* <Route exact path="/Transfer" component={Transfer} /> */}
            </Switch>
        </BrowserRouter>
    )
}
export default Way;
