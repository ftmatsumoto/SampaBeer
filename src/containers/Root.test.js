import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './Root';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<div></div>, div);
  ReactDOM.unmountComponentAtNode(div);
});
