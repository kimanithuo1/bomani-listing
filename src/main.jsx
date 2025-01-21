import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BackToTopButton from './components/BackToTopButton';
import SearchResults from './pages/SearchResults';
import ListingDetails from './pages/ListingCard';
import HostDashboard from './pages/HostDashboard';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/listing/:id" element={<ListingDetails />} />
          <Route path="/dashboard" element={<HostDashboard />} />
        </Routes>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
