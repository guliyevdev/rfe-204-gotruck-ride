import { useState } from 'react';
import { APIProvider, ControlPosition, Map } from '@vis.gl/react-google-maps';

import { CustomMapControl } from './map-control';
import MapHandler from './map-handler';
import styles from './page.module.scss';
import { Button } from 'antd';

const API_KEY = 'AIzaSyD9JBkYu-uZAPoojnbSD_6ZNUm_SGkmpO4'

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
            <APIProvider apiKey={API_KEY}>
                <Map
                    defaultZoom={3}
                    defaultCenter={{ lat: 22.54992, lng: 0 }}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                />

                <CustomMapControl
                    controlPosition={ControlPosition.TOP}
                    selectedAutocompleteMode={selectedAutocompleteMode}
                    onPlaceSelect={setSelectedPlace}
                />

                <MapHandler place={selectedPlace} />
            </APIProvider>
            <div className={styles.sideDiv}>
                <h2 className='text-2xl font-bold'>Yola Davam</h2>
                <CustomMapControl
                    controlPosition={ControlPosition.TOP}
                    selectedAutocompleteMode={selectedAutocompleteMode}
                    onPlaceSelect={setSelectedPlace}
                />
                <Button type="primary">Ride Button</Button>
            </div>
        </div>
    );
};
