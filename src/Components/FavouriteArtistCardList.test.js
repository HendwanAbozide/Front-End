import React from 'react';
import { shallow, mount } from 'enzyme';
import FavouriteArtistCardList from './FavouriteArtistCardList';

const favouriteArtistCardList = [{
    key:2,
    id:2,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXbP65Mm3fFC5EE80LIRNsvWd-bStt_HftBS015aagdmwqygG6&usqp=CAU',
    name: 'Top hits'

  }]

it('FavouriteArtistCardList renders without crashing', () => {
  expect(shallow(<FavouriteArtistCardList list={favouriteArtistCardList} />)).toMatchSnapshot();
});