import NavSide from "./components/NavSide";
import {
  clientAudiophile,
  clientDataBiz,
  clientMaker,
  clientMeet,
  heroDesktop,
  heroMobile,
} from "./holdImages";
function App() {
  return (
    <>
      <NavSide />
      <div className="container">
        <div className="row d-flex">
          <div className="col-12 col-sm-6  c1">
            <div className="left">
              <h1>
                Make <br className="br" /> remote work
              </h1>
              <p>
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
              </p>
              <a href="#">Learn More</a>
              <div className="logos">
                <img src={clientDataBiz} alt="" />
                <img src={clientAudiophile} alt="" />
                <img src={clientMeet} alt="" />
                <img src={clientMaker} alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 xx  c2">
            <div className="right">
              <img src={heroDesktop} className="hero-img" />
              <img src={heroMobile} className="mobile-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
