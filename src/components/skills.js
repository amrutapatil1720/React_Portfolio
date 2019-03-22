import React from 'react';
import {Grid,Cell} from "react-mdl";

export default class Courses extends React.Component {
  
     render(){
        return (
          <Grid>
          <Cell col={7}>
          <p>{this.props.courseName}</p>
          </Cell>
          <Cell col={5}>
          <p> {this.props.fromWhere} </p>

          </Cell>
          </Grid>
        );
     }
}
