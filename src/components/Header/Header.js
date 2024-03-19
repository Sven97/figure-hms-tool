import React from "react";
import { Tabs, Text } from "@geist-ui/core";
import { Home, Activity, Settings, PieChart, Zap } from "@geist-ui/icons";

function Header({ onTabChange }) {
  const Logo = () => (
    <svg
      className="navigation__logo"
      width="12"
      height="24"
      viewBox="0 0 12 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.1101 5.99701H11.2328C11.6291 5.99701 11.9496 5.67477 11.9496 5.27753V0.71948C11.9496 0.321739 11.6286 0 11.2328 0H6.69212C6.29585 0 5.97531 0.322246 5.97531 0.71948V4.8575C5.97531 5.48679 5.46697 5.99701 4.84001 5.99701H0.716815C0.320547 5.99701 0 6.31926 0 6.71649V11.274C0 11.6718 0.321052 11.9935 0.716815 11.9935H4.83951C5.46647 11.9935 5.9748 12.5037 5.9748 13.133V16.851C5.9748 17.4803 5.46647 17.9905 4.83951 17.9905H0.716815C0.320547 17.9905 0 18.3128 0 18.71V23.2676C0 23.6653 0.321052 23.987 0.716815 23.987H5.25748C5.65375 23.987 5.9743 23.6648 5.9743 23.2676V19.1295C5.9743 18.5003 6.48263 17.99 7.10959 17.99H11.2323C11.6286 17.99 11.9491 17.6678 11.9491 17.2705V12.713C11.9491 12.3153 11.628 11.9935 11.2323 11.9935H7.10959C6.48263 11.9935 5.9743 11.4833 5.9743 10.854V7.13602C5.9743 6.50673 6.48263 5.99651 7.10959 5.99651L7.1101 5.99701Z"
        fill="currentColor"
      ></path>
    </svg>
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        borderBottom: "1px solid #eaeaea",
      }}
    >
      <Tabs
        initialValue="home"
        align="left"
        hideBorder
        hideDivider
        leftSpace={0}
        onChange={onTabChange}
      >
        <Tabs.Item
          label={
            <>
              <Home />
              Home
            </>
          }
          value="home"
        />
        <Tabs.Item
          label={
            <>
              <Activity />
              Calibration
            </>
          }
          value="calibration"
        />
        <Tabs.Item
          label={
            <>
              <Settings />
              <Text del>Configuration</Text>
            </>
          }
          disabled={true}
          value="configuration"
        />
        <Tabs.Item
          label={
            <>
              <PieChart />
              Dashboard
            </>
          }
          value="dashboard"
        />
        <Tabs.Item
          label={
            <>
              <Zap />
              Control
            </>
          }
          value="control"
        />
      </Tabs>
      <Logo />
    </div>
  );
}

export default Header;
