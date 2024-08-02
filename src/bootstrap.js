import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';

const App = () => (
  <div>
    <h1>CompoKit</h1>
    <Button label="Click Me" />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
