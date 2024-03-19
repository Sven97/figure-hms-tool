import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "@geist-ui/core";

const BatteryLevel = ({ data }) => (
  <Card>
    <Card.Content>
      <h3>Battery Level</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="batteryLevel" fill="#0070f3" />
        </BarChart>
      </ResponsiveContainer>
    </Card.Content>
  </Card>
);

export default BatteryLevel;
