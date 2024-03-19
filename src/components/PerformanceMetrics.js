import React from "react";
import { Card, Text, Grid } from "@geist-ui/core";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";
// import { performanceData } from "../data/data";

const COLORS = ["#0088FE", "#FFBB28", "#FF8042"];

const PerformanceMetricsCard = ({ performanceData }) => {
  const { completionRate, avgTaskTime, errorRates } = performanceData;

  return (
    <Card width="100%" type="lite">
      <Card.Content>
        <Text h4>Performance Metrics</Text>
        <Grid.Container gap={2} justify="space-between">
          <Grid xs={12}>
            <Text small b h6>
              Task Completion
            </Text>
            <PieChart width={200} height={200}>
              <Pie data={completionRate} label>
                {completionRate.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Grid>
          <Grid xs={12}>
            <Text small b h6>
              Avg. Task Time
            </Text>
            <LineChart
              width={300}
              height={200}
              data={avgTaskTime}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="time"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </Grid>
          <Grid xs={24}>
            <Text small b h6>
              Error Rates
            </Text>
            <BarChart width={600} height={300} data={errorRates}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#F5A623" />
            </BarChart>
          </Grid>
        </Grid.Container>
      </Card.Content>
    </Card>
  );
};

export default PerformanceMetricsCard;
