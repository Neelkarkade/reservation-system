import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav style={{
      padding: "15px",
      background: "linear-gradient(to right, #4facfe, #00f2fe)"
    }}>
      {[
        { path: "/login", label: "Login" },
        { path: "/register", label: "Register" },
        { path: "/search", label: "Search" },
        { path: "/booking", label: "Booking" },
        { path: "/dashboard", label: "User Dashboard" },
        { path: "/admin", label: "Admin Dashboard" },
        { path: "/profile", label: "Profile" },
        { path: "/cancel", label: "Cancel Booking" },
        { path: "/routes", label: "Routes" },
        { path: "/notifications", label: "Notifications" },
        { path: "/feedback", label: "Feedback" },
        { path: "/support", label: "Support" },
        { path: "/payment", label: "Payment" },
        { path: "/settings", label: "Settings" },
        { path: "/history", label: "History" },
        { path: "/faq", label: "FAQ" }
      ].map(link => (
        <Link
          key={link.path}
          to={link.path}
          style={{
            marginRight: "15px",
            color: "white",
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
