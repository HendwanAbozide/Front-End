import React from 'react';
import { shallow } from 'enzyme';
import CardList from '../Components/SearchCardlist';
const cards = [{
    name: 'Leanne Graham',
  }]

it('renders without crashing', () => {
  expect(shallow(<CardList list={cards}/>)).toMatchSnapshot();
});