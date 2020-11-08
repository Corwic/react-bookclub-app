import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import {
  BookClubPage,
  FormPage,
  HomePage,
  UserProfilePage,
  CounterButtonPage,
  GRSearchPage
} from './pages';
import { UserDataLoader } from './UserDataLoader';
import { NavBar } from './NavBar';
import { DataProvider } from './components/BookClubContext';
import './App.css';


function App() {
  return (
    <DataProvider>
      <Router>
        <NavBar />
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/bookclub">
              <BookClubPage />
            </Route>
            <Route path="/gr-search">
              <GRSearchPage />
            </Route>
            <Route path="/counter">
              <CounterButtonPage />
            </Route>
            <Route path="/form">
              <FormPage />
            </Route>
            <Route path="/user">
              <UserDataLoader>
                <UserProfilePage />
              </UserDataLoader>
            </Route>
          </Switch>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
