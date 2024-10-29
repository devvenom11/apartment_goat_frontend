import React, { useState, useCallback, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  OverlayView,
  useJsApiLoader,
} from "@react-google-maps/api";
import Card from "./Card";
import MapMarker from "./MapMarker";
const containerStyle = {
  width: "100%",
  height: "100%",
};

const initialCenter = {
  lat: 41.878168,
  lng: -87.637496,
};
export default function Map({ properties, params, lat, lng }) {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [center, setCenter] = useState(initialCenter);
  const { isLoaded } = useJsApiLoader({
    id: "AIzaSyBGdRY8Rm6dBMFrTlOq1w6LZQ9L9LfCjn4",
    googleMapsApiKey: "AIzaSyBGdRY8Rm6dBMFrTlOq1w6LZQ9L9LfCjn4",
  });

  useEffect(() => {
    const parsedLat = lat ? parseFloat(lat) : null;
    const parsedLng = lng ? parseFloat(lng) : null;
    if (parsedLat && parsedLng) {
      setCenter({ lat: parsedLat, lng: parsedLng });
    } else if (properties?.length > 0) {
      const { latitude, longitude } = properties[0];

      setCenter({ lat: parseFloat(latitude), lng: parseFloat(longitude) });
    } else {
      setCenter(initialCenter);
    }
  }, [lat, lng, properties]);

  const handleMarkerClick = (marker) => {
    if (!marker) {
      setSelectedMarker(null);
      return;
    }
    if (selectedMarker?.id !== marker.id) {
      setSelectedMarker(marker);
    } else {
      setSelectedMarker(null);
    }
  };
  
  return (
    <div className=" h-[calc(100vh-60px)]">
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8}
          options={{ mapTypeId: "terrain" }}
        >
          {properties?.map((item, index) => {
            return (
              <OverlayView
                position={{
                  lat: item.latitude,
                  lng: item.longitude,
                }}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
                <MapMarker
                  key={index}
                  item={item}
                  selectedMarker={selectedMarker}
                  handleMarkerClick={handleMarkerClick}
                />
              </OverlayView>
            );
          })}
          {selectedMarker && <Card item={selectedMarker} markerCard={true} />}
        </GoogleMap>
      )}
    </div>
  );
}
