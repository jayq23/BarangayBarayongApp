import { useState, type FormEvent } from "react";
import { Eye, EyeOff, Sun, Moon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";
import logo from "../images/logo.png";

const BARANGAY_NAME = "Barangay Barayong";
const CITY_LINE = "Ligao City/ 3rd District of the province of Albay, Bicol Region (Region V)";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || !password) {
      alert("Please fill in both email and password fields.");
      return;
    }

    alert("Login successful!");
    navigate("/dashboard");
  };

  return (
    <div className={`auth-page ${theme === "dark" ? "dark" : ""}`}>
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
          <h2>Barangay Complaint and Services System</h2>
          <p>
            Sign in to manage resident records, certificates, and
            barangay complaints and Announcement for Events.
          </p>
        </div>

        <div className="auth-aside-footer">{CITY_LINE}</div>
      </aside>

      <main className="auth-main">
        <div className="auth-topbar">
          <button
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
          <h1>Sign in</h1>
          <p className="auth-subtitle">
            Use your registered email and password.
          </p>

          <form onSubmit={handleLogin} noValidate>
            <div className="auth-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                placeholder="name@example.com"
              />
            </div>

            <div className="auth-field">
              <label htmlFor="password">Password</label>
              <div className="auth-password">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  autoComplete="current-password"
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

            <button type="submit" className="auth-submit">
              Sign in
            </button>
          </form>

          <p className="auth-switch">
            No account yet? <Link to="/register">Register</Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Login;