import * as React from "react";
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { FormLabel, FormControlLabel, Radio, RadioGroup, Paper, Button  } from 'material-ui';

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (
            <div style={{ padding: 20 }}>
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                <Button>asdgasdgasd gasdga</Button>
                <Grid container>
                    <Grid md={12} lg={6}>
                        <Paper>xs=12</Paper>
                    </Grid>
                     <Grid md={12} lg={6}>
                        <Paper>xs=6</Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}