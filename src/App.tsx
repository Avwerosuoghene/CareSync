// App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './App-routes';
import Header from './components/header/header';



const App: React.FC = () => {

 

  return (

    <Router>
      <main className="app">
       <Header/>
        <section>
          <AppRoutes />
        </section>
      </main>
    </Router>
  );
};

export default App;
