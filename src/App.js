
import Navbar from "./Componet/Navbar"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Sectorlist from "./Componet/Sectorlist"
import Topandloss from "./Componet/Topandloss"
import Weekly from "./Componet/Weekly"
import Largedel from "./Componet/Largedel"
import Mostactive from "./Componet/Mostactive"
import News from "./Componet/Newscommbo/News"
import Stocks from "./Componet/Stock/Stocks"
import Login from "./Componet/Logincomponete/Login"
import Signup from "./Componet/Logincomponete/Signup"
import Speeddial from "./Componet/Speeddial"
import Cyptonews from "./Componet/Newscommbo/Cyptonews"
import Forexnews from "./Componet/Newscommbo/Forexnews"
import Letestnews from "./Componet/Newscommbo/Latestnews"
import Avarege from "./Componet/Dropdown/Avarege"
import Pointing from "./Componet/Dropdown/Pointing"
import Home from "./Componet/Homecomponet/Home"
import Footer from "./Componet/Footer"
import Contact from "./Componet/Contact/Contact"

function App() {
  return (
   <>
   <Router>
 <Navbar/>
 <Switch>
   <Route path="/livemarket" exact>
     <Sectorlist/>
   </Route>
   <Route path="/gainerandlower" exact>
     <Topandloss/>
   </Route>
   <Route path="/weeklydata" exact>
     <Weekly/>
   </Route>
   <Route path="/largedeal" exact>
     <Largedel/>
   </Route>
   <Route path="/mostactive" exact>
     <Mostactive/>
   </Route>
   <Route path="/news" exact>
     <News/>
   </Route>
   <Route path="/services" exact>
     <Stocks/>
   </Route>
   <Route path="/login" exact>
     <Login />
   </Route>
   <Route path="/signup" exact>
     <Signup />
   </Route>
   <Route path="/news/latestnews" exact>
     <Letestnews />
   </Route>
   <Route path="/news/forexnews" exact>
     <Forexnews/>
   </Route>
   <Route path="/news/cyptonews" exact>
     <Cyptonews />
   </Route>
   <Route path="/movingaverege" exact>
     <Avarege />
   </Route>
   <Route path="/pivot" exact>
     <Pointing />
   </Route>
   <Route path="/contact" exact>
     <Contact />
   </Route>
   <Route path="/" exact>
     <Home />
   </Route>
 </Switch>
 <Speeddial/>
 <Footer/>
 </Router>
   </>
  );
}

export default App;
