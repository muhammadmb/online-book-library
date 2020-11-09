import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';

import 'react-pro-sidebar/dist/css/styles.css';

const RecomendedBar = () =>{
    return (
        <>
            <div style = {{width : "15%", right:0, position:"fixed",
             height:"80%", backgroundColor : "#1a6670"}} >
            {/* <ProSidebar>  */}
                <Menu iconShape="square" style = {{marginTop : "20%"}}>
                    <SubMenu title="Components" >
                    <MenuItem>Component 1</MenuItem>
                    <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                    <Menu iconShape="square">
                        <SubMenu title="Components">
                            <MenuItem>Component 1</MenuItem>
                            <SubMenu title="Sub Component 1" >
                            {/* you can have more nested submenus ... */}
                            </SubMenu>
                        </SubMenu>
                    </Menu>
                </Menu>
            {/* </ProSidebar> */}
            </div>
        </>
    );
}
export default RecomendedBar;