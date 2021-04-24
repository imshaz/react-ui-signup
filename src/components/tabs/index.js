import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";

function index() {
  return (
    <Tabs>
      <TabList>
        <Tab>Login</Tab>
        <Tab>Sign up</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>login</TabPanel>
        <TabPanel>signup</TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default index;
