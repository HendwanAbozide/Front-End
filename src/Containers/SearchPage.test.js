// import React from 'react';
// import { Provider } from 'react-redux';
// import { shallow } from 'enzyme';
import SearchPage from './SearchPage';

// import { act } from "react-dom/test-utils";

// import { render, unmountComponentAtNode } from "react-dom";

// let container;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });


// it('sets isLoading to true when loading', () => {
//   global.fetch = jest.fn().mockReturnValue(Promise.resolve({
//     ok: true,
//     json: () => Promise.resolve({'user': 'test'})
//   }));
//  expect(global.fetch).toBeCalledWith('http://localhost:5000/browse')
//   const c = shallow(<SearchPage />);
//   c.find("Card").prop('title')();
//   expect(c.instance().state.loaded).toEqual(true);
//   // await flushPromises();
//   expect(c.instance().state.isLoading).toEqual(false);
// });
// it('calls api for correct username', () => {
//   global.fetch = jest.fn().mockReturnValue(Promise.resolve({
//     ok: true,
//     json: () => Promise.resolve({'user': 'test'})
//   }));

//   // c.find('CardList').prop('list')();
 
// });



// // describe("User component", () => {
// // test("renders user data", async () => {
// //   const fake=[{ name: "John Doe" }, { name: "Kevin Mitnick" }];
// //   jest.spyOn(window, "fetch").mockImplementation(() => {
// //     const fetchResponse = {
// //       json: () => Promise.resolve(fake)
// //     };
// //     return Promise.resolve(fetchResponse);
// //   });
// //   // Use the asynchronous version of act to apply resolved promises
// //   await act(async () => {
// //     render(<SearchPage />, container);
// //   });
// //   const wrapper =shallow(<SearchPage/>)
// //   const text = wrapper.find('Card').title()
// //   expect(text).toEqual('Current count: 0')
// //   // expect(container.).toBe("John DoeKevin Mitnick")
// //   window.fetch.mockRestore();
// //   // remove the mock to ensure tests are completely isolated 
// // });
// // });


import React from 'react';
import CardList from '../Components/SearchCardlist';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '../Components/SearchCard';

configure({adapter: new Adapter()});

describe("<searchPage />", () => {
  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<SearchPage />);
  });

  it('searchPage', () => {
    wrapper.setState({
      types:[{name: "John Doe"}],
      clickid:"7",
      topcardname:'Pop',
      id:'2',
    }); 
    wrapper=wrapper.update();
    expect(wrapper.containsAnyMatchingElements([
    <h1>Your top genres</h1>,<Card title="Pop" idc="2"/>,<h1>Browse all</h1>,<CardList list="[{name: 'John Doe'}]"/>])).toEqual(true);
 
  });
});