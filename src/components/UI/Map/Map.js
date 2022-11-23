import React, { useRef } from "react";
import { Map, TileLayer } from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import Search from "react-leaflet-search";

const defaultCenter = [38.9072, -77.0369];
const defaultZoom = 8;
const disneyWorldLatLng = [28.3852, -81.5639];
const disneyLandLatLng = [33.8121, -117.919];

function Maps() {
  const mapRef = useRef();

  /**
   * handleOnSetView
   */

  function handleOnSetView() {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    map.setView(disneyWorldLatLng, 14);
  }

  /**
   * handleOnFlyTo
   */

  function handleOnFlyTo() {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    map.flyTo(disneyLandLatLng, 14, {
      duration: 2,
    });
  }

  return (
    <div className="App">
      <Map ref={mapRef} center={defaultCenter} zoom={defaultZoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Search
          // customProvider={this.provider}
          //   onChange={(info) => {
          //     console.log("FROM onChange: ", info);
          //   }}
          position="topleft"
          inputPlaceholder="Custom placeholder"
          // search={this.state.search}
          showMarker={false}
          zoom={7}
          closeResultsOnClick={true}
          openSearchOnLoad={false}
          // these searchbounds would limit results to only Turkey.
          //   providerOptions={{
          //     searchBounds: [
          //       new LatLng(33.100745405144245, 46.48315429687501),
          //       new LatLng(44.55916341529184, 24.510498046875),
          //     ],
          //     region: "tr",
          //   }}

          // default provider OpenStreetMap
          provider="BingMap"
          providerKey={process.env.REACT_APP_BING_MAP_KEY}
        ></Search>
      </Map>
      <div className="sidebar">
        <h2>Disney World</h2>
        <p>Bay Lake, FL</p>
        <ul>
          <li>Lat: 28.3852</li>
          <li>Long: -81.5639</li>
        </ul>
        <p>
          <button onClick={handleOnSetView}>Set View to Disney World</button>
        </p>
        <h2>Disneyland</h2>
        <p>Anaheim, CA</p>
        <ul>
          <li>Lat: 33.8121</li>
          <li>Long: -117.9190</li>
        </ul>
        <p>
          <button onClick={handleOnFlyTo}>Fly to Disneyland</button>
        </p>
      </div>
    </div>
  );
}

export default Maps;
