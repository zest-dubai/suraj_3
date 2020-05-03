import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Link, Switch,Route} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import '../src/styles/imagePreview1.css';
import App3 from './cameraSelfie';


 function ImagePreview  ({ dataUri, isFullscreen })  {
  let classNameFullscreen = isFullscreen ? 'fullscreen' : '';

  const [val, setVal] = useState(0);
  const [cli, setCli] = useState(0);
   function click() {
    setCli(true);
    localStorage.setItem("img", JSON.stringify(dataUri));
    console.log('Stored');
  };

  function retake(){
      console.log('retake..');
      localStorage.setItem("img", '' );
      setVal(true);
      
      /*return(
        // doubt-  to take it back to camera page    
        <Redirect to="/login"/>
      ); */
  };
  
  if(val)
    {
      return (
        <App3/>
      );
    }
    else if(cli === true){
      return(
        <Redirect to="/gid"/>
      );
    }
    else{
  return (

    // if(this.retake === true)
    //true ? <Redirect /> : <div></div>

    <div className={'demo-image-preview ' + classNameFullscreen}>
      <img src={dataUri} />
      <button type="button" onClick={click}>Submit</button>
      <button type="button" onClick={retake}>Retake</button>
    </div>
  );
    }
};

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool
};

export default ImagePreview;