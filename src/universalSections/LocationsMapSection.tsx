import classnames from "classnames";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useEffect, useRef, useState } from "react";
import LocationCard from "../cards/LocationCard";
import SectionHeader from "../components/SectionHeader";
import { SectionProps } from "../types";

mapboxgl.accessToken =
  "pk.eyJ1IjoibXNoYXciLCJhIjoiY2locXNoaHFuMDAxbHcxa3N3aG5wbmdjMCJ9.uXl1VtmbCV58VR48QqEdtA";

const LocationsMapSection = ({ title, results, verticalKey }: SectionProps) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    // @ts-ignore
    map.current = new mapboxgl.Map({
      // @ts-ignore
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false,
      scrollZoom: false,
    });
  });

  return (
    <div className={classnames("")}>
      <SectionHeader>{title}</SectionHeader>
      <div
        ref={mapContainer}
        className="map-container"
        style={{ height: "350px" }}
      />

      <div className="divide-y border-b">
        {results.map((r, i) => (
          <LocationCard
            key={r.id}
            result={r}
            verticalKey={verticalKey}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default LocationsMapSection;
