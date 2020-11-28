import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import {
  BookClubPage,
  ReadersPage,
  ReadBooksPage,
} from './pages';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { DataProvider } from './components/BookClubContext';
import './App.css';

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <div className="bookclub">
            <Header />
            <Navigation />
            <Switch>
              <Route path="/" exact>
                <BookClubPage />
              </Route>
              <Route path="/readers">
                <ReadersPage />
              </Route>
              <Route path="/readbooks">
                <ReadBooksPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
