import React from 'react';
import Homepage from './components/Homepage.component';
import AboutMe from './components/AboutMe.component';
import NavigationMenu from './components/NavigationMenu.component';
import NotFound from './components/NotFound.component';

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { TransitionGroup, Transition } from 'react-transition-group';

function App() {
  return (
    <BrowserRouter>
      <div className="container app">
        <Routes>
          <Route exact 
             path="/"
             element={<Homepage homeButton={<NavigationMenu />} />}
           />
          <Route exact 
             path="/about"
             element={<AboutMe homeButton={<NavigationMenu />} />}
           />
          <Route path="/*" element={<NotFound homeButton={<NavigationMenu />}/>}/>
         </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
