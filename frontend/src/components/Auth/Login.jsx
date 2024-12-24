import React, { useContext, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";
import { FaRegUser  } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://job-sphere-backend-deloyment.onrender.com/api/v1/user/login",
        { email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setEmail("");
      setPassword("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthorized) {
    return <Navigate to={'/'} />;
  }

  return (
    <>
      <section className="authPage" style={{ backgroundColor: '#f5f5dc', display: 'flex' }}>
        <div className="banner" style={{ flex: 1 }}>
          <img 
            src="/login.webp" 
            alt="login" 
            style={{ width: '80%', height: 'auto', maxWidth: '600px' }} // Adjust the width and maxWidth as needed
          />
        </div>
        <div className="container" style={{ flex: 1, maxWidth: '400px', margin: 'auto' }}>
          <div className="header">
            <img src="/logo.png" alt="logo" />
            <h3>Login to your account</h3>
          </div>
          <form>
            <div className="inputTag">
              <label>Login As</label>
              <div>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Select Role</option>
                  <option value="Employer">Employer</option>
                  <option value="Job Seeker">Job Seeker</option>
                </select>
                <FaRegUser  style={{ backgroundColor: '#FFA500', color: '#fff' }} />
              </div>
            </div>
            <div className="inputTag">
              <label>Email Address</label>
              <div>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineMailOutline style={{ backgroundColor: '#FFA500', color: '#fff' }} />
              </div>
            </div>
            <div className="inputTag">
              <label>Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RiLock2Fill style={{ backgroundColor: '#FFA500', color: '#fff' }} />
              </div>
            </div>
            <button type="submit" onClick={handleLogin} style={{ backgroundColor: '#FFA500', color: '#fff' }}>
              Login
            </button>
            <Link to={"/register"} style={{ backgroundColor: '#FFA500', color: '#fff' }}>Register Now</Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;