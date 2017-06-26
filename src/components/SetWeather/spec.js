import SetWeather from './presenter';
import { shallow } from 'enzyme';

describe ('SetWeather', () => {
  
  const props = {
    weatherFeed: [{ high: '89', low: '22'}, {high:'95', low:'22'}],
  };
  
  it('shows two elements', () => {
    const element = shallow(<SetWeather { ...props } />);
    
    expect(element.find('.weatherFeed')).to.have.length(2);
  
  });
  
});