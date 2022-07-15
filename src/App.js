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
import Popup from "./components/Popup";


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
  },
  competitionCollection {
    items {
      url,
      text,
      grandPrizeTitle,
      grandPrizeText,
      prizes,
      secondaryPrizeTitle,
      secondaryText,
      secondaryPrizes,
    }
  },
  termsCollection {
    items {
    	legalCopy
    }
  },
  showDescriptionCollection {
    items {
      text,
      onSaleInfo,
      youtubeUrl
    }
  },
  popupCollection {
    items {
      title,
      description,
      buttonText
    }
  }
}`

function App() {
  const [vipCollection, setVipCollection] = useState(null);
  const [vipDescription, setVipDescription] = useState(null);
  const [tourDates, setTourDates] = useState(null);
  const [competition, setCompetition] = useState(null);
  const [terms, setTerms] = useState(null);
  const [showDescription, setShowDescription] = useState(null);
  const [popupContent, setPopupContent] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_CDI}`,
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
        setCompetition(data.competitionCollection.items[0]);   
        setTerms(data.termsCollection.items);
        setShowDescription(data.showDescriptionCollection.items[0]);
        if (data.popupCollection.items.length !== 0) {
          setPopupContent(data.popupCollection.items[0]);
        }
      });
  }, []);

  if (!vipCollection || !vipDescription || !tourDates || !competition || !terms || !showDescription) {
    return "loading...";  
  }

  return (
    <div className="App">
      <Router>
        <Popup popup={popupContent}/>
        <Nav/>
        <Routes>
          <Route exact path='/' element={<Home vipCollection={vipCollection} vipDescription={vipDescription} tourDates={tourDates} showDescription={showDescription}/>}/>
          <Route exact path='/competition' element={<Competition competition={competition}/>}/>
          <Route exact path='/terms-and-conditions' element={<Terms terms={terms}/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
