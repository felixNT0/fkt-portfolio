import About from "../components/About/About";
import Contact from "../components/Contacts/Contact";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import NavBar from "../components/NavBar/NavBar";
import Portfolio from "../components/Portfolio/Portfolio";
import Skills from "../components/Skills/Skills";
import AllSocialLinks from "../components/SocialLinksAndResume/AllSocialLinks";
import WelcomeModal from "../components/WelcomeModal/WelcomeModal";

function MainPage() {
  return (
    <div className="dark:bg-[#1f1f38] bg-[#ffffff]">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
      <AllSocialLinks />
      <WelcomeModal />
    </div>
  );
}

export default MainPage;
