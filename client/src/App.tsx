import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <h1>This is App file {process.env.NODE_ENV} {process.env.name}</h1>
      <img src={require('./assets/image/test.jpeg')} alt="test" />
    </>
  )
}
export default App;