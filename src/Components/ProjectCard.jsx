import React, { useEffect } from "react";
import { Button, Card, Image, Text } from "@chakra-ui/react";
import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import media from "../assets/mediaPlayer.png";
import RecipeApp from "../assets/RecipeApp.png";
import Ecart from "../assets/E-cart.png";
import nexgen from "../assets/nexgen.png";
import zomato from "../assets/zomato.png";
import trends from "../assets/trends.png";
const ProjectCard = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
    });
  }, []);
  return (
    <div className="container projects  " id="projects">
      <h1
        style={{ color: "aqua" }}
        className="text-center mt-3 mb-5"
        data-aos="fade-right"
      >
        My Latest Projects
      </h1>
      <div className="row mb-4  " data-aos="fade-right">
        {/* first col */}
        <div className="col">
          <a href="https://github.com/Sreejith0098/Media-Player-.git">
            <Card.Root maxW="sm" overflow="hidden">
              <Image src={media} alt="Green double couch with wooden legs" />
              <Card.Body gap="2" className="text-center">
                <Card.Title>Media Player </Card.Title>
                <Card.Description>
                  Media player using
                  React,html,css,jsvascript,Bootswatch,ReactBootstrap
                </Card.Description>
              </Card.Body>
              <Card.Footer gap="2"></Card.Footer>
            </Card.Root>
          </a>
        </div>

        {/* second col */}
        <div className="col">
          <a href="https://github.com/Sreejith0098/RecipeApp-using-React.git">
            <Card.Root maxW="sm" overflow="hidden">
              <Image
                src={RecipeApp}
                alt="Green double couch with wooden legs"
              />
              <Card.Body gap="2" className="text-center">
                <Card.Title>Recipe App</Card.Title>
                <Card.Description>
                  Recipe app using html,css,JavaScript,React,Bootstrap,Api fetch
                  using async await
                </Card.Description>
              </Card.Body>
              <Card.Footer gap="2"></Card.Footer>
            </Card.Root>
          </a>
        </div>
        {/* third col */}
        <div className="col">
          <a href="https://github.com/Sreejith0098/ReduxCart.git">
            <Card.Root maxW="sm" overflow="hidden">
              <Image src={Ecart} alt="Green double couch with wooden legs" />
              <Card.Body gap="2" className="text-center">
                <Card.Title>E-cart</Card.Title>
                <Card.Description>
                  E-cart using
                  html,css,JavaScript,React,Redux,Bootstrap,Bootswatch
                </Card.Description>
              </Card.Body>
              <Card.Footer gap="2"></Card.Footer>
            </Card.Root>
          </a>
        </div>
      </div>
      {/* 2nd row */}
      <div className="row" data-aos="fade-right">
        {/* first col */}
        <div className="col">
          <a href="https://github.com/bibinb603/NEXGEN.git">
            <Card.Root maxW="sm" overflow="hidden">
              <Image src={nexgen} alt="Green double couch with wooden legs" />
              <Card.Body gap="2" className="text-center">
                <Card.Title>Gamming Magazine Website</Card.Title>
                <Card.Description>
                created using html,css,bootstrap,Gsap
                  
                </Card.Description>
              </Card.Body>
              <Card.Footer gap="2"></Card.Footer>
            </Card.Root>
          </a>
        </div>
        {/* second col */}
        <div className="col">
          <a href="https://github.com/Sreejith0098/zomato-clone.git">
            <Card.Root maxW="sm" overflow="hidden">
              <Image src={zomato} alt="Green double couch with wooden legs" />
              <Card.Body gap="2" className="text-center">
                <Card.Title>Zomato Clone</Card.Title>
                <Card.Description>
                  Zomato clone using html,css,bootstrap
                </Card.Description>
              </Card.Body>
              <Card.Footer gap="2"></Card.Footer>
            </Card.Root>
          </a>
        </div>
        {/* third col */}
        <div className="col">
          <a href="https://github.com/Sreejith0098/trends2.git">
            <Card.Root maxW="sm" overflow="hidden">
              <Image src={trends} alt="Green double couch with wooden legs" />
              <Card.Body gap="2" className="text-center">
                <Card.Title>Trends Clone</Card.Title>
                <Card.Description>
                  Trends clone using html,css,bootstrap
                </Card.Description>
              </Card.Body>
              <Card.Footer gap="2"></Card.Footer>
            </Card.Root>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
