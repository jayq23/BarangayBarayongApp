import {useNavigate} from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    //Back button functionality
    const handleBackClick = () => {
        navigate(-1); 
    }

    return (
        <div>
            <button className="backBtn" onClick={handleBackClick}>back</button>
            <h1>Register</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <br />
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required />
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register