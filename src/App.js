import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import ProducePage from './components/ProductPage';
import ProfilePage from './components/ProfilePage';
import SuccessPage from './components/SuccessPage';
import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute

function App() {
    return (
        <Router>
            <AuthProvider>
                <TrimTrailingSlash>
                    <Routes>
                        <Route path="/cart" element={<ProtectedRoute component={CartPage} />} />
                        <Route path="/checkout" element={<ProtectedRoute component={CheckoutPage} />} />
                        <Route path="/home" element={<ProtectedRoute component={HomePage} />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/produce" element={<ProtectedRoute component={ProducePage} />} />
                        <Route path="/profile" element={<ProtectedRoute component={ProfilePage} />} />
                        <Route path="/ordercomplete" element={<ProtectedRoute component={SuccessPage} />} />
                        <Route path="/" element={<Navigate replace to="/login" />} />
                        <Route path="*" element={<LoginPage />} />
                    </Routes>
                </TrimTrailingSlash>
            </AuthProvider>
        </Router>
    );
}

// A component to handle trailing slashes
function TrimTrailingSlash({ children }) {
    const location = useLocation();

    useEffect(() => {
        // Check if the pathname ends with a slash and if it's more than just the root '/'
        if (location.pathname !== '/' && location.pathname.endsWith('/')) {
            const newPath = location.pathname.slice(0, -1);
            // Replace the current entry in the history stack
            window.history.replaceState({}, '', newPath);
        }
    }, [location]);

    return children;
}

export default App;
