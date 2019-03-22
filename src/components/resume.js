import React from 'react';
import Profile from "./profile.jpg";
import {Grid,Cell} from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import {List,ListItem} from "react-mdl";
import Courses from "./skills";

export default class Resume extends React.Component {
     render(){
        return (
          <div>
          <Grid>
            <Cell col={4}>
            <div style={{textAlign:"center",position: 'flex'}}>
            <img src={Profile} alt="profile" style={{height:'220px', marginTop:'2em'}} />
            </div>
            <h3 style={{paddingTop:'0.5em'}}>Amruta Patil</h3>
            <h4 style={{color:'grey'}}>Software Engineer</h4>
            <hr style={{borderTop:'3px solid #234682',width:'50%'}}/>
            <p>Software Engineer with 3 years of experience in Design, Development and Implementation of Web Applications And experience in supporting databases of Oracle 10G/11G database of DEV/UAT on Linux environment.Possessing good analytical, problem-solving, organizational, learning and team skills Selfdirected and motivated Software Engineer works effectively in dynamic environment </p>
            <hr style={{borderTop:'3px solid #234682',width:'50%'}}/>
            <h5>Address :</h5>
            <p>Union City,Callifornia,94587</p>
            <h5>Contact :</h5>
            <p>510-565-5976</p>
            <h5>Email :</h5>
            <p>amrutapatil1720@gmail.com</p>
            <h5>Web :</h5>
            <p>www.amrutapatil.info</p>
            <hr style={{borderTop:'3px solid #234682',width:'50%'}}/>

            </Cell>
            <Cell className="resume-right-col" col={8}>
              <h2>Education</h2>

              <Education
              startYear={2010}
              endYear={2013}
              degreeName="Master of Computer Application"
              collegeName= "K.K. Wagh College of Engineering ,Nashik,India" />

              <Education
              startYear={2010}
              endYear={2013}
              degreeName="Bachelor of Computer Science"
              collegeName= "North Maharashtra University, Jalgaon, India " />
              <hr style={{borderTop:'3px solid #e22947'}} />

              <h2>Experience</h2>

              <Experience
              startYear="Dec-2018"
              endYear="till today"
              jobName= "Projects"
              jobDescripton="Created personal Programming projects . All are available on portfolio -Projects Page." />

              <Experience
              startYear="Oct-2014"
              endYear="Dec-2017"
              jobName= "Cognizant Technology Solutions,Pune,India"
              jobDescripton="Software Engineer -Cognizant Technology Solutions                                         OCT 2014 - Dec 2017
Experience in supporting databases of Oracle 10G/11G database of DEV/UAT on Linux environment.
Involved with installation and monitoring of Oracle Databases, space management.
Done with Export/Import of oracle databases. Created and managed tables, view and indexes.
Troubleshooting with database performance issue, oracle PL/SQL packages, stored procedure and functions.
Database patching, backup and recovery." />
              <hr style={{borderTop:'3px solid #e22947'}} />
              <h2>Skills</h2>
              <Grid>
              <Cell col={4}>
              <List>
                  <ListItem style={{color:'white' ,marginTop:'0.2px'}}>-HTML</ListItem>
                  <ListItem style={{color:'white'}}>-CSS</ListItem>
                  <ListItem style={{color:'white'}}>-JavaScript</ListItem>
                  <ListItem style={{color:'white'}}>-React</ListItem>
                  <ListItem style={{color:'white'}}>-ES6</ListItem>

              </List>
              </Cell>
              <Cell col={4}>
              <List>
                  <ListItem style={{color:'white'}}>MSSQL</ListItem>
                  <ListItem style={{color:'white'}}>NodeJS</ListItem>
                  <ListItem style={{color:'white'}}>Oracle</ListItem>
                  <ListItem style={{color:'white'}}>Linux</ListItem>
                  <ListItem style={{color:'white'}}>Data Structure</ListItem>

              </List>
              </Cell>
              </Grid>
              <hr style={{borderTop:'3px solid #e22947'}} />
              <h2>Courses</h2>

              <Courses
                courseName="Complete React JS Web developer Tutorial"
                fromWhere="From Udemy"
              />

              <Courses
                courseName="The complete JavaScript course"
                fromWhere="From Udemy"
              />

              <Courses
                courseName="ECMA Script programming language, version 6"
                fromWhere="From Udemy"
              />

              <hr style={{borderTop:'3px solid #e22947'}} />

            </Cell>
          </Grid>
          </div>
        );
     }
}
