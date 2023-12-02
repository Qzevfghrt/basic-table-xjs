"use client";
import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { FileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import "@/styles/global.scss";

const { Sider, Content } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("表格1", "1", <FileOutlined />),
  getItem("表格2", "2", <FileOutlined />),
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <html lang="en">
      <body>
        <Layout>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <Menu
              theme="dark"
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={items}
            />
          </Sider>
          <Content className="p-12">
            {children}
          </Content>
        </Layout>
      </body>
    </html>
  );
}
