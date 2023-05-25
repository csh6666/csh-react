import React, { useState } from 'react';
import {
   AppstoreOutlined,
   ContainerOutlined,
   MenuFoldOutlined,
   PieChartOutlined,
   DesktopOutlined,
   MailOutlined,
   MenuUnfoldOutlined
} from '@ant-design/icons';
import {
   useNavigate,
   useRoutes 
} from "react-router-dom";
import { Button, Menu } from 'antd';
import './App.scss'
import menu from '@/router/menu'
function getItem (label, key, icon, children, type) {
   return {
      key,
      icon,
      children,
      label,
      type,
   };
}
const items = [
   getItem('Option 1', '1', <PieChartOutlined />),
   getItem('Option 2', '2', <DesktopOutlined />),
   getItem('Option 3', '3', <ContainerOutlined />),
   getItem('Navigation One', 'sub1', <MailOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
   ]),
   getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
   ]),
];
const App = () => {
   const [collapsed, setCollapsed] = useState(false);
   const [menuName, setMeneName] = useState('Option 1');
   const navigate = useNavigate();
   const toggleCollapsed = () => {
      setCollapsed(!collapsed);
   };
   const onClick = (e) => {
      console.log('click ', e);
      setMeneName(e.domEvent.target.innerText);
      navigate("/name");
   };
   let routerMap = useRoutes(menu);
   return (
      <div className='App-main'>
         <div className='left-part'
         >
            <Button
               type="primary"
               onClick={toggleCollapsed}
               className='layaside'
            >
               {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
               className='menu-list'
               defaultSelectedKeys={['1']}
               defaultOpenKeys={['sub1']}
               mode="inline"
               theme="dark"
               inlineCollapsed={collapsed}
               items={items}
               onClick={onClick}
            />
         </div>
         <div className='right-part'>
            <div className='header-title'>
               {menuName}
            </div>
            <div className='main'>
              {routerMap}
            </div>
         </div>
      </div>
   );
};
export default App;