import React, { useEffect } from "react";
import { Button, Card, Image, Text } from "@chakra-ui/react";
import '../App.css'
import Aos from "aos";
import "aos/dist/aos.css";
import media from '../assets/mediaPlayer.png'
import RecipeApp from '../assets/RecipeApp.png'
import Ecart from '../assets/E-cart.png'

const ProjectCard = () => {
    useEffect(() => {
        Aos.init({
          duration: 2000, // animation speed
          once: false     // 👈 repeat animation on every scroll
        });
      }, []);
  return (
    <div className="container projects  "   >
        <h1 style={{color:'aqua'}} className="text-center mt-3 mb-5" data-aos="fade-right" >My Latest Projects</h1>
      <div className="row mb-4  " data-aos="fade-right" >
        {/* first col */}
        <div className="col"  >
        <a href="">
          <Card.Root   maxW="sm" overflow="hidden">
            <Image
              src={media}
              alt="Green double couch with wooden legs"
            />
            <Card.Body gap="2" className="text-center"  >
              <Card.Title>Media Player </Card.Title>
              <Card.Description  >
                Media player using React,html,css,jsvascript,Bootswatch,ReactBootstrap
              </Card.Description>
            </Card.Body>
            <Card.Footer gap="2">
            </Card.Footer>
          </Card.Root>
          </a>
        </div>
    
        {/* second col */}
        <div className="col">

        <a href="">
          <Card.Root maxW="sm" overflow="hidden">
            <Image
              src={RecipeApp}
              alt="Green double couch with wooden legs"
            />
            <Card.Body gap="2" className="text-center">
              <Card.Title>Recipe App</Card.Title>
              <Card.Description>
                Recipe app using html,css,JavaScript,React,Bootstrap,Api fetch using async await

              </Card.Description>
            </Card.Body>
            <Card.Footer gap="2">
            </Card.Footer>
          </Card.Root>
          </a>
        </div>
        {/* third col */}
        <div className="col">
        <a href="">
          <Card.Root maxW="sm" overflow="hidden">
            <Image
              src={Ecart}
              alt="Green double couch with wooden legs"
            />
            <Card.Body gap="2" className="text-center">
              <Card.Title>E-cart</Card.Title>
              <Card.Description>
                E-cart using html,css,JavaScript,React,Redux,Bootstrap,Bootswatch
              </Card.Description>
            </Card.Body>
            <Card.Footer gap="2">
            </Card.Footer>
          </Card.Root>
          </a>
        </div>
      </div>
      {/* 2nd row */}
      <div className="row" data-aos="fade-left"  >
        {/* first col */}
        <div className="col">
        <a href="">
          <Card.Root maxW="sm" overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
            />
            <Card.Body gap="2" className="text-center">
              <Card.Title>Living room Sofa</Card.Title>
              <Card.Description>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces.
              </Card.Description>
            </Card.Body>
            <Card.Footer gap="2">
            </Card.Footer>
          </Card.Root>
          </a>
        </div>
        {/* second col */}
        <div className="col">
        <a href="">
          <Card.Root maxW="sm" overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
            />
            <Card.Body gap="2" className="text-center">
              <Card.Title>Living room Sofa</Card.Title>
              <Card.Description>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces.
              </Card.Description>
            </Card.Body>
            <Card.Footer gap="2">
            </Card.Footer>
          </Card.Root>
          </a>
        </div>
        {/* third col */}
        <div className="col">
        <a href="">
          <Card.Root maxW="sm" overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
            />
            <Card.Body gap="2" className="text-center">
              <Card.Title>Living room Sofa</Card.Title>
              <Card.Description>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces.
              </Card.Description>
            </Card.Body>
            <Card.Footer gap="2">
            </Card.Footer>
          </Card.Root>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
