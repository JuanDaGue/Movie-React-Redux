import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider
import Layout from './components/Layout';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Categories from './pages/Categories';
import Favorites from './pages/Favorites';
import Users from './pages/Users';

const App: React.FC = () => {
  return (
    <ThemeProvider> {/* Wrap your app with ThemeProvider */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout title="Popular Movies">
                <Home />
              </Layout>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <Layout title="Movie Details">
                <MovieDetails />
              </Layout>
            }
          />
          <Route
            path="/categories"
            element={
              <Layout title="Categories">
                <Categories />
              </Layout>
            }
          />
          <Route
            path="/favorites"
            element={
              <Layout title="Favorites">
                <Favorites />
              </Layout>
            }
          />
          <Route
            path="/users"
            element={
              <Layout title="Users">
                <Users />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
