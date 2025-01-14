import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Home(props) {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });
  const [memeList, setMemeList] = useState([]);

  function updateText(e) {
    const { name, value } = e.target;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  useEffect(() => {
    console.log("fetched");
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMemeList(data.data.memes.filter((meme) => meme.box_count < 3));
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const getNewMemeImage = () => {
    const newMemeImageUrl =
      memeList[Math.floor(Math.random() * memeList.length)].url;
    setMeme((prev) => ({
      ...prev,
      imageUrl: newMemeImageUrl,
    }));
  };

  console.log("Rendered");
  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            onChange={updateText}
            type="text"
            placeholder="One does not simply"
            name="topText"
            value={meme.topText}
          />
        </label>

        <label>
          Bottom Text
          <input
            onChange={updateText}
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            value={meme.bottomText}
          />
        </label>
        <button onClick={getNewMemeImage}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">
          {meme.topText ? meme.topText : "One does not simply"}
        </span>
        <span className="bottom">
          {meme.bottomText ? meme.bottomText : "Walk into Mordor"}
        </span>
      </div>
    </main>
  );
}

Home.propTypes = {};

export default Home;
