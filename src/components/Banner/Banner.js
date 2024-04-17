import React, { useState, useEffect } from 'react';
import BannerList from '../../Constants/BannnerList';

const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = BannerList.images;
    const handleImageClick = (id) => {
    window.open(`/product-detail/${id}`, '_blank');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <img
        src={images[currentImageIndex].url}
        alt={`Image ${currentImageIndex + 1}`}
        style={{ width: '98%', height: '94vh', cursor: 'pointer' }}
        onClick={() => handleImageClick(currentImageIndex)}
      />
    </div>
  );
};

export default Banner;
