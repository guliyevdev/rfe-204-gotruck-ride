import {ControlPosition, MapControl} from '@vis.gl/react-google-maps';

import {AutoCompleteCustom} from '@/components/maps/autoComplete-custom';
import SideMap from './side-map';

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
      <SideMap onPlaceSelect={onPlaceSelect} />
    </MapControl>
  );
};
