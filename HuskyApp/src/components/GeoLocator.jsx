
import React, { useState, useEffect } from "react";
import VideoCapture from "./VideoCapture";

export function GeoLocator() {

  let id;
  let target;
  let options;
  let abrev;
  let buildingName;
  let lng;
  let lat;

  const [Listing, setListing] = useState([]);
  const [found, setFound] = useState(false);

  const update = () => {
    setFound(true);
  }

  const num = Math.floor(Math.random() * 7) + 1
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/todos/" + num + "/");
      const json = await response.json();
      setListing(json);
    };

    fetchData();
  }, []);
  
  abrev = Listing.abrev
  buildingName = Listing.fullname
  lng = parseFloat(Listing.longitude)
  lat = parseFloat(Listing.latitude)

  console.log(abrev)

  function success(pos) {
    const crd = pos.coords;
    console.log(crd.latitude + ", " + crd.longitude)
    console.log("expected: " + lat + ", " + lng)
    if (crd.longitude < lng + 0.0001 &&
        crd.longitude > lng - 0.0001 &&
        crd.latitude < lat + 0.0001 &&
        crd.latitude > lat - 0.0001) {
          update()
          alert("You found " + buildingName + "!")
          
        } else {
          alert("Keep looking around campus for the building of the day!")
        }
    navigator.geolocation.clearWatch(id)
  }
  
  function error(err) {
    console.error(`ERROR(${err.code}): ${err.message}`);
  }
  
  target = {
    latitude: 0,
    longitude: 0,
  };
  
  options = {
    enableHighAccuracy: false,
    timeout: 50000,
    maximumAge: 0,
  };
  
  function getLoc() { 
    console.log("smd")
    id = navigator.geolocation.watchPosition(
    success,
    error,
    // maximumAge refers to the age of the location data in cache,
    // setting it to infinity guarantees you'll get a cached version.
    // Setting it to 0 forces the device to retrieve the position.
    // http://stackoverflow.com/questions/3397585/navigator-geolocation-getcurrentposition-sometimes-works-sometimes-doesnt
    { maximumAge: 15000,
      timeout: 30000,
      enableHighAccuracy: false
    }
  );
  }


  return (
    <div>
      <button className='MeNear' onClick={() => getLoc()}>Am I near?</button>
      <div className="video">
        <VideoCapture isVisible={found} /> {/* Use found, not this.found */}
      </div>
    </div>
  );

}

export default GeoLocator;

