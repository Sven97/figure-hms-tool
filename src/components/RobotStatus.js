import React from "react";
import {
  Card,
  Progress,
  Dot,
  Tooltip,
  Text,
  Tag,
  Divider,
  Image,
} from "@geist-ui/core";
// import { batteryData, statusData } from "../data/data";

const RobotStatusCard = ({ batteryData, statusData, imgUrl }) => {
  const batteryLevel = batteryData.level; // Assuming batteryData.level is a percentage
  const connectivity = statusData.connectivity; // Assuming this is an object with {status: 'online/offline', strength: 'high/medium/low'}
  const location = statusData.location; // Assuming a string value
  const operationalStatus = statusData.operationalStatus; // Assuming a string value

  return (
    <Card width="100%" type="lite">
      <Card.Content>
        <Text h4>Robot Status</Text>

        <Image src={imgUrl} />
        <Text small b h5>
          Current Battery Level
        </Text>
        <Progress value={batteryLevel} type="success" />
        <Text small>{batteryData.estimatedTime} until recharge needed</Text>

        <Divider />
        <Text small b h5>
          Connectivity Status
        </Text>

        <Dot label={connectivity.status} type="success">
          <Tooltip text={`Signal strength: ${connectivity.strength}`}>
            <Text>{connectivity.status.toUpperCase()}</Text>
          </Tooltip>
        </Dot>

        <Divider />

        <Text small b h5>
          Location
        </Text>
        <Text>{location}</Text>

        <Divider />

        <Text small b h5>
          Operational Status
        </Text>
        <Tag type="lite">{operationalStatus}</Tag>
      </Card.Content>
    </Card>
  );
};

export default RobotStatusCard;
