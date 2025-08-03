import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div>
      <CohortDetails title='React Training' instructor='John Smith' status='ongoing' />
      <CohortDetails title='NodeJS Bootcamp' instructor='Jane Doe' status='completed' />
    </div>
  );
}

export default App;
