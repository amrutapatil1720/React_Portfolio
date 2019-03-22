//eslint-disable-next-line



import React from 'react';
import {Grid,Cell,Card,CardText,CardTitle,CardActions,CardMenu,Button,IconButton} from "react-mdl";

export default class Projects extends React.Component {
     render(){
        return (
          <div background="giphy.gif">
            <Grid>
            <Cell col={12}>
                <div className="projects-grid">
                {/*Project 1 */}
                  <Card shadow={5} style={{width:'250px', height:'250px', margin:'auto'}}>
                    <CardTitle style={{color:"#fff", height:"176px",background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXQWR1h2Dzvwrwd4Fmb39hAp1HrgDVz8SPGn0TBaQxgmiIE4jM) center / cover'}} > Project #2</CardTitle>
                    <CardText><b>My personal website using reactJS</b></CardText>
                    <CardActions border>
                      <a href="https://github.com/amrutapatil1720/City_adventure" rel="noopener noreferrer" target="_blank">

                        <Button colored>Github</Button></a>
                          <a href="www.amrutapatil.info" rel="noopener noreferrer" target="_blank">

                        <Button colored>Demo</Button></a>
                    </CardActions>
                    <CardMenu style={{color:"#fff"}}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card>

                {/*Project 2 */}
                  <Card shadow={5} style={{width:'250px', height:'250px', margin:'auto'}}>
                      <CardTitle style={{color:"#fff", height:"176px",background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXQWR1h2Dzvwrwd4Fmb39hAp1HrgDVz8SPGn0TBaQxgmiIE4jM) center / cover'}} > Project #2</CardTitle>
                      <CardText><b>City Adventure</b></CardText>
                      <CardActions border>
                      <a href="https://github.com/amrutapatil1720/City_adventure" rel="noopener noreferrer" target="_blank">

                      <Button colored>Github</Button>
                      </a>
                      <a href="https://amrutapatil1720.github.io/City_adventure/" rel="noopener noreferrer" target="_blank">

                        <Button colored>Demo</Button>
                        </a>
                      </CardActions>
                      <CardMenu style={{color:"#fff"}}>
                        <IconButton name="share" />
                      </CardMenu>
                  </Card>

                  {/*Project 3 */}
                    <Card shadow={5} style={{width:'250px', height:'250px', margin:'auto'}}>
                      <CardTitle style={{color:"#fff", height:"176px",background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxxOadIEWY9sHsuEEAdH3ZSmAJZI4SI0SeIN0WAgMM1gn5_SDn) center / cover'}} > Project #3</CardTitle>
                      <CardText><b>Tetris Block Game</b></CardText>
                      <CardActions border>
                      <a href="https://github.com/amrutapatil1720/Block-Game" rel="noopener noreferrer" target="_blank">
                         <Button colored>Github</Button>
                      </a>
                      <a href="https://amrutapatil1720.github.io/Block-Game/index.html" rel="noopener noreferrer" target="_blank">
                          <Button colored>Demo</Button>
                      </a>
                      </CardActions>
                      <CardMenu style={{color:"#fff"}}>
                        <IconButton name="share" />
                      </CardMenu>
                    </Card>
                      </div>
              </Cell>

              <Cell col={12}>
              <div className="projects-grid">

                  {/*Project 4 */}
                    <Card shadow={5} style={{width:'250px', height:'250px', margin:'auto'}}>
                      <CardTitle style={{color:"#fff", height:"176px",background:'url(https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png) center / cover'}} > Project #4</CardTitle>
                      <CardText><b>Graphic Color Pattern</b></CardText>
                      <CardActions border>
                      <a href="https://github.com/amrutapatil1720/Graphics_Color" rel="noopener noreferrer" target="_blank">
                         <Button colored>Github</Button>
                      </a>
                      <a href="https://amrutapatil1720.github.io/Graphics_Color/index.html" rel="noopener noreferrer" target="_blank">
                          <Button colored>Demo</Button>
                      </a>
                      </CardActions>
                      <CardMenu style={{color:"#fff"}}>
                        <IconButton name="share" />
                      </CardMenu>
                    </Card>

                  {/*Project 5 */}
                    <Card shadow={5} style={{width:'250px', height:'250px', margin:'auto'}}>
                      <CardTitle style={{color:"#fff", height:"176px",background:'url(https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png) center / cover'}} > Project #5</CardTitle>
                      <CardText><b>Temperature Converter</b></CardText>
                      <CardActions border>
                      <a href="https://github.com/amrutapatil1720/Tempt_Converter" rel="noopener noreferrer" target="_blank">
                         <Button colored>Github</Button>
                      </a>
                      <a href="https://amrutapatil1720.github.io/Temp_Converter/index.html" rel="noopener noreferrer" target="_blank">
                          <Button colored>Demo</Button>
                      </a>
                      </CardActions>
                      <CardMenu style={{color:"#fff"}}>
                        <IconButton name="share" />
                      </CardMenu>
                    </Card>

                  {/*Project 6 */}
                    <Card shadow={5} style={{width:'250px', height:'250px', margin:'auto'}}>
                      <CardTitle style={{color:"#fff", height:"176px",background:'url(https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png) center / cover'}} > Project #6</CardTitle>
                      <CardText><b>Digital Clock</b></CardText>
                      <CardActions border>
                      <a href="https://github.com/amrutapatil1720/Digital-Clock" rel="noopener noreferrer" target="_blank">
                         <Button colored>Github</Button>
                      </a>
                      <a href="Graphics_Color/index.html" rel="noopener noreferrer" target="_blank">
                          <Button colored>Demo</Button>
                      </a>
                      </CardActions>
                      <CardMenu style={{color:"#fff"}}>
                        <IconButton name="share" />
                      </CardMenu>
                    </Card>
                  
                      </div>


                  </Cell>
            </Grid>
          </div>
        );
     }
}
