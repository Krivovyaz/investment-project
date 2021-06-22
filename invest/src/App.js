
import './App.css';
import { useState } from 'react'
import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TimeSharePage from './components.js/TimeSharePage';
import FinishedRealEstatePage from './components.js/FinishedRealEstatePage';
import RealEstateUnderConstructionPage from './components.js/RealEstateUnderConstructionPage';
import ContactsPage from './components.js/ContactsPage';
import FAQPage from './components.js/FAQPage';
import AuthorisationPage from './components.js/AuthorisationPage';
import HomePage from './components.js/HomePage';
import Header from './components.js/additionalComponents/Header';
import Footer from './components.js/additionalComponents/Footer';
import Error404Page from './components.js/Error404Page';
import ProjectCardPage from './components.js/ProjectCardPage';

function App() {

  const [showFooter, setShowFooter] = useState(true);
  return (
    <Router>
      <Container>
        <Header/>
        <Switch>

          <Route path="/TimeShare">
            <TimeSharePage setShowFooter={setShowFooter}/>
          </Route>

          <Route path="/FinishedRealEstate">
            <FinishedRealEstatePage setShowFooter={setShowFooter}/>
          </Route>

          <Route path="/RealEstate">
            <RealEstateUnderConstructionPage setShowFooter={setShowFooter}/>
          </Route>

          <Route path="/Contacts">
            <ContactsPage setShowFooter={setShowFooter}/>
          </Route>

          <Route path="/FAQ">
            <FAQPage setShowFooter={setShowFooter}/>
          </Route>

          <Route path="/Authorisation">
            <AuthorisationPage setShowFooter={setShowFooter}/>
          </Route>
          
          <Route path="/404">
            <Error404Page setShowFooter={setShowFooter}/>
          </Route>

          <Route path="/ProjectPage/:projectId">
            <ProjectCardPage/>
          </Route>

          <Route path="/">
            <HomePage setShowFooter={setShowFooter}/>
          </Route>

        </Switch>
      </Container>
      {showFooter && <Footer showFooter={showFooter}/>}
    </Router>
  );
}

export default App;

const Container = styled.div``
