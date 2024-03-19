import React, { useState } from "react";
import { Grid, Text, Badge, Spinner, Link, Card } from "@geist-ui/core";
import Spline from "@splinetool/react-spline";

function Home(props) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleSceneLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <Grid.Container gap={0} justify="center">
      <Grid xs={12} height="100%">
        <div>
          <div style={{ display: "flex" }}>
            <Text h1>HMS Tools Demo</Text>
            <div>
              <Badge type="warning">version alpha</Badge>
            </div>
          </div>

          <Text p>
            Welcome to the HMS Tools demo website. This is a collection of pages
            of different tools encompass robot configuration and calibration,
            data management and visualization, and user interaction with robots.
          </Text>

          <Text p>
            Thank you for visiting this site. Don't forget to click on the robot
            on the right 👉🏻
          </Text>

          <Text h3>Job Description</Text>
          <Text p>
            The full job description for the Full-Stack Engineer at Figure can
            be found{" "}
            <Link
              href="https://boards.greenhouse.io/figureai/jobs/4313401006"
              icon
              color
            >
              here
            </Link>
            .
          </Text>

          <Text h3>Tech Stack and Approach</Text>
          <Text p>
            • <Text b>Front-End Development</Text>: This project is built with
            JavaScript, HTML5/CSS, and React. The UI components are from{" "}
            <Link href="https://geist-ui.dev/en-us" icon color>
              Geist UI
            </Link>
            .
          </Text>
          <Text p>
            • <Text b>Back-End Development</Text>: Python is used for the
            backend service for camera calibration (with{" "}
            <Link
              href="https://docs.opencv.org/4.x/dc/dbb/tutorial_py_calibration.html"
              icon
              color
            >
              OpenCV Camera Calibration
            </Link>
            ) and data management. Flask is used for the web server for its
            flexibility and simplicity.
          </Text>
          <Text p>
            • <Text b>Infrastructure</Text>: For the prototyping purpose, I used
            Vercel for the front-end deployment and Heroku for the back-end
            Flask server deployment.
          </Text>

          <Text h3>Links</Text>
          <div>
            <Link href="https://github.com/Sven97/hms-tools-app" icon color>
              GitHub Repository for backend service
            </Link>
          </div>
          <div>
            <Link href="#" icon color>
              GitHub Repository for frontend service
            </Link>
          </div>
        </div>
      </Grid>
      <Grid xs={12} height="800px">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "800px",
            width: "100%",
          }}
        >
          {!isLoaded && <Spinner scale={2} />}
          <Spline
            scene="https://prod.spline.design/bitIWSC0doR9SIwH/scene.splinecode"
            onLoad={handleSceneLoaded}
            style={{ display: isLoaded ? "block" : "none" }}
          />
        </div>
      </Grid>
    </Grid.Container>
  );
}

export default Home;
