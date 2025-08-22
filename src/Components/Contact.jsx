import React from 'react'
import { Box, Heading, Text, VStack, Input, Textarea, Button, HStack, IconButton, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div >
    <Box style={{backgroundColor:'transparent'}} id="contact" py={16} px={6} bg="gray.900" color="white">
      <VStack spacing={8} maxW="600px" mx="auto" textAlign="center">
        <Heading size="2xl">📬 Contact Me</Heading>
        <Text fontSize="lg" color="gray.300">
          Let’s collaborate! Feel free to reach out via the form or connect on social media.
        </Text>

        {/* Contact Form */}
        <VStack spacing={4} w="100%">
          <Input placeholder="Your Name" bg="white" color="black" />
          <Input placeholder="Your Email" bg="white" color="black" />
          <Textarea placeholder="Your Message" bg="white" color="black" rows={5} />
          <Button colorScheme="teal" size="lg" w="100%">Send Message</Button>
        </VStack>

        {/* Social Icons */}
        <HStack spacing={6} pt={4}>
          <Link href="mailto:your@email.com" isExternal>
            <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" colorScheme="red" />
          </Link>
          <Link href="https://github.com/your-username" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" colorScheme="gray" />
          </Link>
          <Link href="https://linkedin.com/in/your-profile" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" colorScheme="blue" />
          </Link>
        </HStack>
      </VStack>
    </Box>
    </div>
  )
}

export default Contact