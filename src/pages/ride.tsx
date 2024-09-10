import { useState } from 'react';
import { APIProvider, ControlPosition, Map } from '@vis.gl/react-google-maps';

import { CustomMapControl } from '@/components/maps/map-control';
import MapHandler from '@/components/maps/map-handler';
import styles from './page.module.scss';
import Header from '../components/Header/Header';
import { MapDirections } from '@/components/maps/map-directions';

const API_KEY = 'AIzaSyD9JBkYu-uZAPoojnbSD_6ZNUm_SGkmpO4'
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
    const [selectedAutocompleteMode, setSelectedAutocompleteMode] =
        useState<AutocompleteMode>(autocompleteModes[0]);

    const [selectedPlace, setSelectedPlace] =
        useState<google.maps.places.PlaceResult | null>(null);



    return (
        <div className={styles.app}>
            <Header />
            <APIProvider apiKey={API_KEY}>
                <Map
                // key={2}
                // id={`map-${2}`}
                mapId={MAP_IDS[2]}
                    defaultZoom={8}
                    defaultCenter={{ lat: 40.3, lng: 47 }}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                >
                    <MapDirections/>
                </Map>
                
                <CustomMapControl
                    controlPosition={ControlPosition.TOP_LEFT}
                    selectedAutocompleteMode={selectedAutocompleteMode}
                    onPlaceSelect={setSelectedPlace}
                />

                <MapHandler place={selectedPlace} />
            </APIProvider>
        </div>
    );
};
