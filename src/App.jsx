import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Hero } from "./components";
import { CallToDownload } from "./components";

function App() {
  return (
    <Router>
      <div className="container max-w-screen-xl px-6 py-6 ">
        <Navbar />
        <Hero />
        <CallToDownload />
      </div>
    </Router>
  );
}

export default App;
