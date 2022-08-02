import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Card from "../components/Card";

// import { Productcards } from "../components/Productcards";

const images = [
    { url: "images/another1.JPG" },
    { url: "images/listoftees.jpg" },
    { url: "images/anotherone3.JPG" },
    { url: "images/slide4.png" },
    { url: "images/tigger.png" },
   
  ];
 const Home = () => {
    return (
      <>
        <div className ="SlideContainer">
       
          <SimpleImageSlider
          autoPlay= {true}
            width={'70%'}
            height={'88%'}
            images={images}
            showBullets={true}
            showNavs={true}
            style={{margin: "0px 0px 210px 210px"}}
        
          />

        </div>
        <img src={`images/whitelogo.png`} alt = ""/>
        <Card/>

        </>
      );
    }
export default Home;