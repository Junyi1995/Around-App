import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps';
import {AroundMarker} from './AroundMarker';
import {POS_KEY} from '../constants';
class AroundMap extends React.Component{
    reloadMarkers = () => {
        const center = this.map.getCenter();
        const position = {lat:center.lat(), lon:center.lng()};
        this.props.loadNearbyPosts(position);
    }
    getMapRef = (map) => {
        this.map = map;
    }
    render() {
        const pos = JSON.parse(localStorage.getItem(POS_KEY));
        return (
            <GoogleMap
                ref = {this.getMapRef}
                onDragEnd = {this.reloadMarkers}
                defaultZoom={5}
                defaultCenter={{lat: pos.lat, lng: pos.lon}}
            >
                {this.props.posts ?
                    this.props.posts.map((post) => <AroundMarker key = {`${pos.url}`} post = {post}/>) : null}
            </GoogleMap>
        );
    }

}
export const WrappedAroundMap = withScriptjs(withGoogleMap(AroundMap));