import React from 'react';
import {GEO_OPTIONS} from "../constants"
import { Tabs, Button, Spin } from 'antd';

const TabPane = Tabs.TabPane;


export class Home extends React.Component{

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
        console.log(position)
        //const {latitude, longitude} = position.coords;
         const lat = 37.7915953;
         const lon = -122.3937977;
        localStorage.setItem('POS_KEY', JSON.stringify({lat, lon}));
    }
    onFailedLoadGeoLocation = () => {
        console.log('Failed get geolocation')
    }
    componentDidMount(){
        this.getGeoLocation();
    }
    render() {
        const operations = <Button type = 'primary'>Create New Post</Button>;
        return (
            <Tabs tabBarExtraContent={operations} className="main-tabs">
                <TabPane tab="Posts" key="1">Content of tab 1 </TabPane>
                <TabPane tab="Map" key="2">Content of tab 2</TabPane>
            </Tabs>
        );
    }
}