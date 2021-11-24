import React  from "react";
import "../Container/Map.css"
import axios from 'axios';
// import 'leaflet/dist/leaflet.css';
import { MapsComponent, LayersDirective, NavigationLineDirective, LayerDirective, Zoom, MarkersDirective, NavigationLine, NavigationLinesDirective, MarkerDirective, Marker, Inject } from '@syncfusion/ej2-react-maps';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
class Map extends React.Component{
    state = {
        locations:[]
    }

    onButtonCLick(){
        const locate = this.getLocations()
        return(
            
            <MapsComponent  id="maps" doubleClick={true} scrollWheelZoom = { false } zoomSettings={{ enable: true, toolbars: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'] }}>
        {/* <Inject services={[Zoom]}/> */}
        <Inject services={[Marker, NavigationLine, Zoom]}/>
            <LayersDirective>
                <LayerDirective layerType='OSM'>
                    <MarkersDirective>
                    {locate.map(({ lat, lon }, index) => (
                        <MarkerDirective visible={true} height={5} width={5} dataSource={[
                            {
                                latitude:lat,
                                longitude:lon,
                                name:"Name"
                            }
                        ]}  key={index}>
                            
                        </MarkerDirective>
                    ))}
                </MarkersDirective>
                </LayerDirective>
            </LayersDirective>
        </MapsComponent>
        );
    }
    getLocations() {
        var lat = [];
        var lon = [];
        var location = [];
        axios.get('http://localhost:8080/coordinates/all')
        .then(response => response.data)
        .then(function(data){
        for(let i =0; i<Object.keys(data).length; i++){
            // lat.push(data[i]['latitude'])
            // lon.push(data[i]['longitude'])
            location.push({lat:data[i]['latitude'],lon:data[i]['longitude']})
        }
        return location;
    });

        this.state = {
            locations:this.getLocations()
        }
        console.log(this.state.locations)
    }
    // const position = [51.505, -0.09]
    render(){
        // console.log(position[0][1])
        return (
            <div>
             <button onClick={this.onButtonCLick}>BUTTON</button>
            </div>
    );
    }
}

export default Map