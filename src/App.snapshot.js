import React from 'react';
import App, { Counter } from './App';
import renderer from 'react-test-renderer';


describe('App snapshot', () => {
   test('renders', () => {
       const component = renderer.create(<App/>);

       let tree = component.toJSON();
       expect(tree).toMatchSnapshot();
   });

   test('renders', () => {
       const component = renderer.create(<Counter counter={2}/>);

       let tree = component.toJSON();
       expect(tree).toMatchSnapshot();
   })
});