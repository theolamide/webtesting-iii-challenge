// Test away
import React from 'react';
import {render} from '@testing-library/react';
import Dashboard from './Dashboard';

test('Mocking for smile', () => {
    const mock = jest.fn();
    mock('smile');
    expect(mock).toHaveBeenCalled();
})


test('Dashboard renders correctly', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
})