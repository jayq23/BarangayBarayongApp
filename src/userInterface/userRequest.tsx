import { ArrowLeft, FileText, UploadCloud } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/userDashboard.css";

function UserRequest() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="user-dashboard">
        <main className="user-dashboard-main user-dashboard-page">
          <section className="user-dashboard-panel user-dashboard-success">
            <FileText size={42} />
            <h1>Request submitted</h1>
            <p>
              Your request has been recorded. You can track its progress from
              the requests page.
            </p>
            <button className="user-dashboard-primary-button" type="button" onClick={() => navigate("/requests")}>
              View my requests
            </button>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="user-dashboard">
      <main className="user-dashboard-main user-dashboard-page">
        <button className="user-dashboard-back" type="button" onClick={() => navigate("/dashboard")}>
          <ArrowLeft size={18} />
          Back to dashboard
        </button>
        <header className="user-dashboard-header">
          <div>
            <p className="user-dashboard-eyebrow">Resident services</p>
            <h1>Request a document</h1>
            <p className="user-dashboard-muted">Choose a document and provide the details needed to process your request.</p>
          </div>
        </header>

        <form className="user-dashboard-panel user-dashboard-form" onSubmit={handleSubmit}>
          <div className="user-dashboard-form-grid">
            <label>
              Document type
              <select required defaultValue="">
                <option value="" disabled>Select a document</option>
                <option>Barangay Clearance</option>
                <option>Certificate of Residency</option>
                <option>Certificate of Indigency</option>
                <option>Business Clearance</option>
              </select>
            </label>
            <label>
              Purpose
              <input required placeholder="What will this document be used for?" />
            </label>
            <label className="user-dashboard-full-field">
              Additional details
              <textarea rows={5} placeholder="Add any information the barangay office should know." />
            </label>
            <label className="user-dashboard-upload user-dashboard-full-field">
              <span><UploadCloud size={20} /> Supporting document (optional)</span>
              <input type="file" />
              <small>Accepted formats: PDF, JPG, or PNG. Maximum size: 5 MB.</small>
            </label>
          </div>
          <div className="user-dashboard-form-actions">
            <button className="user-dashboard-secondary-button" type="button" onClick={() => navigate("/dashboard")}>Cancel</button>
            <button className="user-dashboard-primary-button" type="submit">Submit request</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default UserRequest;