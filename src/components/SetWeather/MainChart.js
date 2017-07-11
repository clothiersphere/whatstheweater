import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';



export default class App extends React.Component {

  render() {
    var dataWug =[];
    this.props.wugInfo.map((weather,i) => {
      dataWug.push({y: parseInt(weather.temp_H), x:i})
    })

     var dataDsky =[];
    this.props.dskyInfo.map((weather,i) => {
      dataDsky.push({y: parseInt(weather.temp_H), x:i})
    })

    return (
      <VictoryChart
      theme={VictoryTheme.material}
      >
        <VictoryStack
        
        >
        <VictoryLine
        domain={{x:[0, 4], y:[0,100]}}
          data= {dataWug}
        />
        <VictoryLine
        domain={{x:[0, 4], y:[0,100]}}
          data= {dataDsky}
        />
        </VictoryStack>
      </VictoryChart>
    )
  }
}

