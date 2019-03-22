import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


 class Mymap extends React.Component {
   constructor(props) {
     super(props);

   }
     render(){
        return (
          <div>


          <Map google={this.props.google} zoom={14}>

       <Marker onClick={this.onMarkerClick}
               name={'Current location'} />

       <InfoWindow onClose={this.onInfoWindowClose}>
           <div>
             <h1>{this.state.selectedPlace.name}</h1>
           </div>
       </InfoWindow>
     </Map>
          </div>
        );
     }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyD7t6Z6hwbzE2s7RjloHeyR4PAVV_1lfTk")
})(Mymap)
