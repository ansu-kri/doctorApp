import React from "react";
import {
  Box,
  Flex,
  Button,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  useDisclosure,
  useMediaQuery,
  VStack,
  HStack,
  Link,
  Collapse,
  Icon,
} from "@chakra-ui/react";
import { SearchIcon, HamburgerIcon, AddIcon } from "@chakra-ui/icons";
// import { ReactComponent as CartIcon } from "./path/to/cart-icon.svg";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box>
      {/* Navbar */}
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem"
        bg="teal.500"
        color="white"
        position="relative"
      >
        {/* Left side - Project Name */}
        <Box fontSize="1.5rem" fontWeight="bold">
          Project Name
        </Box>

        {/* Middle - Links */}
        <Flex display={isMobile ? "none" : "flex"} flex="1" justify="center">
          <HStack spacing={4}>
            <Link href="#">Home</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Contact Us</Link>
          </HStack>
        </Flex>

        {/* Right side - Add to Cart Button with Icon */}
        <Button colorScheme="teal" variant="outline" ml={2} leftIcon={<AddIcon />}>
          Add to Cart
        </Button>


      

        {/* Hamburger Icon for Mobile */}
        {isMobile && (
          <IconButton
            aria-label="Menu"
            icon={<HamburgerIcon />}
            onClick={onToggle}
            variant="outline"
            colorScheme="teal"
            ml={2}
          />
        )}
      </Flex>

      {/* Search Bar */}
      <Flex justify="center" padding="1rem" bg="gray.100">
        <InputGroup width={isMobile ? "100%" : "50%"}>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.500" />}
          />
          <Input type="text" placeholder="Search..." />
        </InputGroup>
      </Flex>

      {/* Mobile Navigation Menu */}
      <Collapse in={isOpen}>
        <VStack
          bg="teal.500"
          color="white"
          spacing={4}
          padding="1rem"
          position="absolute"
          top="100%"
          left="0"
          width="100%"
        >
          <Link href="#">Home</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact Us</Link>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default Navbar;