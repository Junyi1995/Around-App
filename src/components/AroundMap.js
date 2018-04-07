import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps';
import {AroundMarker} from './AroundMarker';
import {POS_KEY} from '../constants';
class AroundMap extends React.Component{
    render() {
        const pos = JSON.parse(localStorage.getItem(POS_KEY));
        return (
            <GoogleMap
                defaultZoom={5}
                defaultCenter={{lat: pos.lat, lng: pos.lon}}
            >
                {this.props.posts.map((post) => {
                    return <AroundMarker key = {`${pos.url}`} post = {post}/>
                })}
            </GoogleMap>
        );
    }

}
export const WrappedAroundMap = withScriptjs(withGoogleMap(AroundMap));