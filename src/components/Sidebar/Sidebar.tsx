import React, { FC } from 'react';
import { Layout } from 'antd';

import './styles.scss';

const { Sider } = Layout;

const Sidebar: FC = () => {
  return <Sider className="sideBar">Sidebar</Sider>;
};

export default Sidebar;
