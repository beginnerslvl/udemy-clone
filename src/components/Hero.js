import React from "react";
import styled from "styled-components";
import { other_images } from "../utils/images";
import config from '../utils/config';
const heroItems = config.heroItems.map(item => item.label);

const shorttitle1 = heroItems[0]
const saletitle = heroItems[1]
const slogon = heroItems[2]


const Hero = () => {
  return (
    <HeroWrapper className="bg-black">
      <div className="container h-100 flex">
        <div className="hero-content">
          <h1>{shorttitle1}</h1>
          <p>{saletitle}</p>
          <p>
            {slogon}
          </p>
        </div>
      </div>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  background: url(${other_images.hero_img}) center/cover no-repeat;
  height: 300px;

  .container {
    .hero-content {
      background-color: var(--clr-white);
      max-width: 400px;
      width: 100%;
      margin-left: 0;
      padding: 20px;

      h1 {
        font-size: 32px;
        margin-bottom: 5px;
        white-space: nowrap;
      }
      p {
        font-size: 15px;
      }
    }
  }
`;

export default Hero;
