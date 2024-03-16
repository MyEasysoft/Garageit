class WebcamCapture extends React.Component {

    render() {
      const videoConstraints = {
        facingMode: "user"
      };
  
      return <Webcam videoConstraints={videoConstraints} />;
    }
  }