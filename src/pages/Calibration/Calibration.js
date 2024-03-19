import React, { useState, useEffect } from "react";
import axios from "axios";
import WebcamCapture from "../../components/WebcamCapture/WebcamCapture";
import {
  Text,
  Grid,
  Divider,
  Link,
  Code,
  Image,
  Button,
  Snippet,
} from "@geist-ui/core";
import { Copy } from "@geist-ui/icons";

function Calibration(props) {
  const [calibrationData, setCalibrationData] = useState(null);
  const [copyButtonText, setCopyButtonText] = useState("Copy");

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(calibrationData, null, 2));
    setCopyButtonText("Copied");
    setTimeout(() => {
      setCopyButtonText("Copy");
    }, 1000);
  };

  const handleCapture = (imageSrc, resetLoading) => {
    const formData = new FormData();
    formData.append("image", imageSrc);
    axios
      .post(
        "https://hms-tools-app-4730fd681741.herokuapp.com/api/calibrate",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setCalibrationData(response.data);
        resetLoading(); // Reset loading state
      })
      .catch((error) => {
        console.error("Error:", error);
        resetLoading(); // Ensure loading state is reset even on error
      });
  };

  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={12}>
        <div>
          <Text h1>Calibration Demo</Text>

          <Text p>
            Calibration in robotics involves adjusting sensors and actuators.
            For demonstration purposes, I use a camera distortion calibration to
            illustrate the process.
          </Text>

          <Text p>
            The calibration process involves taking pictures of a known pattern
            (e.g.{" "}
            <Link
              href="https://github.com/opencv/opencv/blob/4.x/doc/pattern.png"
              icon
              color
            >
              7x10 chessboard from OpenCV
            </Link>
            ) from different angles and distances. The calibration algorithm
            uses these images to calculate the distortion parameters.
          </Text>

          <Text p>
            I build a simple backend service with OpenCV and Flask to perform
            the calibration and return the result. The application is deployed
            on Heroku for demonstration purposes.
          </Text>

          <Text h3>Application API Endpoint</Text>
          <Text p>
            <Snippet
              text="https://hms-tools-app-4730fd681741.herokuapp.com/api/calibrate"
              width="100%"
            />
          </Text>

          <Text h3>Tech Stack</Text>
          <div>
            <Image
              width="100%"
              src="https://diagrams.helpful.dev/d/d:osXUk0nJ"
            />
          </div>
        </div>
      </Grid>

      <Grid xs={12}>
        <div>
          <WebcamCapture onCapture={handleCapture} />
          {calibrationData && (
            <Text blockquote>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Text b>Calibration result</Text>
                <Button icon={<Copy />} auto scale={0.5} onClick={handleCopy}>
                  {copyButtonText}
                </Button>
              </div>
              <Divider />

              <Code block my={0}>
                {JSON.stringify(calibrationData, null, 2)}
              </Code>
            </Text>
          )}
        </div>
      </Grid>
    </Grid.Container>
  );
}

export default Calibration;
