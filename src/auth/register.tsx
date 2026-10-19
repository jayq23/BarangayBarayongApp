
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Sun, Moon } from "lucide-react";

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

    const handleRegisterBtn = (
        event: FormEvent<HTMLFormElement>
    ) => {
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
            alert(
                "An error occurred during registration. Please try again."
            );
        }
    };

    return (
        <div
            className={`register-container ${theme}`}
        >
            <button
                id="theme"
                type="button"
                onClick={() =>
                    setTheme((current) =>
                        current === "light" ? "dark" : "light"
                    )
                }
                aria-label="Toggle theme"
            >
                {theme === "light" ? (
                    <Sun size={18} />
                ) : (
                    <Moon size={18} />
                )}
            </button>

            <button
                className="backBtn"
                type="button"
                onClick={handleBackClick}
            >
                Back
            </button>

            <h1>Register</h1>

            <form onSubmit={handleRegisterBtn}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    required
                />

                <br />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                />

                <br />

                <label htmlFor="password">Password:</label>
                <div>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        required
                    />

                    <button
                        type="button"
                        onClick={() =>
                            setShowPassword((visible) => !visible)
                        }
                        aria-label={
                            showPassword
                                ? "Hide password"
                                : "Show password"
                        }
                    >
                        {showPassword ? (
                            <EyeOff size={18} />
                        ) : (
                            <Eye size={18} />
                        )}
                    </button>
                </div>

                <br />

                <label htmlFor="confirmPassword">
                    Confirm Password:
                </label>

                <div>
                    <input
                        type={
                            showConfirmPassword ? "text" : "password"
                        }
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) =>
                            setConfirmPassword(e.target.value)
                        }
                        required
                    />

                    <button
                        type="button"
                        onClick={() =>
                            setShowConfirmPassword(
                                (visible) => !visible
                            )
                        }
                        aria-label={
                            showConfirmPassword
                                ? "Hide confirm password"
                                : "Show confirm password"
                        }
                    >
                        {showConfirmPassword ? (
                            <EyeOff size={18} />
                        ) : (
                            <Eye size={18} />
                        )}
                    </button>
                </div>

                <br />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
