import Playlist from './Playlist';
import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe("<Playlist />", () => {
  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<Playlist />);
  });

  it('Card', () => {
    wrapper.setProps({
        title:"Jim",
        bg:'Jim',
        source:"https://travel.home.sndimg.com/content/dam/images/travel/stock/2017/3/24/0/Shutterstock_393700531_BeachPlaylistGraphic.jpg.rend.hgtvcom.616.462.suffix/1491594774042.jpeg",
        idc:3
    });
    expect(wrapper.containsAnyMatchingElements([<div id="Jim"/>,<h1>Jim</h1>,<img id="pod"/>])).toEqual(true);
  });
});