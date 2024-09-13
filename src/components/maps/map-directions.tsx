import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const MapDirections = () => {
  const destination = useSelector((state: any) => state.MapDirections.destination);
  const origin = useSelector((state: any) => state.MapDirections.origin);
  const map = useMap();
  const routesLibrary = useMapsLibrary('routes');
  
  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService | null>(null);
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer | null>(null);
  
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  // Initialize directions service and renderer
  useEffect(() => {
    if (!routesLibrary || !map) return;

    const service = new routesLibrary.DirectionsService();
    const renderer = new routesLibrary.DirectionsRenderer({ map });

    setDirectionsService(service);
    setDirectionsRenderer(renderer);

    return () => {
      if (renderer) {
        renderer.setMap(null); // Cleanup renderer when component unmounts
      }
    };
  }, [routesLibrary, map]);

  // Fetch new directions when origin or destination changes
  useEffect(() => {
    if (!directionsService || !directionsRenderer || !origin || !destination) return;

    directionsService
      .route({
        origin: { placeId: origin },
        destination: { placeId: destination },
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true
      })
      .then(response => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      })
      .catch(error => {
        console.error("Error fetching directions: ", error);
      });
    
  }, [directionsService, directionsRenderer, origin, destination]);

  // Update selected route when routeIndex changes
  useEffect(() => {
    if (!directionsRenderer || !routes.length) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer, routes]);

  if (!leg) return null;
  console.log(leg.distance?.text);
  return (
    <>
    </>
  );
};