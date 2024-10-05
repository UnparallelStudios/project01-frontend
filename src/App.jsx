import "./App.scss";
import Navbar from "./components/Navbar";
import profImage from "./assets/pfpimage.png";

function App() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <div className="content-container">
          <div className="profile-feed-container">
            {/* live feed container */}
            <div className="feed-container"></div>
            <div className="spacer-container"></div>
            <div className="profile-container">
              <img className="profImage" src={profImage}></img>
            </div>
          </div>
          <div className="spacer-container2"></div>
          {/* video translation container */}
          <div className="trans-video-container"></div>
        </div>
      </div>
    </>
  );
}

export default App;
