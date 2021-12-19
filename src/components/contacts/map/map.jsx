import * as S from '../contacts.styled';
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Position = {
  lat: 59.968137,
  lng: 30.316272,
}

const ZOOM = 17;
const ICON_URL = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
const ICON_SIZE = [52, 52];
const ICON_ANCHOR = [26, 52];

const Map = () => {
  const mapRef = useRef(null);
  useEffect(() => {
    const instance = L.map(mapRef.current).setView(
      {
        lat: Position.lat,
        lng: Position.lng,
      },
      ZOOM,
    );

    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      },
    ).addTo(instance);

    const pinIcon = L.icon({
      iconUrl: ICON_URL,
      iconSize: ICON_SIZE,
      iconAnchor: ICON_ANCHOR,
    });

    L.marker({
      lat: Position.lat,
      lng: Position.lng,
    }, {icon: pinIcon}).addTo(instance);
  }, []);

  return (
    <S.ContactsMap ref={mapRef}>
    </S.ContactsMap>
  );
};

export default Map;
