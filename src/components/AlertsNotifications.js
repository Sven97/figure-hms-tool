import React from "react";
import { Card, Collapse, Text } from "@geist-ui/core";
// import { alertData } from "../data/data";

const AlertsNotificationsCard = ({ alertData }) => {
  const { maintenanceAlerts, operationalAlerts, environmentalAlerts } =
    alertData;

  return (
    <Card width="100%" type="lite">
      <Card.Content>
        <Text h4>Alerts and Notifications</Text>
        <Collapse.Group>
          <Collapse title="⚙️ Maintenance Alerts" initialVisible>
            {maintenanceAlerts.map((alert, index) => (
              <Text key={index}>{alert}</Text>
            ))}
          </Collapse>
          <Collapse title="🔋 Operational Alerts">
            {operationalAlerts.map((alert, index) => (
              <Text key={index}>{alert}</Text>
            ))}
          </Collapse>
          <Collapse title="🚧 Environmental Alerts">
            {environmentalAlerts.map((alert, index) => (
              <Text key={index}>{alert}</Text>
            ))}
          </Collapse>
        </Collapse.Group>
      </Card.Content>
    </Card>
  );
};

export default AlertsNotificationsCard;
