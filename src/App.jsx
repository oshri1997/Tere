import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Hero, Works, CallToDownload } from "./components";

function App() {
  return (
    <Router>
      <div className="container max-w-screen-xl  px-6 py-6  dark:text-white ">
        <Navbar />
        <Hero />
        <CallToDownload />
        <Works />
      </div>
    </Router>
  );
}

export default App;
