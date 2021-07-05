import React from "react";
import GoogleMapReact from 'google-map-react';
import env from "react-dotenv";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map(){
    const defaultProps = {
        center: {
            lat: 45.46672,
            lng: -0.7167
        },
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%', boxShadow: "black 5px 5px 10px" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: env.API_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={45.465020}
                    lng={-0.739410}
                    text={<h1>🚩</h1>}
                />
            </GoogleMapReact>
        </div>
    );
}
