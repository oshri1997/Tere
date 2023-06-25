import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Hero, Works, CallToDownload, Benefits, Footer } from "./components";

function App() {
  return (
    <Router>
      <div className="container max-w-screen-xl px-6 py-6 ">
        <Navbar />
        <Hero />
        <CallToDownload />
        <Works />
        <Benefits />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
