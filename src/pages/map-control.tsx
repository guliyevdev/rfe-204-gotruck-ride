import {ControlPosition, MapControl} from '@vis.gl/react-google-maps';

// import {PlaceAutocompleteClassic} from './autocomplete-classic';
import {AutocompleteCustom} from './autocomplete-custom';

// import {AutocompleteCustomHybrid} from './autocomplete-custom-hybrid';
type AutocompleteMode= {id: string; label: string};

type CustomAutocompleteControlProps = {
  controlPosition: ControlPosition;
  selectedAutocompleteMode: AutocompleteMode;
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
};

export const CustomMapControl = ({
  controlPosition,
  selectedAutocompleteMode,
  onPlaceSelect
}: CustomAutocompleteControlProps) => {
  return (
    <MapControl position={controlPosition}>
      <div className="mt-3 ml-3 autocomplete-control">
          <AutocompleteCustom onPlaceSelect={onPlaceSelect} />
      </div>
    </MapControl>
  );
};
