import PlaylistCardList from './PlaylistCardList';
import React from 'react';
import { shallow } from 'enzyme';


const playlistcardlist = [{
    name: 'Top hits',
    description: 'no description',

  }]

const songslist = [{
    artistL: 'Amr Diab',
    songnameL: 'lely nehary',
  }]


it('renders without crashing', () => {
  expect(shallow(<PlaylistCardList list={playlistcardlist} list2={songslist}/>)).toMatchSnapshot();
});