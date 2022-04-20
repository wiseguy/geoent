//import type { NextPage } from "next";
import Layout from "../../components/layout";
import mapboxStyles from "../../styles/Mapbox.module.css";
import React, { useRef, useEffect, useState } from "react";
import { getMapboxToken } from "../../services/AppService";
import mapboxgl from "!mapbox-gl";

const Home = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  useEffect(() => {
    mapboxgl.accessToken = getMapboxToken();
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  }, []);
  return (
    <Layout>
      <div ref={mapContainer} className={mapboxStyles.mapContainer}></div>
    </Layout>
  );
};

export default Home;
