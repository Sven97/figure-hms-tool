import React from "react";
import {
  Card,
  Divider,
  Progress,
  Spacer,
  Table,
  Tag,
  Text,
} from "@geist-ui/core";
// import { taskData } from "../data/data";

const TaskManagementCard = ({ taskData }) => {
  const { currentTask, pendingTasks, taskHistory } = taskData;

  const renderOutcomeTag = (outcome) => {
    return (
      <Tag type={outcome} scale={0.75}>
        {outcome}
      </Tag>
    );
  };

  return (
    <Card width="100%" type="lite">
      <Card.Content>
        <Text h4>Task Management</Text>

        <Text small b h5>
          Current Task
        </Text>
        <Text small>{currentTask.description} </Text>
        <Progress value={85} type="error" />

        <Spacer />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text small b h6>
            Start Time
          </Text>
          <Text small>{currentTask.startTime} </Text>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text small b h6>
            Est. Completion
          </Text>
          <Text small>{currentTask.estimatedCompletion} </Text>
        </div>

        <Divider />
        <Text h5>Pending Tasks</Text>
        <Table data={pendingTasks}>
          <Table.Column prop="task" label="Task" width={150} />
          <Table.Column prop="priority" label="Priority" />
        </Table>

        <Spacer />
        <Text h5>Task History</Text>
        <Table data={taskHistory}>
          <Table.Column prop="task" label="Task" width={150} />
          <Table.Column
            prop="outcome"
            label="Outcome"
            render={renderOutcomeTag}
          />
        </Table>
      </Card.Content>
    </Card>
  );
};

export default TaskManagementCard;
