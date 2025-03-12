import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import Home from "./components/Home";
import Documentation from "./components/Documentation";
import {ArrowLeftFromLine, ArrowRightFromLine} from "lucide-react"

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
        <div style={{ display: "flex", height: "100vh" }}>
          {/* Sidebar */}
          <Sidebar collapsed={collapsed} className="bg-blue-800/30">
            <Menu>
            <MenuItem onClick={() => setCollapsed(!collapsed)}>
                {collapsed ? <ArrowRightFromLine />  : <ArrowLeftFromLine />}
              </MenuItem>
              <MenuItem component={<Link to="/" />}>Home</MenuItem>
              <MenuItem component={<Link to="/documentation" />}>Documentation</MenuItem>
              <SubMenu label="Charts">
                <MenuItem>Pie charts</MenuItem>
                <MenuItem>Line charts</MenuItem>
              </SubMenu>
              
            </Menu>
          </Sidebar>

          {/* Main Content */}
          <main className="p-20  flex-1">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/documentation" element={<Documentation />} />
            </Routes>
          </main>
        </div>
    </Router>
    
  );
};

export default App;
