import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {Map, TileLayer} from 'react-leaflet'
import mapMarkingImg from '../images/map-marker.svg';
import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkingImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>São Paulo</strong>
          <span>São Bernardo do Campo</span>
        </footer>
      </aside>
      <Map
        center={[-23.731771,-46.5604694]}
        zoom={15}
        style={{width: '100%', height: '100%'}}
        >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFFFFF"/>
      </Link>
    </div>
  );
}
export default OrphanagesMap;