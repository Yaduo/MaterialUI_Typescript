import * as React from "react";
import { connect } from 'react-redux';
import { Grid, FormLabel, FormControlLabel, Radio, RadioGroup, Paper, Button  } from 'material-ui';
import { IHomePage, HomePageBase, mapStateToProps, mapDispatchToProps } from './IHomePage';

@(connect as any)(mapStateToProps, mapDispatchToProps)
export class HomePage extends HomePageBase implements IHomePage {

    componentDidMount() {
    }
    
    render() {
        return (
            <div style={{ padding: 20 }}>
                
                <Button>asdgasdgasd gasdga</Button>
                <Grid container>
                    <Grid item md={12} lg={6}>
                        <Paper>xs=12</Paper>
                    </Grid>
                     <Grid item md={12} lg={6}>
                        <Paper>xs=6</Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}