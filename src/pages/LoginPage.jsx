// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });
//   const [error, setError] = useState("");

//   // Redirect if already logged in
//   useEffect(() => {
//     const token = localStorage.getItem("jwtToken");
//     if (token) {
//       navigate("/"); // Redirect to home
//     }
//   }, [navigate]);

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const response = await fetch(
//         "https://spacestation.tunewave.in/wp-json/jwt-auth/v1/token",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             username: formData.email, // or actual WP username
//             password: formData.password,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         setError(data.message || "Login failed");
//         return;
//       }

//       // Save JWT token
//       localStorage.setItem("jwtToken", data.data.token);

//       // Redirect to Home immediately
//       navigate("/");
//     } catch (err) {
//       console.error(err);
//       setError("Network error. Please try again.");
//     }
//   };

//   return (
//     <div style={{ marginTop: "120px" }}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="email"
//           placeholder="Enter Email"
//           value={formData.email}
//           onChange={handleChange}
//           autoComplete="username" // correct autocomplete
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Enter Password"
//           value={formData.password}
//           onChange={handleChange}
//           autoComplete="current-password"
//         />
//         <button type="submit">Login</button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default LoginPage;





import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; // 👈 CSS import

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      navigate("/"); // Redirect to home
    }
  }, [navigate]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        "https://spacestation.tunewave.in/wp-json/jwt-auth/v1/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.email, // WP expects username
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // Save JWT token
      localStorage.setItem("jwtToken", data.data.token);

      // Redirect to Home immediately
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login</h2>

        <input
          className="login-input"
          type="text"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="username"
        />

        <input
          className="login-input"
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
        />

        {error && <p className="error">{error}</p>}

       
        <button  style={{ border: "2px solid black", color: "black" }}   className="new-release-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
