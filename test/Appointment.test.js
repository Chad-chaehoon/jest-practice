import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from '../src/Appointment';

describe('Appointment', () => {
  let container;
  let customer;

  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = component => ReactDOM.render(component, container);

  it('renders the customer first name', () => {
    const customer = { firstName: 'Ashely' };
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch('Ashely');
  });
  it('renders another customer first name', () => {
    const customer = { firstName: 'Jordan' };
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch('Jordan');
  });
});
