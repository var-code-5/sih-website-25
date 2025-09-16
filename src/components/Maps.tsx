import React from 'react'

import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps';


export default function Maps() {
    const position = { lat: 53.54992, lng: 10.00678 };

    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY || ''}>
            <div className='w-96 h-96'>
                <Map defaultCenter={position} defaultZoom={10} mapId="DEMO_MAP_ID"> {/* Replace with dd's Map ID */}
                    <AdvancedMarker position={position} />
                </Map>
            </div>
        </APIProvider>
    );
}
