import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

function ViewMap() {
  return (
    <MapContainer center={{ lat: "16.892885080570817", lng: "-93.07511256830398" }} zoom={13} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default ViewMap;
