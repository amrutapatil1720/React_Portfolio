import React from 'react';
import {Grid,Cell} from "react-mdl";

export default class Education extends React.Component {

     render(){
        return (
          <Grid>
          <Cell col={4}>
            <br></br>
          <p>{this.props.startYear}-{this.props.endYear}</p>
          </Cell>
          <Cell col={8}>
          <h5> {this.props.degreeName} </h5>
          <p> {this.props.collegeName} </p>

          </Cell>
          </Grid>
        );
     }
}
