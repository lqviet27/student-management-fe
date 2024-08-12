import React from 'react';
import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from 'react-router-dom';







const SideBar = (props) => {

  const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(false);
  const [hasImage, setHasImage] = useState(false);

  const { collapsed } = props;
  return (
    <div style={{ display: 'flex', height: '100%'}}>
      <Sidebar
        collapsed={collapsed}
      >
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <div style={{ flex: 1, marginBottom: '32px' }}>
            <div style={{ padding: '0 24px', marginBottom: '8px' }}>

            </div>
            <Menu >
              <MenuItem
                component={<Link to="/admins" />}>
                DashBoard
              </MenuItem>
              <MenuItem 
                  component={<Link to="/admins/manage-students" />}> 
                  Manage Student
              </MenuItem>
              <MenuItem 
                  component={<Link to="/admins/manage-users" />}> 
                  Manage User
              </MenuItem>
              <SubMenu label="Features">
                <MenuItem> Line charts</MenuItem>
                <MenuItem> Bar charts</MenuItem>
              </SubMenu>
            </Menu>
            <div style={{ padding: '0 24px', marginBottom: '8px', marginTop: '32px' }}></div>
          </div>
        </div>
      </Sidebar>

      <main>
        <div style={{ padding: '16px 24px', color: '#44596e' }}>
          <div style={{ marginBottom: '16px' }}>
            {broken && (
              <button className="sb-button" onClick={() => setToggled(!toggled)}>
                Toggle
              </button>
            )}
          </div>
          <div style={{ marginBottom: '48px' }}>

          </div>

          <div style={{ padding: '0 8px' }}>
            <div style={{ marginBottom: 16 }}>
              
            </div>

            <div style={{ marginBottom: 16 }}>
              
            </div>

            <div style={{ marginBottom: 16 }}>
              
            </div>

        
          </div>
        </div>
      </main>
    </div>
  );
};

export default SideBar;
