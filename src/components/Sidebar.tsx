import { CalendarIcon, InfoIcon, SettingsIcon, StarIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Text, Tooltip, useColorModeValue, VStack } from "@chakra-ui/react";
import { BarChart, Briefcase, HelpCircle, HomeIcon, PieChart, Users } from "lucide-react";
import React from "react";

interface NavItemProps {
  icon: React.ReactElement;
  label: string;
  isActive?: boolean;
  isExpanded: boolean;
}

interface SidebarProps {
  isOpen: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive = false, isExpanded }) => {
  const activeBg = useColorModeValue("brand.50", "whiteAlpha.200");
  const activeColor = useColorModeValue("brand.600", "white");
  const inactiveColor = useColorModeValue("gray.600", "gray.400");
  const hoverBg = useColorModeValue("gray.100", "whiteAlpha.100");

  return (
    <Tooltip label={isExpanded ? "" : label} placement="right" openDelay={500}>
      <Flex
        align="center"
        px={4}
        py={3}
        cursor="pointer"
        role="group"
        fontWeight={isActive ? "semibold" : "normal"}
        transition="all 0.2s"
        bg={isActive ? activeBg : "transparent"}
        color={isActive ? activeColor : inactiveColor}
        borderRadius="md"
        _hover={{ bg: hoverBg }}
        w="full"
      >
        <Box fontSize="lg" color={isActive ? "brand.500" : "inherit"}>
          {icon}
        </Box>
        <Text
          ml={4}
          display={isExpanded ? "block" : "none"}
          opacity={isExpanded ? 1 : 0}
          transition="all 0.3s"
        >
          {label}
        </Text>
      </Flex>
    </Tooltip>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      as="nav"
      position="fixed"
      top="64px"
      left={0}
      h="calc(100vh - 64px)"
      bg={bgColor}
      borderRight="1px"
      borderColor={borderColor}
      w={isOpen ? "240px" : "64px"}
      transition="width 0.3s ease"
      overflowX="hidden"
      zIndex={5}
    >
      <VStack align="stretch" spacing={1} mt={4}>
        <NavItem icon={<Icon as={HomeIcon} />} label="Home" isActive isExpanded={isOpen} />
        <NavItem icon={<Icon as={ViewIcon} />} label="Dashboard" isExpanded={isOpen} />
        <NavItem icon={<BarChart size={18} />} label="Analytics" isExpanded={isOpen} />
        <NavItem icon={<PieChart size={18} />} label="Reports" isExpanded={isOpen} />
        <NavItem icon={<Users size={18} />} label="Users" isExpanded={isOpen} />
        <NavItem icon={<Icon as={CalendarIcon} />} label="Calendar" isExpanded={isOpen} />
        <NavItem icon={<Briefcase size={18} />} label="Projects" isExpanded={isOpen} />
        <NavItem icon={<Icon as={StarIcon} />} label="Favorites" isExpanded={isOpen} />

        <Box mt={8} px={4} fontSize="xs" color="gray.500" display={isOpen ? "block" : "none"}>
          <Text>SETTINGS</Text>
        </Box>

        <NavItem icon={<Icon as={SettingsIcon} />} label="Settings" isExpanded={isOpen} />
        <NavItem icon={<Icon as={InfoIcon} />} label="About" isExpanded={isOpen} />
        <NavItem icon={<HelpCircle size={18} />} label="Help" isExpanded={isOpen} />
      </VStack>
    </Box>
  );
};

export default Sidebar;
