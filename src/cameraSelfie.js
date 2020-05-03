import React, { Component } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { Redirect } from 'react-router-dom';
import ImagePreview from './ImagePreview'; // source code : ./src/demo/AppWithImagePreview/ImagePreview
//import '../src/styles/webcam.css'
 
class App3 extends Component {
  constructor (props, context) {
    const token = localStorage.getItem("token");
    super(props, context);
    this.state = { dataUri: null };
    this.onTakePhotoAnimationDone = this.onTakePhotoAnimationDone.bind(this);
  }
 
  onTakePhotoAnimationDone (dataUri) {
    console.log('takePhoto');
    this.setState({ dataUri });
  }
  onCameraError (error) {
    console.error('onCameraError', error);
  }
 
  render () {
   /* if((this.state.token))
    {
      return(
        <Redirect to="/"/>
      );
    } */
    return (

      <div className="App">
        {
          
          (this.state.dataUri)
            ? <ImagePreview dataUri={this.state.dataUri} />
            : <div><p>Selfie Screen</p> 
       <Camera onTakePhotoAnimationDone = {this.onTakePhotoAnimationDone} 
                   onCameraError = { (error) => { this.onCameraError(error); } }
                    idealFacingMode = {FACING_MODES.USER}

                    />  
                              
              </div>
        }
      </div>
    );
  }
}
 
export default App3;
