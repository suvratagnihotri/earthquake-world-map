import React  from "react";
import "../Container/Map.css"
import axios from 'axios';
import { MapsComponent, LayersDirective, NavigationLineDirective, LayerDirective, Zoom, MarkersDirective, NavigationLine, NavigationLinesDirective, MarkerDirective, Marker, Inject } from '@syncfusion/ej2-react-maps';

class Home extends React.Component{
    state = {
        locations:[]
    }

    handleClick(){
        var location = [];
        axios.get('http://localhost:8080/coordinates/all')
        .then(response => response.data)
        .then(function(data){
        for(let i =0; i<Object.keys(data).length; i++){
            // lat.push(data[i]['latitude'])
            // lon.push(data[i]['longitude'])
            location.push({lat:data[i]['latitude'],lon:data[i]['longitude']})
        }
        console.log(location)
    });

    this.state = {
        locations:location
    }
    }
    render() {
        const locations = [this.state.locations]
        return (
            <div>
                <button onClick={this.handleClick}></button>
                <MapsComponent  id="maps" doubleClick={true} scrollWheelZoom = { false } zoomSettings={{ enable: true, toolbars: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'] }}>
        {/* <Inject services={[Zoom]}/> */}
        <Inject services={[Marker, NavigationLine, Zoom]}/>
            <LayersDirective>
                <LayerDirective layerType='OSM'>
                    <MarkersDirective>
                    {locations.map(({ lat, lon }, index) => (
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
            </div>
        );
    }
}

export default Home