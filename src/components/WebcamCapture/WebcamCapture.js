import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { Button, Card } from "@geist-ui/core";

const WebcamCapture = ({ onCapture }) => {
  const [isLoading, setIsLoading] = useState(false);
  const webcamRef = useRef(null);

  const capture = React.useCallback(() => {
    setIsLoading(true);
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc, () => setIsLoading(false));
  }, [webcamRef, onCapture]);

  return (
    <>
      <Card>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          style={{ width: "100%" }}
        />

        <Button
          auto
          shadow
          loading={isLoading}
          type="secondary"
          onClick={capture}
        >
          Capture photo
        </Button>
      </Card>
    </>
  );
};

export default WebcamCapture;
