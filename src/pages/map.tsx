import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps';

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
    const position = {lat: 53.54992, lng: 10.00678};
    return (
        <>
            <Header />
            <div className={styles.app}>
                <APIProvider apiKey={'AIzaSyDDuK0Ovh6M1VRvICDiq321wzBwbsT5FSA'}>
                    <Map defaultCenter={position} defaultZoom={10} mapId='DEMO_MAP_ID'>
                        <AdvancedMarker position={position} />
                    </Map>
                </APIProvider>
                <div className={styles.sideDiv}>
                    <h2 className='text-2xl font-bold'>Yola Davam</h2>
                </div>
            </div>
        </>
    );
};

export default MapPage;