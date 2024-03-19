import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { Card } from "@geist-ui/core";

const COLORS = ["#00C49F", "#FF8042"];

const TaskCompletionRate = ({ data }) => (
  <Card>
    <Card.Content>
      <h3>Task Completion Rate</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Card.Content>
  </Card>
);

export default TaskCompletionRate;
