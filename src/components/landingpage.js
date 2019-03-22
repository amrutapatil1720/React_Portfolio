import React from 'react';
import {Grid,Cell} from 'react-mdl';
import Profile from "./profile.jpg";
export default class Landing extends React.Component {
     render(){
        return (
          <div style={{width:'100%',height:'100%',margin:'auto'}}>
            <Grid className="landing-grid">
              <Cell col={12}>
                <img
                    src={Profile}
                    alt="avatar"
                    className="avatar-image" />
                    <div className="banner-text">
                    <h1>Full Stack Web Developer</h1>
                    <hr />
                      <p>HTML/CSS | Javascript | ES6 | NodeJS | React | MSSQL | Oracle12c</p>

                      <div className="social-links">

                      {/* LinkedIn Link*/}
                        <a href="https://www.linkedin.com/in/amrutapatil1720/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square"  aria-hidden="true" />
                        </a>

                        {/* Github Link*/}
                          <a href="https://github.com/amrutapatil1720" rel="noopener noreferrer" target="_blank">
                              <i className="fa fa-github-square"  aria-hidden="true" />
                          </a>

                          {/* Leetcode Link*/}
                            <a href="https://leetcode.com/amrutapatil/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-free-code-camp"  aria-hidden="true" />
                            </a>

                            {/* HackerRank Link*/}
                              <a href="https://www.hackerrank.com/amrutapatil1720" rel="noopener noreferrer" target="_blank">
                                  <i className="fab fa-hackerrank"  aria-hidden="true" />
                              </a>

                      </div>
                    </div>
              </Cell>
            </Grid>
          </div>

        );
     }
}
