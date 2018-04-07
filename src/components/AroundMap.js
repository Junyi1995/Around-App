import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps';
import {AroundMarker} from './AroundMarker';
class AroundMap extends React.Component{
    render() {
        const arrPos = [
            {lat: 40.740, lng: -74.18},
            {lat: 42.740, lng: -74.18},
            {lat: 44.740, lng: -74.18},
        ];
        return (
            <GoogleMap
                defaultZoom={5}
                defaultCenter={{lat: 40.740, lng: -74.18}}
            >
                {arrPos.map((pos) => {
                    return <AroundMarker key = {`${pos.lat}${pos.lng}`} pos = {pos}/>
                })}
            </GoogleMap>
        );
    }

}
export const WrappedAroundMap = withScriptjs(withGoogleMap(AroundMap));