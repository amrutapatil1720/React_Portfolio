import React from 'react';
import {Grid,Cell} from "react-mdl";
import Profile from "./profile.jpg";
import {ListItem,List,ListItemContent} from "react-mdl";

export default class Contact extends React.Component {
     render(){
        return (
          <section>
          <div className="contact-body">

          <Grid className="contact-grid">
            <Cell col={6}>
            <h2>Amruta Patil</h2>
             <img src={Profile} alt="profile" style={{height:'180px'}} />
             <p style={{margin:"auto%", width : "75%", paddingTop : "1rem"}}>Hey! My name is Amruta Patil.
My path as a Full stack developer has led me to a focus in React.js,Javascript ,MS-SQL.
Take a moment to explore my portfolio, which includes a combination of collaborations, side projects, and pictures.


</p>
               </Cell>
            <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
            <List>
           <ListItem>
             <ListItemContent style={{fontFamily:'Anton', fontSize:'22px'}}>
              <i className="fa fa-phone-square" aria-hidden="true" />(510)-565-5976</ListItemContent>
           </ListItem>
           <ListItem>
             <ListItemContent style={{fontFamily:'Anton', fontSize:'22px'}}>
              <i className="fa fa-envelope" aria-hidden="true" />amrutapatil1720@gmail.com</ListItemContent>
           </ListItem>
           <ListItem>
             <ListItemContent style={{fontFamily:'Anton', fontSize:'22px'}}>
              <i className="fa fa-linkedin" aria-hidden="true" />amrutapatil1720</ListItemContent>
           </ListItem>
         </List>
         </div>

       </Cell></Grid></div>


          </section>
        );
     }
}
