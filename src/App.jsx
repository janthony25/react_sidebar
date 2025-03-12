import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} style={{ backgroundColor: "#333", color: "" }}>
        <Menu>
          <SubMenu label="Charts">
            <MenuItem>Pie charts</MenuItem>
            <MenuItem>Line charts</MenuItem>
          </SubMenu>
          <MenuItem>Documentation</MenuItem>
          <MenuItem>Calendar</MenuItem>
          <MenuItem onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? "Expand" : "Collapse"}
          </MenuItem>
        </Menu>
      </Sidebar>

      {/* Main Content */}
      <main style={{ padding: "20px", flex: 1 }}>
        <h1>Welcome to My App</h1>
        <p>This is the main content area.</p>
      </main>
    </div>
  );
};

export default App;
