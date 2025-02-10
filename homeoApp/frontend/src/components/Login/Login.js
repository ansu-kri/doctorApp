import React, { useState } from "react";
import {
    ChakraProvider,
    Box,
    FormControl,
    Input,
    Button,
    Center,
    Icon,
    useToast,
    Heading,
    Flex,
    Text,
    Image,
    InputGroup,
    InputRightElement,
    IconButton,
    Link,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    FormLabel,
    useDisclosure,
    useBreakpointValue,
    Stack,
    keyframes,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FaUser, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { signin } from "../../Redux/AuthReducer/Action";
// import BgImg from "../Images/BgImg.png";
// import doctorsImg from "../Images/doctorsImg.jpg";
import { motion } from "framer-motion";

const Login = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showPassword, setShowPassword] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false); // State to toggle between login and sign-up
    const [employeeid, setEmployeeid] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState(""); // New state for sign-up form
    const [confirmPassword, setConfirmPassword] = useState(""); // New state for sign-up form
    const toast = useToast();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const user = {
            employeeID: employeeid,
            password: password,
        };
        // dispatch(signin(user, toast, navigate));
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        // Add your sign-up logic here, e.g., dispatch a sign-up action
        // Example: dispatch(signup({ email, password, confirmPassword }, toast, navigate));
    };

    // Define keyframes for the text color animation
    //   const textAnimation = keyframes`
    //    0% { background-position: 0% 50%; }
    //     50% { background-position: 100% 50%; }
    //     100% { background-position: 0% 50%; }
    //   `;

    //   const variants = {
    //     hidden: {
    //       clipPath: "inset(0 100% 0 0)",
    //     },
    //     visible: {
    //       clipPath: "inset(0 0% 0 0)",
    //     },
    //   };

    const variants = {
        hidden: {
            opacity: 0,
            color: "#1a75ff", // Starting color (blue)
            x: -50, // Initial position
        },
        visible: {
            opacity: 1,
            color: "#ff6347", // Target color (tomato red)
            x: 0, // Final position
            transition: {
                color: {
                    type: "tween",
                    duration: 3, // Duration for color change
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 0.5,
                },
            },
        },
    };

    // Determine whether to stack boxes vertically or horizontally based on screen size
    const flexDirection = useBreakpointValue({ base: "column", md: "row" });

    return (
        <Box
            position="relative"
            width="100%"
            height="100vh"
            margin="auto"
            backgroundColor="#fff"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            border="2px solid #f3f3f3"
            backgroundPosition="50% 50%"
            px={4} // Responsive horizontal padding
        >
            <Flex
                direction={flexDirection} // Use responsive flex direction
                alignItems="center"
                justifyContent="center"
                ml={{ base: 0, md: 260 }} // Responsive margin
                mr={{ base: 0, md: 260 }} // Responsive margin
                mt={{ base: 4, md: 90 }} // Responsive top margin
                height={{ base: "auto", md: "410px" }} // Responsive height
                zIndex={1}
                position="relative"
            >
                <Box
                    width={{ base: "100%", md: "400px" }} // Responsive width
                    height={{ base: "200px", md: "430px" }} // Responsive height
                    border={"1px solid red"}
                    // backgroundImage={`url(${doctorsImg})`}
                    position={"relative"}
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    borderTopLeftRadius={12}
                    borderBottomLeftRadius={{ base: 0, md: 12 }} // Responsive corner radius
                    boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                    mb={{ base: 4, md: 0 }} // Responsive bottom margin
                >
                    <Box margin="auto" mt={{ base: "80px", md: "180px" }} height="50px">
                        <Heading
                            fontSize={{ base: 16, md: 18 }} // Responsive font size
                            color="#fff"
                            letterSpacing="0.5px"
                            fontFamily="Sans-serif"
                            mt={0}
                            mb="0.5rem"
                            fontWeight={700}
                            lineHeight={1.2}
                            textAlign="center"
                        >
                            UNLOCK YOUR BUSINESS POTENTIAL
                            <Heading
                                color="#fff"
                                fontSize={{ base: "0.9rem", md: "1rem" }} // Responsive font size
                                mt={0}
                                mb=".5rem"
                                fontWeight={500}
                                lineHeight={1.2}
                            >
                                Simplify, Streamline, Succeed!
                            </Heading>
                        </Heading>
                    </Box>
                </Box>
                <Box
                    width={{ base: "100%", md: "420px" }} // Responsive width
                    justifyContent="center"
                    alignItems="center"
                    height="430px"
                    borderTopRightRadius={{ base: 0, md: 12 }} // Responsive corner radius
                    borderBottomRightRadius={{ base: 0, md: 12 }} // Responsive corner radius
                    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                    backgroundColor="white"
                    zIndex={2}
                    position="relative"
                    p={{ base: 4, md: 6 }} // Responsive padding
                >
                    <Stack spacing={4}>
                        {showSignUp ? (
                            // Sign-Up Form
                            <>
                                <Text mb={4} fontWeight="bold">
                                    Sign Up
                                </Text>
                                <FormControl id="email" isRequired>
                                    <InputGroup>
                                        <Input
                                            type="email"
                                            height="50px"
                                            placeholder="Enter Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            focusBorderColor="blue.500"
                                            borderColor="blue.500"
                                            borderWidth="2px"
                                            borderRadius="40px"
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="password" isRequired>
                                    <InputGroup size="md">
                                        <Input
                                            pr="4.5rem"
                                            height="50px"
                                            borderRadius="40px"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            focusBorderColor="blue.500"
                                            borderColor="blue.500"
                                            borderWidth="2px"
                                        />
                                        <InputRightElement width="4.5rem">
                                            <IconButton
                                                h="1.75rem"
                                                size="sm"
                                                mt={3}
                                                onClick={handleTogglePassword}
                                                icon={
                                                    showPassword ? (
                                                        <Icon as={ViewOffIcon} />
                                                    ) : (
                                                        <Icon as={ViewIcon} />
                                                    )
                                                }
                                            />
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="confirmPassword" isRequired>
                                    <InputGroup size="md">
                                        <Input
                                            pr="4.5rem"
                                            height="50px"
                                            borderRadius="40px"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Confirm password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            focusBorderColor="blue.500"
                                            borderColor="blue.500"
                                            borderWidth="2px"
                                        />
                                    </InputGroup>
                                </FormControl>
                                <Button
                                    backgroundColor=" #1a75ff"
                                    _hover={{ backgroundColor: "#00366D" }}
                                    color="#fff"
                                    mt={6}
                                    width="full"
                                    borderRadius="40px"
                                    onClick={handleSignUp}
                                >
                                    Sign Up
                                </Button>
                                <Flex mt={4} justifyContent="center">
                                    <Text>
                                        Already have an account?{" "}
                                        <Link color="blue.500" onClick={() => setShowSignUp(false)}>
                                            Log In
                                        </Link>
                                    </Text>
                                </Flex>
                            </>
                        ) : (
                            // Login Form
                            <>
                                {/* <Text
                  mb={4}
                  fontWeight="bold"
                  bgGradient="linear(to-r, #1a75ff, #00366D, #00C9FF)"
                  bgClip="text"
                  animation={`${textAnimation} 10s linear infinite`}
                  backgroundSize="200% 200%"
                  backgroundPosition="0% 50%"
                >
                  Alphorism26
                </Text> */}

                                {/* <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={{
                    duration: 2.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 0.5,
                  }}
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                >
                  <Text>Alphorism26</Text>
                </motion.div> */}

                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={variants}
                                    transition={{
                                        duration: 5, // Increased duration to slow down the animation
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        repeatDelay: 0.5,
                                    }}
                                    style={{
                                        overflow: "hidden",
                                        display: "inline-block",
                                    }}
                                >
                                    <Text fontSize="2xl" fontWeight="bold">
                                        Alphorism26
                                    </Text>
                                </motion.div>

                                <FormControl id="employeeid" isRequired>
                                    <InputGroup>
                                        <Input
                                            type="text"
                                            height="50px"
                                            placeholder="Enter Email"
                                            value={employeeid}
                                            onChange={(e) => setEmployeeid(e.target.value)}
                                            focusBorderColor="blue.500"
                                            borderColor="blue.500"
                                            borderWidth="2px"
                                            borderRadius="40px"
                                        />
                                        <InputRightElement width="4.5rem">
                                            <Icon as={FaUser} color="gray.500" mt={2} />
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="password" isRequired>
                                    <InputGroup size="md">
                                        <Input
                                            pr="4.5rem"
                                            height="50px"
                                            borderRadius="40px"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            focusBorderColor="blue.500"
                                            borderColor="blue.500"
                                            borderWidth="2px"
                                        />
                                        <InputRightElement width="4.5rem">
                                            <IconButton
                                                h="1.75rem"
                                                size="sm"
                                                mt={3}
                                                onClick={handleTogglePassword}
                                                icon={
                                                    showPassword ? (
                                                        <Icon as={ViewOffIcon} />
                                                    ) : (
                                                        <Icon as={ViewIcon} />
                                                    )
                                                }
                                            />
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <Button
                                    backgroundColor=" #1a75ff"
                                    color="#fff"
                                    mt={6}
                                    width="full"
                                    borderRadius="40px"
                                    onClick={handleLogin}
                                    _hover={{ backgroundColor: "#00366D" }}
                                >
                                    Login
                                </Button>
                                <Button
                                    leftIcon={<FaGoogle />}
                                    colorScheme="blue"
                                    variant="outline"
                                    width="full"
                                    borderRadius="40px"
                                    mt={4}
                                >
                                    Login with Google
                                </Button>
                                <Flex mt={4} justifyContent="space-between">
                                    <Text>
                                        <Link color="blue.500" onClick={onOpen}>
                                            Forgot password
                                        </Link>
                                    </Text>
                                    <Text>
                                        <Link color="blue.500" onClick={() => setShowSignUp(true)}>
                                            Don't have an account?
                                        </Link>
                                    </Text>
                                </Flex>
                            </>
                        )}
                    </Stack>
                </Box>
            </Flex>
        </Box>
    );
};

export default Login;
