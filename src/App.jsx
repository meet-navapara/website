import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AddWebsitePage from './pages/AddWebsitePage.jsx';
import EditWebsitePage from './pages/EditWebsitePage.jsx';
import FormPage from './pages/FormPage.jsx';
import AppNavbar from './components/layout/AppNavbar.jsx';
import PlaceholderContent from './components/common/PlaceholderContent';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppNavbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-website" element={<AddWebsitePage />} />
            <Route path="/edit-website/:id" element={<EditWebsitePage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/marketplace" element={<PlaceholderContent />} />
            <Route path="/my-orders" element={<PlaceholderContent />} />
            <Route path="/my-projects" element={<PlaceholderContent />} />
            <Route path="/received-orders" element={<PlaceholderContent />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
