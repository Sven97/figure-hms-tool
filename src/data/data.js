export const robotsData = {
  "FIGURE01-A": {
    imgUrl:
      "https://images.ctfassets.net/qx5k8y1u9drj/1YcUVnBBQhZxQgnEI2awzD/f30add46908528c253c30c96b0a8ef60/Figure_humanoid__2_.png?fm=webp&w=1440&q=70",
    batteryData: {
      level: 75, // Battery level as a percentage
      estimatedTime: "2 hrs", // Estimated time until recharge needed
    },
    statusData: {
      connectivity: {
        status: "online", // Could be 'online' or 'offline'
        strength: "high", // Signal strength
      },
      location: "Warehouse Section A", // Current location
      operationalStatus: "Idle", // Current operational status
    },
    taskData: {
      currentTask: {
        description: "Inventory check in Section B",
        startTime: "2024-03-18 09:00",
        estimatedCompletion: "2024-03-18 11:00",
      },
      pendingTasks: [
        { task: "Replenish stock in Aisle 5", priority: "High" },
        { task: "Routine maintenance check", priority: "Medium" },
        // Add more tasks as needed
      ],
      taskHistory: [
        { task: "Clean up spill in Aisle 2", outcome: "success" },
        { task: "Assist in loading dock", outcome: "warning" },
        // Add more history items as needed
      ],
    },
    performanceData: {
      completionRate: [
        { name: "Completed", value: 400 },
        { name: "Failed", value: 100 },
        { name: "Interrupted", value: 50 },
      ],
      avgTaskTime: [
        { name: "Jan", time: 30 },
        { name: "Feb", time: 28 },
        { name: "Mar", time: 32 },
        { name: "Apr", time: 27 },
        { name: "May", time: 25 },
        { name: "Jun", time: 30 },
        { name: "Jul", time: 29 },
        { name: "Aug", time: 26 },
        { name: "Sep", time: 22 },
        { name: "Oct", time: 23 },
        { name: "Nov", time: 25 },
        { name: "Dec", time: 15 },
      ],
      errorRates: [
        { type: "Navigation", count: 12 },
        { type: "Sensor", count: 7 },
        { type: "Mechanical", count: 5 },
        { type: "Power", count: 3 },
        { type: "Software", count: 10 },
        { type: "Communication", count: 8 },
      ],
    },
    alertData: {
      maintenanceAlerts: [
        "Battery replacement due in 5 days",
        "Sensor calibration overdue",
        // Add more alerts as needed
      ],
      operationalAlerts: [
        "Low battery alert for Robot #2",
        "Connectivity issue detected in Robot #3",
        // Add more alerts as needed
      ],
      environmentalAlerts: [
        "Unexpected object detected in navigation path",
        "High temperature alert in working area",
        // Add more alerts as needed
      ],
    },
  },
  "FIGURE01-B": {
    imgUrl:
      "https://images.ctfassets.net/qx5k8y1u9drj/2NZph2rTce9h68y5snJLbU/698fe48210e29596c7c5b0a4fca96861/Screenshot_2023-10-17_at_5.42.21_AM.png?fm=webp&w=1440&q=70",
    batteryData: {
      level: 90,
      estimatedTime: "4 hrs",
    },
    statusData: {
      connectivity: {
        status: "offline",
        strength: "low",
      },
      location: "Warehouse Section B",
      operationalStatus: "Active",
    },
    taskData: {
      currentTask: {
        description: "Re-stocking in Section C",
        startTime: "2024-03-18 10:00",
        estimatedCompletion: "2024-03-18 12:00",
      },
      pendingTasks: [
        { task: "Software update", priority: "High" },
        { task: "Battery check", priority: "Low" },
      ],
      taskHistory: [
        { task: "Inventory audit in Section D", outcome: "success" },
        { task: "Technical maintenance", outcome: "success" },
      ],
    },
    performanceData: {
      completionRate: [
        { name: "Completed", value: 450 },
        { name: "Failed", value: 50 },
        { name: "Interrupted", value: 30 },
      ],
      avgTaskTime: [
        { name: "Jan", time: 35 },
        { name: "Feb", time: 33 },
        { name: "Mar", time: 37 },
        { name: "Apr", time: 32 },
        { name: "May", time: 28 },
        { name: "Jun", time: 33 },
        { name: "Jul", time: 31 },
        { name: "Aug", time: 29 },
        { name: "Sep", time: 27 },
        { name: "Oct", time: 26 },
        { name: "Nov", time: 30 },
        { name: "Dec", time: 20 },
      ],
      errorRates: [
        { type: "Navigation", count: 10 },
        { type: "Sensor", count: 5 },
        { type: "Mechanical", count: 7 },
        { type: "Power", count: 4 },
        { type: "Software", count: 12 },
        { type: "Communication", count: 6 },
      ],
    },
    alertData: {
      maintenanceAlerts: [
        "Sensor replacement due in 10 days",
        "Hardware diagnostic required",
      ],
      operationalAlerts: [
        "High temperature alert for Robot #4",
        "Low signal strength in Robot #5",
      ],
      environmentalAlerts: [
        "Obstacle detected in Aisle 3",
        "Low light conditions in Section F",
      ],
    },
  },

  "FIGURE01-C": {
    imgUrl:
      "https://images.ctfassets.net/qx5k8y1u9drj/4P6sNRvEWouChrGNpa2tTl/09e9ef2a16e7eff41d88244784a3ec03/NEW-_DSCF1820_Desktop_10923A__3_.jpg?fm=webp&w=2000&q=70",
    batteryData: {
      level: 65,
      estimatedTime: "1.5 hrs",
    },
    statusData: {
      connectivity: {
        status: "online",
        strength: "medium",
      },
      location: "Delivery Bay",
      operationalStatus: "Loading",
    },
    taskData: {
      currentTask: {
        description: "Loading delivery van #2",
        startTime: "2024-03-18 08:30",
        estimatedCompletion: "2024-03-18 09:30",
      },
      pendingTasks: [
        { task: "Deliver package to Section E", priority: "High" },
        { task: "Charge battery", priority: "Urgent" },
      ],
      taskHistory: [
        { task: "Unload delivery van #3", outcome: "success" },
        { task: "Maintenance check", outcome: "success" },
      ],
    },
    performanceData: {
      completionRate: [
        { name: "Completed", value: 500 },
        { name: "Failed", value: 40 },
        { name: "Interrupted", value: 10 },
      ],
      avgTaskTime: [
        { name: "Jan", time: 25 },
        { name: "Feb", time: 23 },
        { name: "Mar", time: 27 },
        { name: "Apr", time: 22 },
        { name: "May", time: 20 },
        { name: "Jun", time: 25 },
        { name: "Jul", time: 24 },
        { name: "Aug", time: 21 },
        { name: "Sep", time: 19 },
        { name: "Oct", time: 20 },
        { name: "Nov", time: 22 },
        { name: "Dec", time: 18 },
      ],
      errorRates: [
        { type: "Navigation", count: 8 },
        { type: "Sensor", count: 4 },
        { type: "Mechanical", count: 3 },
        { type: "Power", count: 2 },
        { type: "Software", count: 5 },
        { type: "Communication", count: 7 },
      ],
    },
    alertData: {
      maintenanceAlerts: [
        "Immediate battery inspection required",
        "Firmware update available",
      ],
      operationalAlerts: [
        "Overload warning in Robot #7",
        "System overheating in Robot #8",
      ],
      environmentalAlerts: [
        "Slippery floor detected in Section G",
        "Power outage in Section H",
      ],
    },
  },
};
