import {  useState } from 'react';
import { APIProvider, ControlPosition, Map } from '@vis.gl/react-google-maps';

import { CustomMapControl } from '../../components/maps/map-control';
import MapHandler from '../../components/maps/map-handler';
import styles from './page.module.scss';
// import Header from '../../components/Header/Header';
import { MapDirections } from '../../components/maps/map-directions';
import "./ride.scss";

const API_KEY = 'AIzaSyD9JBkYu-uZAPoojnbSD_6ZNUm_SGkmpO4';
const MAP_IDS = [
    'bf51a910020fa25a',
    '49ae42fed52588c3',
    '3fec513989decfcd',
    '7a9e2ebecd32a903'
];

type AutocompleteMode = { id: string; label: string };

const autocompleteModes: Array<AutocompleteMode> = [
    { id: 'classic', label: 'Google Autocomplete Widget' },
    { id: 'custom', label: 'Custom Build' },
    { id: 'custom-hybrid', label: 'Custom w/ Select Widget' }
];

export const RidePage = () => {
    const [selectedAutocompleteMode] = useState<AutocompleteMode>(autocompleteModes[0]);
    const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null);

    return (
        <div className={styles.app}>
            {/* <Header /> */}
            <div className={styles.orderArea}>
                <APIProvider apiKey={API_KEY}>
                    <div className={styles.container}>
                        <div className={styles.leftPane} >
                            <CustomMapControl
                                controlPosition={ControlPosition.LEFT_CENTER}
                                selectedAutocompleteMode={selectedAutocompleteMode}
                                onPlaceSelect={setSelectedPlace}
                            />
                        </div>
                        <div className={styles.rightPane}>
                            <Map
                                mapId={MAP_IDS[2]}
                                defaultZoom={8}
                                defaultCenter={{ lat: 40.3, lng: 47 }}
                                style={{ height: '100%', border: '1px solid #0000005c' }}
                                gestureHandling={'greedy'}
                                disableDefaultUI={true}
                            >
                                <MapDirections />
                            </Map>
                            <MapHandler place={selectedPlace} />
                        </div>
                    </div>
                </APIProvider>
            </div>
        </div>
    );
};