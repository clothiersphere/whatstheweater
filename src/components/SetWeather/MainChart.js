import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';



export default class App extends React.Component {

  render() {
    
    var dataMin = []
    var dataMax = []

    var dataWug =[];
    this.props.wugInfo.map((weather,i) => {
      dataWug.push({y: parseInt(weather.temp_H), x:i})
      console.log(parseInt(weather.temp_H, "TEMPH"))
      dataMax.push(parseInt(weather.temp_H))
    })

    var dataDsky =[];
    this.props.dskyInfo.map((weather,i) => {
      dataDsky.push({y: parseInt(weather.temp_H), x:i})
      dataMax.push(parseInt(weather.temp_H))
    })

    var dataApixu =[];
    this.props.apixuInfo.map((weather,i) => {
      dataApixu.push({y: parseInt(weather.temp_H), x:i})
      dataMax.push(parseInt(weather.temp_H))
    })

    const yMax = (Math.max(...dataMax));
    const yMin = (Math.min(...dataMax))-3;

    return (
      <VictoryChart
      theme={VictoryTheme.material}
      domain={{x:[0, 4], y:[yMin, yMax]}}

      >
        
        <VictoryLine
        
        data= {dataDsky}
        interpolation="linear"
        labels={(d) => d.y}
        style={{
          label: { }
        }}  
        />
        <VictoryLine
        style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc"}
            }}
        data= {dataWug}
        interpolation="linear"
        labels={(d) => d.y}
        
        />
        <VictoryLine
        data= {dataApixu}
        interpolation="linear"
        labels={(d) => d.y}
          
        />
      
      </VictoryChart>
    )
  }
}

