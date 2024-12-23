import JokeComponent from "../../components/joke-component/JokeComponent.jsx";
import data from "../../data/data.js";

function Home() {
  return (
    <>
      <h1>Jokes</h1>
      <div className="jokeList">
        {data.map((joke, index) => (
          <JokeComponent
            key={index}
            setup={joke.setup}
            punchline={joke.punchline}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
