import { ArrowLeft, Check, MapPin, Mail, Phone, UserRound } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/userDashboard.css";

function UserProfile() {
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaved(true);
  };

  return (
    <div className="user-dashboard">
      <main className="user-dashboard-main user-dashboard-page">
        <button
          className="user-dashboard-back"
          type="button"
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeft size={18} />
          Back to dashboard
        </button>

        <header className="user-dashboard-header">
          <div>
            <p className="user-dashboard-eyebrow">Resident portal</p>
            <h1>My profile</h1>
            <p className="user-dashboard-muted">
              Keep your contact and address information up to date.
            </p>
          </div>
        </header>

        <form className="user-dashboard-panel user-dashboard-form" onSubmit={handleSubmit}>
          <div className="user-dashboard-panel-heading">
            <div>
              <h2>Personal information</h2>
              <p className="user-dashboard-muted">This information is used for your document requests.</p>
            </div>
            {saved && (
              <span className="user-dashboard-save-message">
                <Check size={16} /> Saved
              </span>
            )}
          </div>

          <div className="user-dashboard-form-grid">
            <label>
              Full name
              <span className="user-dashboard-input-with-icon">
                <UserRound size={17} />
                <input defaultValue="Juan Dela Cruz" required />
              </span>
            </label>
            <label>
              Email address
              <span className="user-dashboard-input-with-icon">
                <Mail size={17} />
                <input type="email" defaultValue="juan.delacruz@example.com" required />
              </span>
            </label>
            <label>
              Mobile number
              <span className="user-dashboard-input-with-icon">
                <Phone size={17} />
                <input type="tel" defaultValue="09171234567" required />
              </span>
            </label>
            <label>
              Address
              <span className="user-dashboard-input-with-icon">
                <MapPin size={17} />
                <input defaultValue="Barangay Barayong, Ligao City, Albay" required />
              </span>
            </label>
          </div>

          <div className="user-dashboard-form-actions">
            <button className="user-dashboard-secondary-button" type="button" onClick={() => navigate("/dashboard")}>
              Cancel
            </button>
            <button className="user-dashboard-primary-button" type="submit">
              Save changes
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default UserProfile;