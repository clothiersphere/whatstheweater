import WeatherFeed from './WeatherFeed';
import { shallow } from 'enzyme';

describe ('WeatherFeed', () => {
  const props = {
    weatherFeed: [{ high: '89', low: '22'}, {high:'95', low:'22'}],
  };
  it('shows two elements', () => {
    const element = shallow(<WeatherFeed { ...props } />);
    expect(element.find('.weatherFeed')).to.have.length(2);
  });
});