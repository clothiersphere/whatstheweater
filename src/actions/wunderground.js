import { WUG_KEY } from '../constants/wug_key'

console.log(WUG_KEY);

export function wunderground() {
  console.log("WUNDERGROUND")
}

// http://api.wunderground.com/api/YOUR_API_KEY/conditions/q/THE_DESIRED_STATE/THE_DESIRED_CITY.json

// function fetchMe(key) {
//   console.log("HELLO")
//   fetch('/http://api.wunderground.com/api/${key}/conditions/q/CA/San_Francisco.json/')
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     })
// }
