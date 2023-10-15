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
  let found = false;

  const [Listing, setListing] = useState([]);

  const num = Math.floor(Math.random() * 4) + 1
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
  

  console.log(lat)


  function success(pos) {
    const crd = pos.coords;
    if (crd.longitude < lng + 10.0 &&
        crd.longitude > lng - 10.0 &&
        crd.latitude < lat + 10.0 &&
        crd.latitude > lat - 10.0) {
          alert("You found " + buildingName + "!")
          found = true
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
    timeout: 5000,
    maximumAge: 0,
  };
  
  function getLoc() { id = navigator.geolocation.getCurrentPosition(
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
      <button className='bg-red-600 ml-24 mt-96 h-12 w-56' onClick={() => getLoc()}>Am I near?</button>
      <div className="video">
      <VideoCapture isVisible={true}/>
      </div>
    </div>
  );

}

export default GeoLocator;
