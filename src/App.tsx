import { Provider } from "react-redux";
import store from "./redux/store/store";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import ScrollEffect from "./components/ScrollEffect";
import Team from "./components/Team";
import FeatureOverview from "./components/FeatureOverview";

import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <ScrollEffect />
        <Navbar />
        <Hero />
        <FeatureOverview />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Contact />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
