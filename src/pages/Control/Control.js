import React, { useState } from "react";
import {
  Grid,
  Drawer,
  Text,
  Spinner,
  Button,
  Code,
  Spacer,
  Image,
} from "@geist-ui/core";
import Spline from "@splinetool/react-spline";
import TeleopDrawer from "../../components/TeleopDrawer";

function Control(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSceneLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <Drawer
        visible={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        placement="right"
        width="600px"
      >
        <Drawer.Title>Teleop Panel</Drawer.Title>
        <Drawer.Content>
          <TeleopDrawer />
        </Drawer.Content>
      </Drawer>

      <Grid.Container gap={0} justify="center">
        <Grid xs={12} height="800px">
          <Button onClick={() => setIsDrawerOpen(true)}> Teleop Panel</Button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "800px",
            }}
          >
            {!isLoaded && <Spinner scale={2} />}
            <Spline
              scene="https://prod.spline.design/UoHiOo6J5ElJYKpL/scene.splinecode"
              onLoad={handleSceneLoaded}
              style={{ display: isLoaded ? "block" : "none" }}
            />
          </div>
        </Grid>
        <Grid xs={12}>
          <div>
            <Text h3> Speech-to-Text and Text-to-Speech Module</Text>

            <Grid.Container gap={2}>
              <Grid xs={12}>
                <Code block name="🟢 STT Service" my={0}>
                  {">"} listening to next prompt ...
                  <br />
                  {">"} recognized: "Give me the apple"
                </Code>
              </Grid>
              <Grid xs={12}>
                <Code block name="🟡 TTS Service" my={0}>
                  {">"} received text: "The apple is on the table"
                  <br />
                  {">"} speaking: "The apple is on the table"
                </Code>
              </Grid>

              <Spacer />

              <div>
                <Text h3> Reasoning Module</Text>
                <Code block name="🔵 Reasoning Service" my={0}>
                  {">"} received command: "Give me the apple"
                  <br />
                  {">"} reasoning: "The apple is on the table"
                  <br />
                  {">"} action: "pick up the apple"
                </Code>

                <Spacer />

                <Text h3>CV Module</Text>
                <Grid.Container gap={2}>
                  <Grid xs={12}>
                    <Image src="https://docs.microsoft.com/en-us/learn/wwl-data-ai/detect-objects-images-custom-vision/media/produce-objects.png" />
                  </Grid>
                  <Grid xs={12}>
                    <Code block name="🔵 CV Service" my={0}>
                      {">"} object detected: "apple 98.21%"
                      <br />
                      {">"} depth estimation and spacial coordinate: (x, y, z)
                    </Code>
                  </Grid>
                </Grid.Container>

                <Spacer />

                <Text h3>Behavior Selection Controls</Text>
                <Code block name="🔵 Body controller and end effector" my={0}>
                  {">"} action: "pick up the apple"
                  <br />
                  {">"} action: "hand the apple to the user"
                  <br />
                  {">"} action: "standby"
                </Code>

                <Spacer />

                <Button mx={1} my={1} shadow type="secondary">
                  Greeting
                </Button>
                <Button mx={1} my={1} shadow type="secondary">
                  Picking up
                </Button>
                <Button mx={1} my={1} shadow type="secondary">
                  Holding
                </Button>
                <Button mx={1} my={1}>
                  Voice responding
                </Button>
                <Button mx={1} my={1} shadow type="secondary">
                  Object detection
                </Button>
                <Button mx={1} my={1} shadow type="secondary">
                  Environmental Mapping
                </Button>
                <Button mx={1} my={1}>
                  Facial Recognition
                </Button>
              </div>
            </Grid.Container>
          </div>
        </Grid>
      </Grid.Container>
    </>
  );
}

export default Control;
