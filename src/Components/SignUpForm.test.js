import React from 'react';
import { shallow, mount } from 'enzyme';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import SignUpForm from './SignUpForm';

describe('SignUP Component', () => {
 
    // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
      expect(shallow(<SignUpForm />).find('form').exists()).toBe(true)
    })
   });

// describe('SignUp input', () => {
  
//     it('should respond to change event and change the state of the Login Component', () => {
//         const component = shallow(<SignUpForm  />);
//         const input = component.find('input').at(0);
//         input.instance().value = 'blah@gmail.com';
//         input.simulate('change');
//      expect(component.state().email).toEqual('blah@gmail.com');
//     })
//    });

//    it('should respond to change event and change the state of the SignUp Component', () => {
//         const component = mount(<SignUpForm  />);
//         const input = component.find('input').at(1);
//         input.instance().value = 'blah@gmail.com';
//         input.simulate('change');
//     expect(component.state().confirmEmail).toEqual('blah@gmail.com');
//     })

//    describe('Password input', () => {
    
//     it('should respond to change event and change the state of the SignUp Component', () => {
//         const component = shallow(<SignUpForm />);
//         const input = component.find('input').at(2);
//         input.instance().value = 'cats';
//         input.simulate('change');
//      expect(component.state().password).toEqual('cats');
//     })

    // it('should respond to change event and change the state of the SignUp Component', () => {
    //     const component = shallow(<SignUpForm  />);
    //     const input = component.find('input').at(3);
    //     input.instance().value = 'blah@gmail.com';
    //     input.simulate('change');
    //  expect(component.state().nickname).toEqual('blah@gmail.com');
    // })

// });

    describe('Button', () => {

        let wrapper;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            wrapper = shallow(<SignUpForm />);
        });
    
        it('Should Render a button', () => {
            const button = wrapper.find('button');
            expect(button.length).toBe(1);
        });

        it('Should have text',()=>{
            //Button should have matching text
            expect(wrapper.find('button').text()).toEqual(' SIGN UP ');
        });
    });
