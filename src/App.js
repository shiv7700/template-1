import "./App.css";
import CollegeNear from "./components/CollegeNear";
import DipolmaCollege from "./components/DipolmaCollege";
import EngExam from "./components/EngExam";
import Explore from "./components/Explore";
import Header from "./components/Header";
import NewSkill from "./components/NewSkill";
import TopCollection from "./components/TopCollection";
import TopUniversity from "./components/TopUniversity";
import Latest from "./components/Latest";
import Footer from "./components/Footer";
import Download from "./components/Download";

function App() {
  return (
    <>
      <Header />
      <NewSkill />
      <CollegeNear />
      <TopCollection />
      <TopUniversity />
      <DipolmaCollege />
      <Explore />
      <EngExam />
      <Latest />
      <Download />
      <Footer />
    </>
  );
}

export default App;
