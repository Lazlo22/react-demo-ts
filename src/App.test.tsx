import React from 'react';
import {shallow} from "enzyme";

import App from './App';

describe('App component', () => {
    test('renders App component without a crash', () => {
        const component = shallow(<App/>);

        expect(component).toMatchSnapshot();
    });
});
