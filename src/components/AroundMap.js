import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps';

class AroundMap extends React.Component{
    render() {
        return (
            <GoogleMap
                defaultZoom={12}
                defaultCenter={{lat: 40.740, lng: -74.18}}
            />
        );
    }

}
export const WrappedAroundMap = withScriptjs(withGoogleMap(AroundMap));