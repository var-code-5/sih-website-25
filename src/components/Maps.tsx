"use client"

import React from 'react'

import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps';


export default function Maps() {
    const position = { lat: 53.54992, lng: 10.00678 };

    const mapApiKey = process.env.NEXT_PUBLIC_MAPS_API_KEY || '';
    const mapId = process.env.NEXT_PUBLIC_MAP_ID || '';

    return (
        <APIProvider apiKey={mapApiKey}>
            <div className='w-96 h-96'>
                <Map defaultCenter={position} defaultZoom={10} mapId={mapId}>
                    <AdvancedMarker position={position} />
                </Map>
            </div>
        </APIProvider>
    );
}
