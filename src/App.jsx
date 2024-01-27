import {
  Choice,
  Educational,
  Employment,
  Footer,
  Header,
  Ready,
  StartLearning,
  Available,
  Salary,
  Courses,
  // WelcomeSlider,
  Welcome,
  // VideoReview, 
  Teachers,
  CourrseFor,
  // Informaton,
} from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      {/* <WelcomeSlider /> */}
      <Available />
      {/* <Informaton /> */}
      <Ready />
      <Courses/>
      <CourrseFor />
      <Teachers />
      {/* <VideoReview/> */}
      <Salary />
      <Employment />
      <StartLearning />
      <Educational />
      <Choice />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
