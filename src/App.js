import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./Components/NavBar.js";
import ShowCase from "./Components/ShowCase.js";
import NewsLetter from "./Components/NewsLetter.js";
import Boxes from "./Components/Boxes.js";
import LearnSection from "./Components/LearnSection.js";
import SecondLearn from "./Components/SecondLearn.js";

function App() {
  return (
    <>
      <NavBar />
      <ShowCase />
      <NewsLetter />
      <Boxes />
      <LearnSection />
      <SecondLearn />
    </>
  );
}

export default App;
