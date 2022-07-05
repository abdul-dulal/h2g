import NavBar from "./components/home/NavBar";
import About from "./components/pages/about/About";
import Blog from "./components/pages/blog/Blog";
import Company from "./components/pages/company/Company";
import Contact from "./components/pages/contact/Contact";
import Price from "./components/pages/price/Price";
import Projects from "./components/pages/projects/Projects";
import Team from "./components/pages/team/Team";

function App() {
  return (
    <div>
      <NavBar />
      <About />
      <Team />
      <Company />
      <Projects />
      <Price />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
