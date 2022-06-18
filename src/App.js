import { useState, useEffect } from "react";
import Nav from './components/Nav';
import Hero from './components/Hero';
import VIP from './components/VIP';
import Tour from './components/Tour';
import './App.css';
import Footer from './components/Footer';

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
      <Nav/>
      <Hero/>
      <VIP vipTiles={vipCollection} vipDescription={vipDescription}/>
      <Tour dates={tourDates}/>
      <Footer/>
    </div>
  );
}

export default App;
