import React, { Component } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import '../styles/imagePreview.css';
import ImagePreviewG from './ImgPreviewG';
import Button from '@material-ui/core/Button';
 
class AppG extends Component {
  constructor (props, context) {
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
      const { sides } = this.props;
    return (
      <div className="App">
        {
          (this.state.dataUri)
            ? <ImagePreviewG dataUri={this.state.dataUri} sides={sides} />
            : <div> {sides} <br/>
                    <Camera onTakePhotoAnimationDone = {this.onTakePhotoAnimationDone} 
                   onCameraError = { (error) => { this.onCameraError(error); } }
                    idealFacingMode = {FACING_MODES.ENVIRONMENT}

                    />             
              </div>
        }
      </div>
    );
  }
}
 
export default AppG;