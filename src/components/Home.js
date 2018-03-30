import React from 'react';
import {GEO_OPTIONS, API_ROOT,AUTH_PREFIX, TOKEN_KEY} from "../constants"
import $ from 'jquery';
import { Tabs, Button, Spin } from 'antd';
import { Gallery } from './Gallery';

const TabPane = Tabs.TabPane;


export class Home extends React.Component{
    state = {
        loadingPosts : false,
        loadingGeolocation : false,
        error : '',
        posts: [],
    }
    getGeoLocation = () =>{
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition(
                this.onSuccessGetGeoLocation,
                this.onFailedLoadGeoLocation, GEO_OPTIONS);
        } else {
            /*geolocation IS NOT available */
        }
    }

    onSuccessGetGeoLocation = (position) => {
        this.setState({loadingGeolocation: false});
        //const {latitude, longitude} = position.coords;
        console.log(position);
         const lat = 37.7915953;
         const lon = -122.3937977;
        localStorage.setItem('POS_KEY', JSON.stringify({lat, lon}));
        this.loadNearbyPosts(position);
    }
    onFailedLoadGeoLocation = () => {
        this.setState({loadingGeolocation: false, error: 'Failed to load geolocation'});
        console.log('Failed get geolocation')
    }
    componentDidMount(){
        this.setState({loadingGeolocation: true});
        this.getGeoLocation();
    }

    getGalleryPanelContent = () => {
        if(this.state.error){
            return <div>{this.state.error}</div>;
        } else if(this.state.loadingGeolocation){
            return <Spin tip = 'loading geolocation...'/> ;
        } else if (this.state.loadingPosts){
            return <Spin tip = 'loading posts...'/>;
        } else if(this.state.posts && this.state.posts.length > 0){
            const images = this.state.posts.map((post) => {
                return {
                    user: post.user,
                    src: post.url,
                    thumbnail: post.url,
                    caption: post.message,
                    thumbnailWidth: 400,
                    thumbnailHeight: 300
                }
            });
            return <Gallery images = {images}/>;
        } else {
            return null;
        }
    }
    loadNearbyPosts = (position) => {
        const lat = 37.7915953;
        const lon = -122.3937977;
        this.setState({loadingPosts : true});
        $.ajax({
            url: `${API_ROOT}/search?lat=${lat}&lon=${lon}&range=20` ,
            method: 'GET',
            headers: {
                Authorization:`${AUTH_PREFIX} ${localStorage.getItem(TOKEN_KEY)}`
            },
        }).then((response) => {
            this.setState({loadingPosts: false, error: ``});
            console.log(response);
        }, (response) => {
            this.setState({loadingPosts: false, response: response.responseText})
        }).catch((error) => {
            console.log(error);
        });
    }
    render() {
        const operations = <Button type = "primary">Create New Post</Button>;
        return (
            <Tabs tabBarExtraContent={operations} className="main-tabs">
                <TabPane tab="Posts" key="1">
                    {this.getGalleryPanelContent()}
                </TabPane>
                <TabPane tab="Map" key="2">Content of tab 2</TabPane>
            </Tabs>
        );
    }
}