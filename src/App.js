// WITH MATERIAL-UI FRAMEWORK
import React from 'react';

import { Header, MediaCard } from './components';
import { Grid } from '@material-ui/core';

class App extends React.Component {

    render() {
        return (
            <Grid container direction="column" spacing={3}>
                <Grid item>
                    <Header />
                </Grid>
                <Grid item container>
                    <Grid item xs={2} />
                    <Grid item xs={8} container spacing={3}>
                        <Grid item xs={4}>
                            <MediaCard />
                        </Grid>
                        <Grid item xs={4}>
                            <MediaCard />
                        </Grid>
                        <Grid item xs={4}>
                            <MediaCard />
                        </Grid>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
            </Grid>
        );
    }
}

export default App;