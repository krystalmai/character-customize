import Header from "./components/Header";
import "./App.css";
import React, { useState, useEffect } from "react";
import Avatar from "./components/Avatar";
import PartList from "./components/PartList";

function App() {
  const total = {
    body: 17,
    eyes: 17,
    hair: 73,
    mouth: 24,
    hat: 28,
    eyebrows: 15,
    glasses: 17,
    clothing1: 5,
    clothing2: 5,
    clothing3: 9,
  };
  const generateRandom = (range) => Math.floor(Math.random() * range) + 1;

  const [body, setBody] = useState(generateRandom(total.body));
  const [eyes, setEyes] = useState(generateRandom(total.eyes));
  const [hair, setHair] = useState(generateRandom(total.hair));
  const [mouth, setMouth] = useState(generateRandom(total.mouth));
  const [hat, setHat] = useState(generateRandom(total.hat));
  const [eyebrows, setEyebrows] = useState(generateRandom(total.eyebrows));
  const [glasses, setGlasses] = useState(generateRandom(total.glasses));
  const [clothing1, setClothing1] = useState(generateRandom(total.clothing1));
  const [clothing2, setClothing2] = useState(generateRandom(total.clothing2));

  const randomize = (part) => {
    setBody(generateRandom(total.body));
    setEyes(generateRandom(total.eyes));
    setHair(generateRandom(total.hair));
    setMouth(generateRandom(total.mouth));
    setHat(generateRandom(total.mouth));
    setEyebrows(generateRandom(total.eyebrows));
    setGlasses(generateRandom(total.glasses));
    setClothing1(generateRandom(total.clothing1));
    setClothing2(generateRandom(total.clothing2));
  };
  // Part.handleclick = setBody if type==='Body' || set....
  // useEffect( setAvt())
  const handleClick = (path, index) => {
    // eslint-disable-next-line default-case
    switch (path) {
      case "body":
        setBody(index);
        console.log(body);
        break
      case "eyes":
        setEyes(index);
        break
        case "hair":
          setHair(index);
        break
        case "mouths":
          setMouth(index);
        break
        case "eyebrows":
          setEyebrows(index);
        break
        case "accessories/hats":
          setHat(index);
        break
        case "accessories/glasses":
          setGlasses(index);
        break
        case "clothes/layer_1":
          setClothing1(index);
        break
        case "clothes/layer_2":
          setClothing2(index);
          break
    }
     
  };

  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  
  return (
    <div className="App">
      <Header />
      <main>
        <Avatar
          total={total}
          body={body}
          eyes={eyes}
          hair={hair}
          mouth={mouth}
          hat={hat}
          eyebrows={eyebrows}
          glasses={glasses}
          clothing1={clothing1}
          clothing2={clothing2}
          randomize={randomize}
        />

        <div className="lists">
          <PartList selected={body} title="Body" path="body" total={total.body} handleClick={ handleClick} />
          <PartList selected={hair} title="Hair" path="hair" total={total.hair} handleClick={ handleClick} />
          <PartList selected={mouth} title="Mouth" path="mouths" total={total.mouth} handleClick={ handleClick} />
          <PartList selected={eyes} title="Eyes" path="eyes" total={total.eyes} handleClick={ handleClick} />
          <PartList
            selected={hat}
            title="Hat"
            path="accessories/hats"
            total={total.hat}
            handleClick={ handleClick}
          />
          <PartList
            selected={eyebrows}
            title="Eyebrows"
            path="eyebrows"
            total={total.eyebrows}
            handleClick={ handleClick}
          />
          <PartList
          selected={glasses}
            title="Glasses"
            path="accessories/glasses"
            total={total.glasses}
            handleClick={ handleClick}
          />
          <PartList
            selected={clothing1}
            title="Clothing 1"
            path="clothes/layer_1"
            total={total.clothing1}
            handleClick={ handleClick}
          />
          <PartList
            selected={clothing2}
            title="Clothing 2"
            path="clothes/layer_2"
            total={total.clothing2}
            handleClick={ handleClick}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
