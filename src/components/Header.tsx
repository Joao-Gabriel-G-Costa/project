import { BellIcon, HamburgerIcon, MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Badge,
  Box,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Database } from "lucide-react";
import React from "react";

interface HeaderProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, isSidebarOpen }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      as="header"
      position="fixed"
      w="100%"
      bg={bgColor}
      boxShadow="sm"
      zIndex={10}
      borderBottom="1px"
      borderColor={borderColor}
      transition="box-shadow 0.2s"
      _hover={{ boxShadow: "md" }}
    >
      <Flex px={4} h="64px" align="center" justify="space-between">
        <Flex align="center">
          <IconButton
            icon={<HamburgerIcon />}
            variant="ghost"
            fontSize="20px"
            aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
            onClick={onToggleSidebar}
            mr={2}
          />
          <Flex align="center" ml={2}>
            <Database size={24} />
            <Text fontSize="lg" fontWeight="bold" ml={2} display={{ base: "none", md: "flex" }}>
              Dashboard
            </Text>
          </Flex>
        </Flex>

        <InputGroup maxW="400px" display={{ base: "none", md: "block" }}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.500" />
          </InputLeftElement>
          <Input
            placeholder="Search..."
            borderRadius="md"
            _focus={{
              borderColor: "brand.500",
              boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)",
            }}
          />
        </InputGroup>

        <HStack spacing={2}>
          <Tooltip label="Search" display={{ base: "block", md: "none" }}>
            <IconButton
              aria-label="Search"
              icon={<SearchIcon />}
              variant="ghost"
              display={{ base: "flex", md: "none" }}
            />
          </Tooltip>

          <Tooltip label={colorMode === "light" ? "Dark mode" : "Light mode"}>
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
            />
          </Tooltip>

          <Menu>
            <Tooltip label="Notifications">
              <MenuButton
                as={IconButton}
                aria-label="Notifications"
                icon={
                  <>
                    <BellIcon />
                    <Badge
                      position="absolute"
                      top="6px"
                      right="6px"
                      fontSize="xs"
                      colorScheme="red"
                      borderRadius="full"
                      transform="scale(0.8)"
                    >
                      3
                    </Badge>
                  </>
                }
                variant="ghost"
              />
            </Tooltip>
            <MenuList>
              <MenuItem>New notification 1</MenuItem>
              <MenuItem>New notification 2</MenuItem>
              <MenuItem>New notification 3</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton>
              <Avatar size="sm" name="User Name" bg="brand.500" />
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Help</MenuItem>
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
