import React from 'react';
import Webcam from "react-webcam";

export class WebcamCapture extends React.Component {

    render() {
      const videoConstraints = {
        facingMode: "user"
      };
  
      return <Webcam videoConstraints={videoConstraints} />;
    }
  }