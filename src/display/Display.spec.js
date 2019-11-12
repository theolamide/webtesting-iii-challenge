// Test away!
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import 'jest-dom/extend-expect'
import Display from './Display';

test('Display renders correctly', ()=>{
    expect(render(<Display />)).toMatchSnapshot();
})

test('locked and closed test', ()=>{
    const {getByText} = render (<Display locked={true} closed={true} />);
    getByText(/^closed$/i);
    getByText(/^locked$/i);
});

test('unlocked and open test', ()=>{
    const {getByText} = render (<Display locked={false} closed={false} />);
    getByText(/^open$/i);
    getByText(/^unlocked$/i);
});

