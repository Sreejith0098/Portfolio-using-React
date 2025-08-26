import React, { useEffect, useState } from 'react'
import { Box, Heading, Text, VStack, Input, Textarea, Button, HStack, IconButton, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    const[data,setData] = useState({
        name:"",
        email:'',
        message:""
    })
    const onSubmit=()=>{
        console.log(data)
    }
    useEffect(() => {
            Aos.init({
              duration: 2000, 
              once: false     
            });
          }, []);
  return (
    <div id='contact'  >
    <Box style={{backgroundColor:'transparent'}}  py={16} px={6} bg="gray.900" color="white">
      <VStack spacing={8} maxW="600px" mx="auto" textAlign="center">
        <Heading size="2xl" data-aos="fade-right" style={{color:'aqua'}} > Contact Me</Heading>

        {/* Contact Form */}
        <VStack spacing={4} w="100%" data-aos="fade-right"    >
          <Input onChange={(e)=>setData({...data,name:e.target.value})} className='bg-dark text-light' placeholder="Your Name" bg="white" color="black" />
          <Input onChange={(e)=>setData({...data,email:e.target.value})}  className='bg-dark text-light' placeholder="Your Email" bg="white" color="black" />
          <Textarea onChange={(e)=>setData({...data,message:e.target.value})} className='bg-dark text-light' placeholder="Your Message" bg="white" color="black" rows={5} />
          <Button onClick={onSubmit} className='btn' style={{ backgroundColor: "aqua"}} colorScheme="teal" size="lg" w="100%">Send Message</Button>
        </VStack>

        
      </VStack>
    </Box>
    </div>
  )
}

export default Contact