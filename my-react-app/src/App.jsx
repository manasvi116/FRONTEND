import { useState } from "react";

function App() {
  const imageStyle = {
    height: '150px',
    width: '150px',
    transition: 'transform 0.5s ease', // smooth rotation
  };

  const images = [
    "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
    "https://plus.unsplash.com/premium_photo-1686729237226-0f2edb1e8970?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLKcOgEmGQZH_rEReAGnFnCB82nPhld2G9TA&s",
    "https://thumbs.dreamstime.com/b/autumn-leaves-wet-stone-pathway-park-beautiful-fall-season-weather-night-concept-melancholy-rain-scene-wallpaper-395389772.jpg"
  ];

  const [index, setIndex] = useState(0);
  const [rotate, setRotate] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);
  const handleRotate = () => setRotate(rotate + 90); // rotate full circle

  return (
    <div id="image-slider">
      <h1>Image slider</h1>

      <img
        style={{ ...imageStyle, transform: `rotate(${rotate}deg)` }}
        src={images[index]}
        alt=""
      />

      <div className="slider-btn">
        <button onClick={prev}>Left</button>
        <button onClick={next}>Right</button>
        <button onClick={handleRotate}>Rotate</button>
      </div>
    </div>
  );
}

export default App;
