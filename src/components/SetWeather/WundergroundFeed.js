import React from 'react';

var WundergroundFeed = function(props) {
  console.log(props, "PROPS")
  return (
    <div>
    {
    props.weather.map((weather, key) => {
     return <div className="wugInfo" key={key}> {weather.UV} </div>
    })
    }
    </div>
  )
}


export default WundergroundFeed;