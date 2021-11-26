import React  from "react";
import "../Container/Map.css"
import axios from 'axios';
// import 'leaflet/dist/leaflet.css';
import { MapsComponent, LayersDirective, LayerDirective, Zoom, MarkersDirective, NavigationLine, NavigationLinesDirective, MarkerDirective, Marker, Inject } from '@syncfusion/ej2-react-maps';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
class Map extends React.Component{
    state = {
        locations:[]
    }
    getLocations() {
        var location = [];
        axios.get('http://localhost:8080/coordinates/all')
        .then(response => response.data)
        .then(function(data){
        for(let i =0; i<Object.keys(data).length; i++){
            location.push({lat:data[i]['latitude'],lon:data[i]['longitude']})
        }
        console.log(location)
        return(
            <div>
                <h1>Hello</h1>
            </div>

        //     <MapsComponent  id="maps" doubleClick={true} scrollWheelZoom = { false } zoomSettings={{ enable: true, toolbars: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'] }}>
        // {/* <Inject services={[Zoom]}/> */}
        // <Inject services={[Marker, NavigationLine, Zoom]}/>
        //     <LayersDirective>
        //         <LayerDirective layerType='OSM'>
        //             {/* <MarkersDirective>
        //             {location.map(({ lat, lon }, index) => (
        //                 <Marker position={[lat,lon]}  key={index}>
                            
        //                 </Marker>
        //             ))}
        //         </MarkersDirective> */}
        //         </LayerDirective>
        //     </LayersDirective>
        // </MapsComponent>
        );
    });
    }
    render(){
        return (
                <button onClick={this.getLocations}>Button</button>
    );
    }
}

export default Map