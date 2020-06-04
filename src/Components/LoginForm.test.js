import React from 'react';
import { shallow, mount } from 'enzyme';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import LoginForm from './LoginForm';

describe('Login Component', () => {
 
    // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
      expect(shallow(<LoginForm />).find('form').exists()).toBe(true)
    })
   });

describe('Login input', () => {
  
    it('should respond to change event and change the state of the Login Component', () => {
        const component = mount(<LoginForm />);
        const input = component.find('input').at(0);
        input.instance().value = 'blah@gmail.com';
        input.simulate('change');
     expect(component.state().email).toEqual('blah@gmail.com');
    })
   });
   
   describe('Password input', () => {
    
    it('should respond to change event and change the state of the Login Component', () => {
        const component = mount(<LoginForm />);
        const input = component.find('input').at(1);
        input.instance().value = 'cats';
        input.simulate('change');
     expect(component.state().password).toEqual('cats');
    })


   

    // it('should have a btn component', ()=> {
    //     const wrapper =mount(<LoginForm />);
    //     //There should be only one button
    //     expect(wrapper.find('button')).toHaveLength(1);

    //     //Button should be of type button
    //     expect(wrapper.find('button')
    //     .type())
    //     .toBe('submit');

    //     //Button should have matching text
    //     expect(wrapper.find('button').text()).toEqual('LOG IN');
    // });
});

describe('Button', () => {

    let wrapper;
    let mockFunc;
    beforeEach(() => {
        mockFunc = jest.fn();
        wrapper = mount(<LoginForm />);
    });

    it('Should Render a button', () => {
        const button = wrapper.find('button');
        expect(button.length).toBe(1);
    });
    it('Should have text',()=>{
        //Button should have matching text
        expect(wrapper.find('button').text()).toEqual('LOG IN');
    });

    // it('Should emit callback on click event', () => {
    //     const button = wrapper.find('form');
    //     button.value={
    //                     values: {
    //                         email: 'blah@gmail.com', 
    //                         password: 'test1'
    //                     }
    //                 }
    //     button.simulate('submit');
    //     const callback = mockFunc.mock.calls.length;
    //     expect(mockFunc).toHaveBeenLastCalledWith({
    //         email: 'blah@gmail.com', 
    //         password: 'test1'
    //       });
    // });


});
// describe('fetch', () => {

// it('success create', async () => {
//     const wrapper = mount(<LoginForm />);
//     // jest.setTimeout(300000);
//     global.fetch = jest.fn().mockImplementation(() => Promise.resolve({json: () => Promise.resolve(
//         {id: 1, email: 'blah@gmail.com', password: 'test1'}        
//     )}));
    
//     // set the inputs
//     const instance = wrapper.find('form')
//     const changeState = new Promise((resolve) => {
//         instance.value={
//             values: {
//                 email: 'blah@gmail.com', 
//                 password: 'test1'
//             }
//         }, () => resolve()
//     });
//     await changeState;
//     const form = wrapper.find('form');
//     form.simulate('submit');
//     jest.setTimeout(30000)

// });
// });
// let container;

// beforeEach(() => {
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// describe("User component", () => {
//     test("it shows a list of users", async () => {
//       const fakeResponse = [{ email: "blah@gmail.com" , password: "test12345" , LoggedIn:"true"}];
//       const wrapper = mount(<LoginForm />);
  
//       jest.spyOn(window, "fetch").mockImplementation(() => {
//         const fetchResponse = {
//           json: () => Promise.resolve(fakeResponse)
//         };
//         return Promise.resolve(fetchResponse);
//       });
  
//       await act(async () => {
//         render(<LoginForm />, container);
//         const form = wrapper.find('form');
//         form.simulate('submit');
//       });
     
  
//       expect(container.textContent).toBe("blah@gmail.com test123456789");
  
//       window.fetch.mockRestore();
//     });
//   });

//   test('calls onSubmit with the username and password when submitted',() => {
//     const handleSubmit = jest.fn()
//     const container = document.createElement('div')
//     const form = container.querySelector('form')
//     const {username, password} = container.querySelector('form').element 
//     username.value = 'Kenny'
//     passwords.value = 'pineapples'
    
//     form.dispatchEvent(new window.event('submit'))
//       expect({handleSubmit}).toHaveBeenCalledTimes(1)
//       exopect({handleSubmit}).toHaveBeenCalledWith({
//         username: username.value,
//         password: password.value, 
//       })
//   ReactDOM.render(<LoginForm />, container)
//   })