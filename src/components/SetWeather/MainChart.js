import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';



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
      console.log(weather.dow, "weatherDOW")
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
        <div>
          <VictoryChart
          theme={VictoryTheme.material}
          domain={{x:[0, 6], y:[minDataMax, maxDataMax]}}
          >
            <VictoryLine
            data= {dataDskyTempH}
            interpolation="linear"
            labels={(d) => d.y}
            />
            <VictoryLine
            data= {dataWugTempH}
            interpolation="linear"
            labels={(d) => d.y}
            
            />
            <VictoryLine
            data= {dataApixuTempH}
            interpolation="linear"
            labels={(d) => d.y}
              
            />
          
          </VictoryChart>
        </div>
        <div>
        
          <VictoryChart
          theme={VictoryTheme.material}
          domain={{x:[0, 6], y:[minDataMin, maxDataMin]}}

          >
            <VictoryLine
            data= {dataDskyTempL}
            interpolation="linear"
            labels={(d) => d.y}
            />
            <VictoryLine
            data= {dataWugTempL}
            interpolation="linear"
            labels={(d) => d.y}
            
            />
            <VictoryLine
            data= {dataApixuTempL}
            interpolation="linear"
            labels={(d) => d.y}
              
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

