import  { useState } from 'react';
import styles from './Carousel.module.css'; 
import { imageUrls } from './imagenes';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = Object.keys(imageUrls);

  console.log("Lista de imágenes:", images); // Comprobación en consola

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.arrow} onClick={prevImage}>&#9664;</button>
      <img
        className={styles.image}
        src={imageUrls[images[currentImageIndex]]}
        alt={`Imagen ${currentImageIndex + 1}`}
      />
      <button className={styles.arrow} onClick={nextImage}>&#9654;</button>
    </div>
  );
};

export default Carousel;
