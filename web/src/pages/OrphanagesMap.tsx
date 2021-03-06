import React from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import '../styles/pages/orphanage-map.css';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

function OrphanagesMap(){
  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>
        </header>
        <footer>
          <strong>Tupã</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={[-21.9401268,-50.5321931]}
        zoom={15}
        style={{ width:'100%', height:'100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF"/>
      </Link>
    </div>
  );
}

export default OrphanagesMap;