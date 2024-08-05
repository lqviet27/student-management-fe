import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";








const SideBar = () => {
  // return (
  //   <>
  //     <Sidebar>
  //       <Menu>
  //         <SubMenu label="Charts">
  //           <MenuItem> Pie charts </MenuItem>
  //           <MenuItem> Line charts </MenuItem>
  //         </SubMenu>
  //         <MenuItem> Documentation </MenuItem>
  //         <MenuItem> Calendar </MenuItem>
  //       </Menu>
  //     </Sidebar>
  //   </>
  // );
  const [collapsed, setCollapsed] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);
  const [broken, setBroken] = React.useState(false);
  const [hasImage, setHasImage] = React.useState(false);


  return (
    <div style={{ display: 'flex', height: '100%'}}>
      <Sidebar
      >
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <div style={{ flex: 1, marginBottom: '32px' }}>
            <div style={{ padding: '0 24px', marginBottom: '8px' }}>

            </div>
            <Menu >
              <SubMenu
                label="Charts"

              >
                <MenuItem> Pie charts</MenuItem>
                <MenuItem> Line charts</MenuItem>
                <MenuItem> Bar charts</MenuItem>
              </SubMenu>
              <SubMenu label="Maps" >
                <MenuItem> Google maps</MenuItem>
                <MenuItem> Open street maps</MenuItem>
              </SubMenu>
              <SubMenu label="Theme" >
                <MenuItem> Dark</MenuItem>
                <MenuItem> Light</MenuItem>
              </SubMenu>
              <SubMenu label="Components" >
                <MenuItem> Grid</MenuItem>
                <MenuItem> Layout</MenuItem>
                <SubMenu label="Forms">
                  <MenuItem> Input</MenuItem>
                  <MenuItem> Select</MenuItem>
                  <SubMenu label="More">
                    <MenuItem> CheckBox</MenuItem>
                    <MenuItem> Radio</MenuItem>
                  </SubMenu>
                </SubMenu>
              </SubMenu>
              <SubMenu label="E-commerce" >
                <MenuItem> Product</MenuItem>
                <MenuItem> Orders</MenuItem>
                <MenuItem> Credit card</MenuItem>
              </SubMenu>
            </Menu>

            <div style={{ padding: '0 24px', marginBottom: '8px', marginTop: '32px' }}>

            </div>

            <Menu >
              <MenuItem  
              >
                Calendar
              </MenuItem>
              <MenuItem >Documentation</MenuItem>
              <MenuItem disabled >
                Examples
              </MenuItem>
            </Menu>
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
