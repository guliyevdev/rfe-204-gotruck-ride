import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Header from '../components/Header/Header';
import styles from './page.module.scss';

const containerStyle = {
    width: '100%',
    height: '94vh', // Full screen height
  };
  
  const center = {
    lat: 40.4093,  // Example coordinates for Baku
    lng: 49.8671,
  };

const MapPage: React.FC = () => {
    return (
        <>
            <Header />
            <div className={styles.app}>
                <LoadScript googleMapsApiKey="AIzaSyDDuK0Ovh6M1VRvICDiq321wzBwbsT5FSA">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                    >
                        {/* You can add markers, info windows, etc. here */}
                    </GoogleMap>
                </LoadScript>

                <div className={styles.sideDiv}>
                    <h2>Info Panel</h2>
                    <p>This is a panel with 350px width, padded from the map.</p>
                </div>
            </div>
        </>
    );
};

export default MapPage;