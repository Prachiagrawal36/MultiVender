import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css'
import { BrowserRouter } from 'react-router-dom';
const App = lazy(() => import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* Display this fallback while App is loading */}
  <Suspense fallback={<div>Loading App...</div>}>
<App />
 </Suspense>
 </BrowserRouter>
);
