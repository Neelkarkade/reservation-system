import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SearchPage from "./pages/SearchPage";
import BookingPage from "./pages/BookingPage";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ProfilePage from "./pages/ProfilePage";
import CancelBookingPage from "./pages/CancelBookingPage";
import RouteListPage from "./pages/RouteListPage";
import NotificationsPage from "./pages/NotificationsPage";
import FeedbackPage from "./pages/FeedbackPage";
import ContactSupportPage from "./pages/ContactSupportPage";
import PaymentPage from "./pages/PaymentPage";
import SettingsPage from "./pages/SettingsPage";
import HistoryPage from "./pages/HistoryPage";
import FAQPage from "./pages/FAQPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/routes" element={<RouteListPage />} />
        <Route path="/faq" element={<FAQPage />} />

        {/* Protected routes (require JWT token) */}
        <Route path="/booking" element={<ProtectedRoute><BookingPage /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        <Route path="/cancel" element={<ProtectedRoute><CancelBookingPage /></ProtectedRoute>} />
        <Route path="/notifications" element={<ProtectedRoute><NotificationsPage /></ProtectedRoute>} />
        <Route path="/feedback" element={<ProtectedRoute><FeedbackPage /></ProtectedRoute>} />
        <Route path="/support" element={<ProtectedRoute><ContactSupportPage /></ProtectedRoute>} />
        <Route path="/payment" element={<ProtectedRoute><PaymentPage /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
        <Route path="/history" element={<ProtectedRoute><HistoryPage /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
