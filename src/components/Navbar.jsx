import React from "react";
import { Link } from "react-router-dom";
import { Button, Menu, Typography, Avatar } from "antd";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
  ProjectOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        {/*  <Button className="menu-control-container">
          <MenuOutlined />
        </Button> */}
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<ProfileOutlined />}>
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item icon={<ProjectOutlined />}>
            <Link to="/projects">Projects</Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}
