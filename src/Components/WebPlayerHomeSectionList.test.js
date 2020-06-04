import React from 'react';
import { shallow, mount } from 'enzyme';
import WebPlayerHomeSectionList from './WebPlayerHomeSectionList';

const SectionTypes = [{
    key: 1,
    title: 'Top hits',
    type: 'no description',

  }]

it('WebPlayerHomeSectionList renders without crashing', () => {
  expect(shallow(<WebPlayerHomeSectionList SectionTypes={SectionTypes} />)).toMatchSnapshot();
});