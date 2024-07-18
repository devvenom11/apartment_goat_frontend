

import React, { useState, useCallback, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  OverlayView,
  useJsApiLoader,
} from "@react-google-maps/api";
import Card from "./Card";
import MapMarker from "./MapMarker";
import { locations } from "../../utils/data";
import { useParams } from 'next/navigation';
const containerStyle = {
  width: "100%",
  height: "100%",
};

const initialCenter = {
  lat: 41.878168,
  lng: -87.637496,
};

export default function Map({ propertiesData,params}) {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [center, setCenter] = useState(initialCenter);
  const {slug} = useParams();
  const { isLoaded } = useJsApiLoader({
    id: "AIzaSyBGdRY8Rm6dBMFrTlOq1w6LZQ9L9LfCjn4",
    googleMapsApiKey: "AIzaSyBGdRY8Rm6dBMFrTlOq1w6LZQ9L9LfCjn4",
  });

  useEffect(() => {
    const matchingCountry = locations.find((location) =>
      location.slug==slug
    );
    if (matchingCountry) {
      setCenter({ lat: matchingCountry.lat, lng: matchingCountry.lng });
    } else {
      setCenter(initialCenter);
    }
  }, [slug]);
 
  
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
          zoom={16}
          options={{ mapTypeId: "terrain" }}
        >
          {propertiesData?.map((item, index) => {
            return (
              <OverlayView
                position={{
                  lat: item.attributes.latitude,
                  lng: item.attributes.longitude,
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