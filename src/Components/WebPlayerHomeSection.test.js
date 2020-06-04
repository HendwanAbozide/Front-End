import React from 'react';
import { shallow, mount } from 'enzyme';
import WebPlayerHomeSection from './WebPlayerHomeSection';

const Section = [{
    title: 'Top hits',
    des: 'no description',
    type:'Mood'

  }]

it('WebPlayerHomeSection renders without crashing', () => {
  expect(shallow(<WebPlayerHomeSection title={Section.title} des={Section.des} type={Section.type} />)).toMatchSnapshot();
});