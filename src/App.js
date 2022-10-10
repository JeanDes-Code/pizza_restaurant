import { Header, Hero, AboutUs, FindUs, OurMenu, Footer } from './sections';

const App = () => {
  return (
    //NAVIGATION :
    //page Home
    <div className="bg-black">
      <Header />
      <Hero />
      <AboutUs />
      <FindUs />
      <OurMenu />
      <Footer />
    </div>
    //page Menu
  );
};

export default App;
