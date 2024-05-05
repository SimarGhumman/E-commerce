import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import ProducePage from './components/ProductPage';
import ProfilePage from './components/ProfilePage';
import SuccessPage from './components/SuccessPage';
import HistoryPage from './components/HistoryPage';
import SearchPage from './components/SearchPage';
import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/cart" element={<ProtectedRoute component={CartPage} />} />
                <Route path="/checkout" element={<ProtectedRoute component={CheckoutPage} />} />
                <Route path="/home" element={<ProtectedRoute component={HomePage} />} />
                <Route path="/history" element={<ProtectedRoute component={HistoryPage} />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/produce" element={<ProtectedRoute component={ProducePage} />} />
                <Route path="/profile" element={<ProtectedRoute component={ProfilePage} />} />
                <Route path="/ordercomplete" element={<ProtectedRoute component={SuccessPage} />} />
                <Route path="/search" element={<ProtectedRoute component={SearchPage} />} />
                <Route path="/" element={<Navigate replace to="/login" />} />
                <Route path="*" element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default App;
