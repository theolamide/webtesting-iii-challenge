// Test away!
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import 'jest-dom/extend-expect'
import Controls from './Controls';


test('Controls renders correctly', ()=>{
    expect(render(<Controls />)).toMatchSnapshot();
})


test('', () =>{
    const {getByText} = render (<Controls locked={true} closed={true}
        toggleLocked={toggleLockedMock} toggleClosed={toggleClosedMock}/>)
       
        const unlockButton = getByText(/^unlock gate$/i);
        const openGateButton = getByText(/^open gate$/i);

        fireEvent.click(unlockButton);
        fireEvent.click(openGateButton)
})

