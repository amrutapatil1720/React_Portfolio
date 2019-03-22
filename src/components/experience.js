import React from 'react';
import {Grid,Cell} from "react-mdl";

export default class Experience extends React.Component {
  
     render(){
        return (
          <Grid>
          <Cell col={4}>
          <p>{this.props.startYear}-{this.props.endYear}</p>
          </Cell>
          <Cell col={8}>
          <h5> {this.props.jobName} </h5>
          <p> {this.props.jobDescripton} </p>

          </Cell>
          </Grid>
        );
     }
}
