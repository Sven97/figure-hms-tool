import React from "react";
import {
  Drawer,
  Text,
  Grid,
  Select,
  Spacer,
  Checkbox,
  Divider,
  Slider,
  Tabs,
} from "@geist-ui/core";

function TeleopDrawer(props) {
  const handler = (val) => console.log(val);
  return (
    <>
      <Text h4> End Effector Teleop</Text>
      <Grid.Container gap={2}>
        <Grid xs={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Text b> base</Text>
            <Select
              placeholder="Choose one"
              initialValue="1"
              onChange={handler}
            >
              <Select.Option value="1">xyz only</Select.Option>
              <Select.Option value="2">fixed</Select.Option>
            </Select>
          </div>
        </Grid>
        <Grid xs={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Text b> back</Text>
            <Select
              placeholder="Choose one"
              initialValue="2"
              onChange={handler}
            >
              <Select.Option value="1">xyz only</Select.Option>
              <Select.Option value="2">fixed</Select.Option>
            </Select>
          </div>
        </Grid>
        <Grid xs={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Text b> l_hand</Text>
            <Select
              placeholder="Choose one"
              onChange={handler}
              initialValue="2"
            >
              <Select.Option value="1">ee fixed</Select.Option>
              <Select.Option value="2">arm fixed</Select.Option>
            </Select>
          </div>
        </Grid>
        <Grid xs={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Text b> r_hand</Text>
            <Select
              placeholder="Choose one"
              onChange={handler}
              initialValue="1"
            >
              <Select.Option value="1">ee fixed</Select.Option>
              <Select.Option value="2">arm fixed</Select.Option>
            </Select>
          </div>
        </Grid>
        <Grid xs={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Text b> l_foot</Text>
            <Select
              placeholder="Choose one"
              onChange={handler}
              initialValue="2"
            >
              <Select.Option value="1">fixed</Select.Option>
              <Select.Option value="2">constrained</Select.Option>
            </Select>
          </div>
        </Grid>
        <Grid xs={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Text b> r_foot</Text>
            <Select
              placeholder="Choose one"
              onChange={handler}
              initialValue="1"
            >
              <Select.Option value="1">fixed</Select.Option>
              <Select.Option value="2">constrained</Select.Option>
            </Select>
          </div>
        </Grid>
      </Grid.Container>
      <Spacer />
      <Checkbox checked={true}>Advanced Options</Checkbox>
      <Spacer />
      <Text b> Supports</Text>
      <Checkbox.Group value={["l_foot"]} onChange={handler}>
        <Checkbox value="l_foot">Left Foot</Checkbox>
        <Checkbox value="r_foot">Right Foot</Checkbox>
        <Checkbox value="l_hand">Left Hand</Checkbox>
        <Checkbox value="r_hand">Right Hand</Checkbox>
      </Checkbox.Group>

      <Divider />
      <Spacer />

      <Text h4> Joint Teleop</Text>

      <Tabs initialValue="1">
        <Tabs.Item label="base" value="1">
          <Text> x</Text>
          <Slider initialValue={-0.464} min={-1} max={1} />
          <Text> y</Text>
          <Slider initialValue={-0.273} min={-1} max={1} />
          <Text> z</Text>
          <Slider initialValue={0.712} min={-1} max={1} />
          <Text> roll</Text>
          <Slider initialValue={0.354} min={-1} max={1} />
          <Text> pitch</Text>
          <Slider initialValue={-0.456} min={-1} max={1} />
          <Text> yaw</Text>
          <Slider initialValue={0.819} min={-1} max={1} />
        </Tabs.Item>

        <Tabs.Item label="back" value="2">
          <Text> x</Text>
          <Slider initialValue={0.732} min={-1} max={1} />
          <Text> y</Text>
          <Slider initialValue={-0.619} min={-1} max={1} />
          <Text> z</Text>
          <Slider initialValue={-0.495} min={-1} max={1} />
          <Text> roll</Text>
          <Slider initialValue={0.173} min={-1} max={1} />
          <Text> pitch</Text>
          <Slider initialValue={0.681} min={-1} max={1} />
          <Text> yaw</Text>
          <Slider initialValue={-0.297} min={-1} max={1} />
        </Tabs.Item>

        <Tabs.Item label="left arm" value="3">
          <Text> x</Text>
          <Slider initialValue={-0.929} min={-1} max={1} />
          <Text> y</Text>
          <Slider initialValue={0.617} min={-1} max={1} />
          <Text> z</Text>
          <Slider initialValue={-0.128} min={-1} max={1} />
          <Text> roll</Text>
          <Slider initialValue={0.891} min={-1} max={1} />
          <Text> pitch</Text>
          <Slider initialValue={-0.426} min={-1} max={1} />
          <Text> yaw</Text>
          <Slider initialValue={0.245} min={-1} max={1} />
        </Tabs.Item>

        <Tabs.Item label="right arm" value="4">
          <Text> x</Text>
          <Slider initialValue={0.528} min={-1} max={1} />
          <Text> y</Text>
          <Slider initialValue={-0.732} min={-1} max={1} />
          <Text> z</Text>
          <Slider initialValue={0.618} min={-1} max={1} />
          <Text> roll</Text>
          <Slider initialValue={-0.362} min={-1} max={1} />
          <Text> pitch</Text>
          <Slider initialValue={0.712} min={-1} max={1} />
          <Text> yaw</Text>
          <Slider initialValue={-0.819} min={-1} max={1} />
        </Tabs.Item>

        <Tabs.Item label="left leg" value="5">
          <Text> x</Text>
          <Slider initialValue={0.342} min={-1} max={1} />
          <Text> y</Text>
          <Slider initialValue={-0.718} min={-1} max={1} />
          <Text> z</Text>
          <Slider initialValue={0.825} min={-1} max={1} />
          <Text> roll</Text>
          <Slider initialValue={0.293} min={-1} max={1} />
          <Text> pitch</Text>
          <Slider initialValue={-0.628} min={-1} max={1} />
          <Text> yaw</Text>
          <Slider initialValue={-0.524} min={-1} max={1} />
        </Tabs.Item>

        <Tabs.Item label="right leg" value="6">
          <Text> x</Text>
          <Slider initialValue={-0.612} min={-1} max={1} />
          <Text> y</Text>
          <Slider initialValue={0.826} min={-1} max={1} />
          <Text> z</Text>
          <Slider initialValue={-0.491} min={-1} max={1} />
          <Text> roll</Text>
          <Slider initialValue={-0.728} min={-1} max={1} />
          <Text> pitch</Text>
          <Slider initialValue={0.419} min={-1} max={1} />
          <Text> yaw</Text>
          <Slider initialValue={-0.937} min={-1} max={1} />
        </Tabs.Item>
      </Tabs>
    </>
  );
}

export default TeleopDrawer;
