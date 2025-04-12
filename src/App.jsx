import React from "react";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Education from "./pages/Education/Education";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Footer from "./components/Footer/Footer";
import GlobalStyle from "./assets/styles/global";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <main>
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
