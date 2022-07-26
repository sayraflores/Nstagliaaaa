import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
// import { Productcards } from "../components/Productcards";

const images = [
    { url: "images/slide1.png" },
    { url: "images/slide2.png" },
    { url: "images/slide3.png" },
    { url: "images/slide4.png" },
    { url: "images/slide5.png" },
   
  ];
 const Home = () => {
    return (
        <div>
       
          <SimpleImageSlider
          className ="SlideContainer"
            width={896}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
          />
            {/* <Productcards/> */}
        </div>
        
      );
    }
export default Home;