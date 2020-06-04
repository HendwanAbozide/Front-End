
import React from 'react';
import { shallow } from 'enzyme';
import MoodCardList from './MoodCardList';
const HomeCards = [{
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXbP65Mm3fFC5EE80LIRNsvWd-bStt_HftBS015aagdmwqygG6&usqp=CAU',
    title: 'Bret',
    text: 'Sincere@april.biz'
  }]

it('renders without crashing', () => {
  expect(shallow(<MoodCardList Mood={HomeCards}/>)).toMatchSnapshot();
});