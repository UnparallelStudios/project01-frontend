import "./App.scss";
import Navbar from "./components/Navbar";
import profImage from "./assets/pfpimage.png";
import normalVideo from "./assets/normal.mp4";
import { useRef } from "react";

function App() {
  const videoRef = useRef();
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
          <div className="trans-video-container">
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                padding: "8px 24px",
                background: "#2E2B2B",
                transform: "translateX(-50%)",
                color: "white",
                lineHeight: "0",
                borderRadius: "12px",
                zIndex: "10",
                cursor: "pointer",
              }}
              onClick={(_) => {
                if (videoRef.current.paused) {
                  videoRef.current.play();
                } else {
                  videoRef.current.pause();
                }
              }}
            >
              <p style={{ fontFamily: "sans-serif" }}>Start/Stop</p>
            </div>
            <div class="custom-select">
              <select>
                <option>English</option>
                <option>Arabic</option>
              </select>
            </div>
            <video
              ref={videoRef}
              style={{ objectFit: "cover", height: "100%" }}
              autoPlay={true}
              loop={true}
              muted
              playsInline={true}
              src={normalVideo}
            ></video>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
