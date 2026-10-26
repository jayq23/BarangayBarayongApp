import {
  Bell,
  ChevronRight,
  FileCheck2,
  FilePlus2,
  LayoutDashboard,
  LogOut,
  MapPin,
  Moon,
  Sun,
  UserRound,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/userDashboard.css";
import logo from "../images/logo.png";

// TODO: replace with the logged-in user's data once the backend is connected
const currentUser = {
  fullName: "Juan Dela Cruz",
  address: "Barangay Barayong",
};

// Function to get a greeting based on the current time of day
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

function UserDashboard() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const firstName = currentUser.fullName.split(" ")[0];

  return (
    <div className={`user-dashboard ${theme === "dark" ? "dark" : ""}`}>
      <aside className="user-dashboard-sidebar">
        <div className="user-dashboard-brand">
          <div className="user-dashboard-logo">
            <img
              src={logo}
              alt="Barangay Barayong logo"
              className="user-dashboard-logo-img"
            />
          </div>
          <div>
            <strong>Barangay Barayong</strong>
            <span>Resident portal</span>
          </div>
        </div>

        <nav className="user-dashboard-nav" aria-label="Resident navigation">
          <a className="user-dashboard-nav-item active" href="/dashboard">
            <LayoutDashboard size={18} />
            Overview
          </a>
          <a className="user-dashboard-nav-item" href="/requests">
            <FileCheck2 size={18} />
            My requests
          </a>
          <a className="user-dashboard-nav-item" href="/profile">
            <UserRound size={18} />
            My profile
          </a>
        </nav>

        <button
          className="user-dashboard-logout"
          type="button"
          onClick={() => navigate("/login")}
        >
          <LogOut size={18} />
          Sign out
        </button>
      </aside>

      <main className="user-dashboard-main" id="overview">
        <header className="user-dashboard-header">
          <div>
            <p className="user-dashboard-eyebrow">Resident portal</p>
            <h1>
              {getGreeting()}, {firstName}!
            </h1>
            <p className="user-dashboard-muted">
              Manage your barangay services and requests in one place.
            </p>
          </div>
          <div className="user-dashboard-header-actions">
            <button
              className="user-dashboard-icon-button"
              type="button"
              onClick={() =>
                setTheme((current) => (current === "light" ? "dark" : "light"))
              }
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="user-dashboard-icon-button"
              type="button"
              aria-label="Notifications"
            >
              <Bell size={20} />
            </button>
          </div>
        </header>

        <section className="user-dashboard-actions" aria-label="Quick actions">
          <button
            className="user-dashboard-action primary"
            type="button"
            onClick={() => navigate("/requests")}
          >
            <FilePlus2 size={20} />
            <span>
              <strong>Request a document</strong>
              <small>Apply for a barangay document</small>
            </span>
            <ChevronRight size={18} />
          </button>
          <a className="user-dashboard-action" href="/requests">
            <FileCheck2 size={20} />
            <span>
              <strong>Track my requests</strong>
              <small>Check your application status</small>
            </span>
            <ChevronRight size={18} />
          </a>
        </section>

        <section className="user-dashboard-grid">
          <article
            className="user-dashboard-panel user-dashboard-requests"
            id="requests"
          >
            <div className="user-dashboard-panel-heading">
              <div>
                <h2>My recent requests</h2>
                <p className="user-dashboard-muted">
                  Track the status of your applications.
                </p>
              </div>
              <a href="/requests">View all</a>
            </div>
            <div className="user-dashboard-request">
              <div>
                <strong>Barangay Clearance</strong>
                <span>Request #BRY-2026-00124</span>
              </div>
              <div className="user-dashboard-request-meta">
                <span className="user-dashboard-status processing">
                  Processing
                </span>
                <small>October 20, 2026</small>
              </div>
            </div>
            <div className="user-dashboard-request">
              <div>
                <strong>Certificate of Residency</strong>
                <span>Request #BRY-2026-00098</span>
              </div>
              <div className="user-dashboard-request-meta">
                <span className="user-dashboard-status approved">Approved</span>
                <small>October 15, 2026</small>
              </div>
            </div>
          </article>

          <article
            className="user-dashboard-panel user-dashboard-profile"
            id="profile"
          >
            <div className="user-dashboard-panel-heading">
              <div>
                <h2>My profile</h2>
                <p className="user-dashboard-muted">
                  Your registered information.
                </p>
              </div>
              <a href="/profile">Edit</a>
            </div>
            <div className="user-dashboard-profile-row">
              <UserRound size={18} />
              <div>
                <span>Full name</span>
                <strong>{currentUser.fullName}</strong>
              </div>
            </div>
            <div className="user-dashboard-profile-row">
              <MapPin size={18} />
              <div>
                <span>Address</span>
                <strong>{currentUser.address}</strong>
              </div>
            </div>
          </article>
        </section>

        <section className="user-dashboard-panel user-dashboard-announcements">
          <div className="user-dashboard-panel-heading">
            <div>
              <h2>Barangay announcements</h2>
              <p className="user-dashboard-muted">
                Stay updated with community news.
              </p>
            </div>
          </div>
          <div className="user-dashboard-announcement-list">
            <div className="user-dashboard-announcement">
              <strong>Community clean-up drive</strong>
              <p>Join us on October 26 at 7:00 AM.</p>
              <small>Posted today</small>
            </div>
            <div className="user-dashboard-announcement">
              <strong>Office schedule update</strong>
              <p>Public service hours are 8:00 AM to 5:00 PM.</p>
              <small>Posted yesterday</small>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default UserDashboard;