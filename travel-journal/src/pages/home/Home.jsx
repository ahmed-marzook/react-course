import "./Home.css";
import Entry from "../../components/entry/Entry";
import data from "../../api/data";

export default function Home() {
  return (
    <>
      {data.map((entry) => (
        <Entry
          key={entry.id}
          img={entry.img}
          title={entry.title}
          country={entry.country}
          googleMapsLink={entry.googleMapsLink}
          dates={entry.dates}
          text={entry.text}
        />
      ))}
    </>
  );
}
