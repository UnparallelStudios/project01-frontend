import "./App.scss";
import "remixicon/fonts/remixicon.css";
import Navbar from "./components/Navbar";
import profImage from "./assets/pfpimage.png";
import normalVideo from "./assets/normal.mp4";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRef } from "react";
let mediaDevices = navigator.mediaDevices;

function App() {
  const videoRef = useRef();
  const feedRef = useRef();
  const userName = localStorage.getItem("user");
  const [feedActive, setFeedActive] = useState(true);
  const [stream, setStream] = useState(new MediaStream());
  const navigate = useNavigate();

  useEffect(() => {
    if (userName == null) {
      navigate("/");
    }
    mediaDevices.getUserMedia({ video: true }).then((s) => {
      setStream(s);
      feedRef.current.srcObject = s;
    });
  }, []);

  return (
    <>
      <div className="main-container">
        <Navbar />
        <div className="content-container">
          <div className="profile-feed-container">
            {/* live feed container */}
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "16px",
              }}
              className="feed-container"
            >
              <div
                style={{
                  position: "absolute",
                  padding: "12px",
                  zIndex: "30",
                  left: "0",
                  right: "0",
                  bottom: "0",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    background: "#514E4E",
                    cursor: "pointer",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "100px",
                  }}
                >
                  <i class="ri-mic-line"></i>
                </div>
                <div
                  style={{
                    background: "#514E4E",
                    color: "white",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "100px",
                  }}
                  onClick={() => {
                    console.log("clicked");
                    if (feedActive) {
                      const videoTrack = stream.getVideoTracks()[0];
                      videoTrack.stop();
                      stream.removeTrack(videoTrack);
                      setFeedActive(false);
                    } else {
                      mediaDevices.getUserMedia({ video: true }).then((s) => {
                        const videoTrack = s.getVideoTracks()[0];
                        stream.addTrack(videoTrack);
                        feedRef.current.srcObject = stream;
                        setFeedActive(true);
                      });
                    }
                  }}
                >
                  {feedActive ? (
                    <i class="ri-video-off-line"></i>
                  ) : (
                    <i class="ri-video-on-line"></i>
                  )}
                </div>
              </div>
              <video
                src={stream}
                onLoadedMetadata={(e) => {
                  e.target.play();
                }}
                ref={feedRef}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              ></video>
            </div>
            <div className="spacer-container"></div>
            <div className="profile-container">
              <div className="profImage--container">
                <img className="profImage" src={profImage}></img>
              </div>
              <div className="user-info--container">
                <div
                  className="user--username"
                  style={{ fontSize: "28px", fontWeight: "800" }}
                >
                  {userName}
                </div>
                <div
                  className="user-info--divider"
                  style={{ height: "4px" }}
                ></div>
                <div
                  className="user--class"
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "GrayText",
                  }}
                >
                  Class XX
                </div>
              </div>
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
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
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
