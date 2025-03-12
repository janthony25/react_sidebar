# React Sidebar
## Using react-pro-sidebar

A guide to create a react sidebar in just 5 minutes 

This link for react-sidebar npm package
[Currently, two official plugins are available:](https://www.npmjs.com/package/react-pro-sidebar)

npm install react-pro-sidebar
### Check App.jsx for the implementation

### React routing
https://reactrouter.com/start/library/routing

### Code implementation 



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
