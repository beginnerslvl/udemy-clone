import React from "react";
import styled from "styled-components";
import { other_images } from "../utils/images";
import config from '../utils/config';
const heroItems = config.heroItems.map(item => item.label);

const shorttitle1 = heroItems[0]
const saletitle = heroItems[1]
const slogon = heroItems[2]


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PexelsImageFetcher = () => {
  const [imageUrl, setImageUrl] = useState('');
  const apiKey = 'sHlEMO77bq1Ir6j0GC1tpmwbBPbTt9TXbJzdfLYzPkdeQLWjvTRWT5hM';
  const searchQuery = 'islamic study';

  useEffect(() => {
    axios
      .get(`https://api.pexels.com/v1/search?query=${searchQuery}`, {
        headers: {
          Authorization: apiKey,
        },
      })
      .then((response) => {
        const firstPhoto = response.data.photos[0];
        if (firstPhoto) {
          setImageUrl(firstPhoto.src.original);
        } else {
          console.log('No images found for the query.');
        }
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }, []);

  return (
    <div>
      {imageUrl ? (
        <div>
          <p>Image URL:</p>
          <img src={imageUrl} alt="Image" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

// export default PexelsImageFetcher;


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
