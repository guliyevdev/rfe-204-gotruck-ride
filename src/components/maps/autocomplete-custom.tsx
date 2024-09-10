import { useEffect, useState, useCallback, FormEvent, useRef } from 'react';
import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import { Input } from 'antd';
import styles from './map.module.scss';

interface Props {
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}

// This is a custom built autocomplete component using the "Autocomplete Service" for predictions
// and the "Places Service" for place details
export const AutocompleteCustom = ({ onPlaceSelect }: Props) => {
  const map = useMap();
  const places = useMapsLibrary('places');

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompleteSessionToken
  const [sessionToken, setSessionToken] =
    useState<google.maps.places.AutocompleteSessionToken>();

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service
  const [autocompleteService, setAutocompleteService] =
    useState<google.maps.places.AutocompleteService | null>(null);

  // https://developers.google.com/maps/documentation/javascript/reference/places-service
  const [placesService, setPlacesService] =
    useState<google.maps.places.PlacesService | null>(null);

  const [predictionResults, setPredictionResults] = useState<
    Array<google.maps.places.AutocompletePrediction>
  >([]);
  const [predictionDestinationResults, setPredictionDestinationResults] = useState<
    Array<google.maps.places.AutocompletePrediction>
  >([]);

  const [inceptionValue, setInceptionValue] = useState<string>('');
  const [destinationValue, setDestinationValue] = useState<string>('');
  const autocompleteRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (autocompleteRef.current && !autocompleteRef.current.contains(event.target as Node)) {
      setPredictionResults([]); // Kənara kliklənəndə nəticələri təmizləyir
    }
  };

  useEffect(() => {
    if (!places || !map) return;

    setAutocompleteService(new places.AutocompleteService());
    setPlacesService(new places.PlacesService(map));
    setSessionToken(new places.AutocompleteSessionToken());
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      setAutocompleteService(null)
    }
  }, [map, places]);

  const fetchPredictions = useCallback(
    async (inputValue: string,direction: string) => {
      if (!autocompleteService || !inputValue) {
        setPredictionResults([]);
        setPredictionDestinationResults([]);
        return;
      }

      const request = { input: inputValue, sessionToken };
      const response = await autocompleteService.getPlacePredictions(request);
      if(direction === "inception") setPredictionResults(response.predictions);
      else setPredictionDestinationResults(response.predictions);
    },
    [autocompleteService, sessionToken]
  );

  const onInputChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      const value = (event.target as HTMLInputElement)?.value;

      setInceptionValue(value);
      fetchPredictions(value,"inception");
    },
    [fetchPredictions]
  );
  const onDestinationInputChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      const value = (event.target as HTMLInputElement)?.value;

      setDestinationValue(value);
      fetchPredictions(value,"destination");
    },
    [fetchPredictions]
  );


  const handleSuggestionClick = useCallback(
    (placeId: string) => {
      if (!places) return;

      const detailRequestOptions = {
        placeId,
        fields: ['geometry', 'name', 'formatted_address'],
        sessionToken
      };

      const detailsRequestCallback = (
        placeDetails: google.maps.places.PlaceResult | null
      ) => {
        onPlaceSelect(placeDetails);
        setPredictionResults([]);
        setInceptionValue(placeDetails?.formatted_address ?? '');
        setSessionToken(new places.AutocompleteSessionToken());
      };

      placesService?.getDetails(detailRequestOptions, detailsRequestCallback);
    },
    [onPlaceSelect, places, placesService, sessionToken]
  );

  return (
    <div className={styles.sideDiv}>
      <h2 className='text-2xl font-bold'>Yola Davam</h2>
      <div ref={autocompleteRef} className="autocomplete-container mt-3 relative">
        <Input
          value={inceptionValue}
          onInput={(event: FormEvent<HTMLInputElement>) => onInputChange(event)}
          placeholder="Search for a place"
          className="w-full"
        />

        {predictionResults.length > 0 && (
          <ul className="custom-list absolute top-full left-0 z-10 bg-white w-full border border-gray-300">
            {predictionResults.map(({ place_id, description }) => {
              return (
                <li
                  key={place_id}
                  className="custom-list-item py-2 px-4 text-base cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSuggestionClick(place_id)}
                >
                  {description}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="autocomplete-container mt-2" >
        <Input
          value={destinationValue}
          onInput={(event: FormEvent<HTMLInputElement>) => onDestinationInputChange(event)}
          placeholder="Search for a place" />

        {predictionDestinationResults.length > 0 && (
          <ul className="custom-list">
            {predictionDestinationResults.map(({ place_id, description }) => {
              return (
                <li
                  key={place_id}
                  className="custom-list-item py-2 text-base"
                  onClick={() => handleSuggestionClick(place_id)}>
                  {description}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
