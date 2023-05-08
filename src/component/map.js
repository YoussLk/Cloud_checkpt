import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import './map.css';
export default function Map(){

  //information of  map localisation
    // Initialize refs for the map container and the map object
const mapContainer = useRef(null);
  const map = useRef(null);
    
  // Set initial state values for longitude, latitude, and zoom level
  const [lng] = useState(139.753);
  const [lat] = useState(35.6844);
  const [zoom] = useState(14);

  // Set the MapTiler API key as a state value
  const [API_KEY] = useState('mh8xUTd2sNGXd38GWYvl');

  // Use the useEffect hook to initialize the map when the component mounts
  useEffect(() => {
    if (map.current) return; 
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom
    });
  
  });

  // Render the map container element and set the ref to the mapContainer ref
  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}