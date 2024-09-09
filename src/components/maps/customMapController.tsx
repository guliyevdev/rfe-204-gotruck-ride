import React from 'react';
import {ControlPosition, MapControl} from '@vis.gl/react-google-maps';

// import {PlaceAutocompleteClassic} from './autocomplete-classic';
import {AutocompleteCustom} from './autoComplate';

// import {AutocompleteCustomHybrid} from './autocomplete--hybrid';
// import type {AutocompleteMode} from './app';

// type CustomAutocompleteControlProps = {
//   controlPosition: ControlPosition;
//   selectedAutocompleteMode: AutocompleteMode;
//   onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
// };

export const CustomMapControl = ({
  controlPosition,
  selectedAutocompleteMode,
  onPlaceSelect
}: any) => {
  const {id} = selectedAutocompleteMode;

  return (
    <MapControl position={controlPosition}>
      <div className="autocomplete-control">
          {/* <PlaceAutocompleteClassic onPlaceSelect={onPlaceSelect} /> */}

          <AutocompleteCustom onPlaceSelect={onPlaceSelect} />

      </div>
    </MapControl>
  );
};
