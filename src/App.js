import { useState, useEffect } from "react";
import Nav from './components/Nav';
import Home from './components/Home';
import './App.css';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Competition from "./components/Competition";
import Terms from "./components/Terms";


const query = `
{
  vipCollectionCollection {
    items {
      vipTitle,
      vipFeatures,
      vipPricing
    }
  },
  vipDescriptionCollection {
    items {
      vipDescriptionTitle,
      content 
    }
  },
  tourDateCollection {
    items {
      date,
      city,
      venue,
      ticketLink,
      tixSoldOut,
      vipTicketLink,
      vipSoldOut
    }
  }
}`

function App() {
  const [vipCollection, setVipCollection] = useState(null);
  const [vipDescription, setVipDescription] = useState(null);
  const [tourDates, setTourDates] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/6d9xz55o7koc`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ltiRghT5tuxF0-eyW0RvZ7lXhJVLftCi6mgMOxDFDxw`,
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors}) => {
        if (errors) {
          console.error(errors);
        }

        setVipCollection(data.vipCollectionCollection.items);
        setVipDescription(data.vipDescriptionCollection.items[0]);
        setTourDates(data.tourDateCollection.items);        
      });
  }, []);

  if (!vipCollection || !vipDescription || !tourDates) {
    return "loading...";  
  }

  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route exact path='/' element={<Home vipCollection={vipCollection} vipDescription={vipDescription} tourDates={tourDates} />}/>
          <Route exact path='/competition' element={<Competition/>}/>
          <Route exact path='/terms-and-conditions' element={<Terms/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
