import { useEffect, useState } from "react";
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes";
import { getRoutes } from "./router/routes/index";

function App() {
  // Store the routes in state, so you can change them later (e.g., for private routes)
    const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
    // console.log(allRoutes)

      useEffect(() => {
        const routes = getRoutes()
        setAllRoutes((currentRoutes) => [...currentRoutes, routes]);
    }, []); 
      
// Pass the route data to the Router component to be rendered
    return <Router allRoutes={allRoutes} /> 
}

export default App;