import React from 'react';
import Map from './Map';

export default {
  title: 'Components/Map Component',
  component: Map,
  tags: ['autodocs'],
  argTypes: {
    center: { control: 'array', description: 'Center of the map (latitude, longitude).' },
    zoom: { control: 'number', description: 'Zoom level of the map.' },
    markers: { control: 'object', description: 'Array of markers with position and popup text.' },
  },
};

const Template = (args) => <Map {...args} />;

export const DefaultMap = Template.bind({});
DefaultMap.args = {
  center: [51.505, -0.09],
  zoom: 13,
  markers: [
    { position: [51.505, -0.09], popupText: 'Default Marker' },
  ],
};
DefaultMap.parameters = {
  docs: {
    source: {
      code: `import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Leaflet default styles
import './Map.css'; // Import the custom styles

// If you're not using an icon library, you need to fix the missing marker icons in Leaflet
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = ({ center = [51.505, -0.09], zoom = 13, markers = [] }) => {
  return (
    <div className="map-container">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position}>
            <Popup>{marker.popupText}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
`
      ,
    },
  },
};

export const MultipleMarkersMap = Template.bind({});
MultipleMarkersMap.args = {
  center: [51.505, -0.09],
  zoom: 10,
  markers: [
    { position: [51.505, -0.09], popupText: 'Marker 1' },
    { position: [51.515, -0.1], popupText: 'Marker 2' },
    { position: [51.52, -0.08], popupText: 'Marker 3' },
  ],
};
MultipleMarkersMap.parameters = {
  docs: {
    source: {
      code: `import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Leaflet default styles
import './Map.css'; // Import the custom styles

// If you're not using an icon library, you need to fix the missing marker icons in Leaflet
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = ({ center = [51.505, -0.09], zoom = 13, markers = [] }) => {
  return (
    <div className="map-container">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position}>
            <Popup>{marker.popupText}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
`
      ,
    },
  },
};

export const CustomZoomMap = Template.bind({});
CustomZoomMap.args = {
  center: [51.505, -0.09],
  zoom: 5,
  markers: [
    { position: [51.505, -0.09], popupText: 'Zoomed Out Marker' },
  ],
};
CustomZoomMap.parameters = {
  docs: {
    source: {
      code: `import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Leaflet default styles
import './Map.css'; // Import the custom styles

// If you're not using an icon library, you need to fix the missing marker icons in Leaflet
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = ({ center = [51.505, -0.09], zoom = 13, markers = [] }) => {
  return (
    <div className="map-container">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position}>
            <Popup>{marker.popupText}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
`
      ,
    },
  },
};
