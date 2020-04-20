// WITH MATERIAL-UI FRAMEWORK
import React from 'react';

import { Header } from './components';
import { Grid } from '@material-ui/core';

class App extends React.Component {

    render() {
        return (
            <Grid container direction="column">
                <Grid item>
                    <Header />
                </Grid>
                <Grid item container>
                    <Grid item xs={2} />
                    <Grid item xs={8}>

                    </Grid>
                    <Grid item xs={2} />
                </Grid>
            </Grid>
        );
    }
}

export default App;