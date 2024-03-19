import React from "react";
import { Grid, Card, Text, Tabs } from "@geist-ui/core";
import RobotStatus from "../../components/RobotStatus";
import TaskManagement from "../../components/TaskManagement";
import PerformanceMetrics from "../../components/PerformanceMetrics";
import AlertsNotifications from "../../components/AlertsNotifications";
import { robotsData } from "../../data/data";

function Dashboard(props) {
  return (
    <div>
      <Text h1>Dashboard Demo</Text>
      <Tabs initialValue="FIGURE01-A" hideDivider>
        {Object.entries(robotsData).map(([robotId, data]) => (
          <Tabs.Item label={robotId} value={robotId} key={robotId}>
            <Grid.Container gap={2} justify="center">
              {/* Repeat for each component, passing the relevant data */}
              <Grid xs={24} sm={12} md={12} lg={6}>
                <Card shadow width="100%">
                  <RobotStatus
                    imgUrl={data.imgUrl}
                    batteryData={data.batteryData}
                    statusData={data.statusData}
                  />
                </Card>
              </Grid>

              {/* Task Management */}
              <Grid xs={24} sm={12} md={12} lg={6}>
                <Card shadow width="100%">
                  <TaskManagement taskData={data.taskData} />
                </Card>
              </Grid>

              {/* Performance Metrics */}
              <Grid xs={24} sm={24} md={24} lg={12}>
                <Card shadow width="100%">
                  <PerformanceMetrics performanceData={data.performanceData} />
                </Card>
              </Grid>

              {/* Alerts and Notifications */}
              <Grid xs={24} sm={24} md={24} lg={24}>
                <Card shadow width="100%">
                  <AlertsNotifications alertData={data.alertData} />
                </Card>
              </Grid>
            </Grid.Container>
          </Tabs.Item>
        ))}
      </Tabs>
    </div>
  );
}

export default Dashboard;
