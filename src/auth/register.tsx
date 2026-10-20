import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Sun, Moon } from "lucide-react";
import "../styles/auth.css";
import logo from "../images/logo.png";

const BARANGAY_NAME = "Barangay Barayong";
const CITY_LINE = "Ligao City/ 3rd District of the province of Albay, Bicol Region (Region V)";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleRegisterBtn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      alert("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className={`auth-page register-container ${theme === "dark" ? "dark" : ""}`}>
      <aside className="auth-aside">
        <div className="auth-brand">
          <div className="auth-seal" aria-hidden="true">
            <img src={logo} alt="Barangay Logo" className="auth-logo" />
          </div>
          <div className="auth-brand-text">
            <small>Republic of the Philippines</small>
            <strong>{BARANGAY_NAME}</strong>
          </div>
        </div>

        <div className="auth-aside-body">
          <h2>Create your account</h2>
          <p>
            Register to access barangay services and allowed to see the requirements for every needs to get in the barangay office.
          </p>
        </div>

        <div className="auth-aside-footer">{CITY_LINE}</div>
      </aside>

      <main className="auth-main">
        <div className="auth-topbar">
          <button
            className="auth-link-btn backBtn"
            type="button"
            onClick={handleBackClick}
          >
            Back
          </button>
          <button
            id="theme"
            className="auth-theme"
            type="button"
            onClick={() =>
              setTheme((current) => (current === "light" ? "dark" : "light"))
            }
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="auth-card">
          <h1>Register</h1>
          <p className="auth-subtitle">
            Fill in the details below to create an account.
          </p>

          <form onSubmit={handleRegisterBtn}>
            <div className="auth-field">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                autoComplete="username"
                required
                placeholder="Enter your username"
              />
            </div>

            <div className="auth-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="auth-field">
              <label htmlFor="password">Password</label>
              <div className="auth-password">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="auth-toggle"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="auth-field">
              <label htmlFor="confirmPassword">Confirm password</label>
              <div className="auth-password">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  className="auth-toggle"
                  onClick={() => setShowConfirmPassword((visible) => !visible)}
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button type="submit" className="auth-submit">
              Create account
            </button>
          </form>

          <p className="auth-switch">
            Already registered? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Register;