
import './App.css';
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

function App() {
  return (
    <Router>
      <Container>
        <Header/>
        <Switch>

          <Route path="/TimeShare">
            <TimeSharePage/>
          </Route>

          <Route path="/RealEstate">
            <FinishedRealEstatePage/>
          </Route>

          <Route path="/RealEstate">
            <RealEstateUnderConstructionPage/>
          </Route>

          <Route path="/Contacts">
            <ContactsPage/>
          </Route>

          <Route path="/FAQ">
            <FAQPage/>
          </Route>

          <Route path="/Authorisation">
            <AuthorisationPage/>
          </Route>

          <Route path="/">
            <HomePage/>
          </Route>

        </Switch>

        <Footer/>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div``
