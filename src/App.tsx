import LearningPage from "./components/LearningPage";
import "./App.css";
import NavBar from "./shared/layout/NavBar";
import Footer from "./shared/layout/Footer";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="h-[90vh]"></div>
      <Footer></Footer>
    </>
  );
}

export default App;
