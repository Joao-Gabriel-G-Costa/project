import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const bgColor = useColorModeValue("gray.50", "gray.900");

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    
    <Box minH="100vh" bg={bgColor}>
      <Header onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} />
      <Box
        as="main"
        ml={isSidebarOpen ? "240px" : "64px"}
        pt="64px"
        transition="margin-left 0.3s ease"
        p={20} //Welcome dashboard padding
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;

