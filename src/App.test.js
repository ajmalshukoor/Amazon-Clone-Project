import React from "react";
import Home from "./Home";
import {shallow, mount} from "enzyme";
import Header from "./Header";
import Login from "./Login";
import CheckoutProduct from "./CheckoutProduct";
import {useStateValue} from "./StateProvider";


describe('Login', ()=>{
    const wrapper = shallow(<Login/>)
    it('Login component check', ()=> {
        shallow(<Login/>)
    })
    it('Login input fields check', ()=> {
        expect(wrapper.prop('input')).toEqual({
            value:'',
        })
    })    

})