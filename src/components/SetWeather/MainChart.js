import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryArea } from 'victory';

export default class App extends React.Component {

  render() {
    var dataMin = []
    var dataMax = []

    var dataWugTempH =[];
    var dataWugTempL =[];
    this.props.wugInfo.map((weather,i) => {
      dataWugTempH.push({y: parseInt(weather.temp_H), x:weather.dow})
      dataWugTempL.push({y: parseInt(weather.temp_L), x:weather.dow})
      dataMax.push(parseInt(weather.temp_H))
      dataMin.push(parseInt(weather.temp_L))
    })

    var dataDskyTempH =[];
    var dataDskyTempL =[];
    this.props.dskyInfo.map((weather,i) => {
      dataDskyTempH.push({y: parseInt(weather.temp_H), x:weather.dow})
      dataDskyTempL.push({y: parseInt(weather.temp_L), x:weather.dow})
      dataMax.push(parseInt(weather.temp_H))
      dataMin.push(parseInt(weather.temp_L))
    })

    var dataApixuTempH =[];
    var dataApixuTempL =[];
    this.props.apixuInfo.map((weather,i) => {
      dataApixuTempH.push({y: parseInt(weather.temp_H), x:weather.dow})
      dataApixuTempL.push({y: parseInt(weather.temp_L), x:weather.dow})
      dataMax.push(parseInt(weather.temp_H))
      dataMin.push(parseInt(weather.temp_L))
    })

    const maxDataMax = (Math.max(...dataMax))+2;
    const minDataMax = (Math.min(...dataMax))-2;
    const maxDataMin = (Math.max(...dataMin))+2;
    const minDataMin = (Math.min(...dataMin))-2;

    if (maxDataMax) {
      return (
      <div>
        <div className="tempHchart">
          <VictoryChart
          // theme={VictoryTheme.material}
          domain={{x:[0, 6], y:[minDataMax, maxDataMax]}}
          >
            <VictoryLine
            
            data= {dataWugTempH}
            // interpolation="natural"
            labels={(d) => d.y}
            style={{
              data: { 
                stroke: '#CCFCCB',
                strokeWidth: 5
              }
            }}
            />
            <VictoryLine
            data= {dataApixuTempH}
            // interpolation="natural"
            labels={(d) => d.y}
            style={{
              data: { stroke: '#FFBFA4', strokeWidth: 5}
            }}
            />
            <VictoryLine            
            data= {dataDskyTempH}
            // interpolation="natural"
            labels={(d) => d.y}
            style={{
              data: { stroke: '#EFEBCE', strokeWidth: 5}
            }}
            />
          </VictoryChart>
        </div>
        <div className="tempLchart">
          <VictoryChart
          // theme={VictoryTheme.material}
          domain={{x:[0, 6], y:[minDataMin, maxDataMin]}}

          >
            <VictoryLine
              data= {dataWugTempL}
              // interpolation="natural"
              labels={(d) => d.y}
              style={{
              data: { stroke: '#CCFCCB', strokeWidth: 5}
              }}
            />
            <VictoryLine
              data= {dataApixuTempL}
              // interpolation="natural"
              labels={(d) => d.y}
              style={{
                data: { stroke: '#FFBFA4', strokeWidth: 5}
              }}
            />
            <VictoryLine
              data= {dataDskyTempL}
              // interpolation="natural"
              labels={(d) => d.y}
              style={{
              data: { stroke: '#EFEBCE', strokeWidth: 5}
            }}
            />
          </VictoryChart>
        </div>
        
      </div>
      )
    } else {
      return <div> loading..</div>
    }
  }
}
