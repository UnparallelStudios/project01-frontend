import "./App.scss";
import Navbar from "./components/Navbar";
import profImage from "./assets/pfpimage.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const userName = localStorage.getItem("user");
  const navigate = useNavigate();

  useEffect(() => {
    if (userName == null) {
      navigate("/");
    }
  }, []);

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
          <div className="trans-video-container"></div>
        </div>
      </div>
    </>
  );
}

export default App;
