import { useState, useEffect } from 'react';

const ImageDisplay = () => {
  // Array of image URLs
  const images = [
    'https://d1lr4y73neawid.cloudfront.net/sale_pages/backgrounds/000/206/266/original/pexels-pixabay-39015-wheatfield2.jpg?1639211242',
    'https://www.agromarketing.mx/wp-content/uploads/2017/05/campo.jpg',
    'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1679815/pexels-photo-1679815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1679923/pexels-photo-1679923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  // State to keep track of the currently displayed image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle changing the displayed image
  const changeImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect to automatically change the image every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(changeImage, 2000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className='img'>
        <center>
      <img  style={{width:'1700px', height:'500px' , marginBottom: '0px'}} src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </center>
    </div>
  );
};

export default ImageDisplay;
