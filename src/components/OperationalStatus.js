import React from "react";
import { Card, Tag } from "@geist-ui/core";

const OperationalStatus = ({ status }) => (
  <Card>
    <Card.Content>
      <h3>Operational Status</h3>
      <div>
        {status.map((s, index) => (
          <Tag key={index} type="lite" style={{ marginRight: "10px" }}>
            {s.robot}: {s.status}
          </Tag>
        ))}
      </div>
    </Card.Content>
  </Card>
);

export default OperationalStatus;
