import React from 'react';
import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps';

import Header from '../components/Header/Header';
import styles from './page.module.scss';
import { Button } from 'antd';


const MapPage: React.FC = () => {
    const position = {lat: 40.409264, lng: 49.867092};
    return (
        <>
            <Header />
            <div className={styles.app}>
                <APIProvider apiKey={'AIzaSyD9JBkYu-uZAPoojnbSD_6ZNUm_SGkmpO4'}>
                    <Map defaultCenter={position} defaultZoom={10} mapId='DEMO_MAP_ID'>
                        <AdvancedMarker position={position} />
                    </Map>
                </APIProvider>
                <div className={styles.sideDiv}>
                    <h2 className='text-2xl font-bold'>Yola Davam</h2>
                    <Button type="primary">Ant Design Button</Button>
                </div>
            </div>
        </>
    );
};

export default MapPage;