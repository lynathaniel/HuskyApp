import React, { useEffect } from "react";

function VideoCapture(props) {
  useEffect(() => {
    async function startVideoCapture() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const videoElement = document.getElementById("videoElement");
        const shutter1 = document.getElementById("shutter1");
        const shutter2 = document.getElementById("shutter2");
        videoElement.srcObject = stream;
      } catch (error) {
        console.error("Error accessing camera: " + error);
      }
    }

    startVideoCapture();
  }, []);

  return (
    <div className="video-container">
        {props.isVisible &&
        <div className="picture-button1" id="shutter2"></div>}
        {props.isVisible && <div className="picture-button2" id="shutter1" onClick={(e) => {videoElement.pause(); shutter1.style.display = "none"; shutter2.style.display = "none";}}></div>
        }
      <video id="videoElement" width="1080" autoPlay></video>
    </div>
  );
}

export default VideoCapture;
