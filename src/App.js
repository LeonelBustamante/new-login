import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultCard from './components/DefaultCard/DefaultCard';

const App = () => {
  return (
    <div className="container">
      <DefaultCard
        imagen={require('./assets/img/img-card.jpg')}
        titulo={'TITULO 1'}
      />
    </div>
  );
};

export default App;
