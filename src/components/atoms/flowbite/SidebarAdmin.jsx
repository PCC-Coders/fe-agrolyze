"use client";

import {Sidebar} from "flowbite-react";
import {useEffect, useState} from "react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiUser,
} from "react-icons/hi";

export default function SidebarAdmin() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='h-svh'>
      <Sidebar collapsed={collapsed} className='md:block left-0'>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href='#' icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            {/* <Sidebar.Collapse icon={HiShoppingBag} label='E-commerce'>
              <Sidebar.Item href='#'>Products</Sidebar.Item>
              <Sidebar.Item href='#'>Sales</Sidebar.Item>
              <Sidebar.Item href='#'>Refunds</Sidebar.Item>
              <Sidebar.Item href='#'>Shipping</Sidebar.Item>
            </Sidebar.Collapse> */}
            <Sidebar.Item href='#' icon={HiInbox}>
              Post Article
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={HiUser}>
              Category
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={HiShoppingBag}>
              Season
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={HiArrowSmRight}>
              Sign Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
