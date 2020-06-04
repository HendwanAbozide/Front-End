
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import {WebHomeCard }from './WebHomeCard';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe("WebHomeCard",()=>{
  let wrapper;
    beforeEach(()=> {
      wrapper=shallow(<WebHomeCard/>);
    });
   
      it('renders without crashing', () => {
        wrapper.setProps({
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXbP65Mm3fFC5EE80LIRNsvWd-bStt_HftBS015aagdmwqygG6&usqp=CAU',
          title:'Bret',
          text:'Bret',
        });
          expect(wrapper.containsAnyMatchingElements([<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXbP65Mm3fFC5EE80LIRNsvWd-bStt_HftBS015aagdmwqygG6&usqp=CAU'/>,<p title="Bret"/>, <p text="Bret"/>])).toEqual(true);
        // wrapper=mount(<WebHomeCard/>);
        // expect(toJson(wrapper)).toMatchSnapshot();
      });


});


