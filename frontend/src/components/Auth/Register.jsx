import React, { useContext, useState } from "react";
import { FaRegUser  } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://job-sphere-backend-deloyment.onrender.com/api/v1/user/register",
        { name, phone, email, role, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
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
      <section className="authPage" style={{ display: 'flex', backgroundColor: '#f5f5dc' }}>
        <div className="banner" style={{ flex: 1 }}>
          <img 
            src="/register.png" 
            alt="register" 
            style={{ width: '80%', height: 'auto', maxWidth: '400px' }} // Adjust the width as needed
          />
        </div>
        <div className="container" style={{ flex: 1, maxWidth: '400px', margin: 'auto' }}>
          <div className="header">
            <img src="/logo.png" alt="logo" />
            <h3>Create a new account</h3>
          </div>
          <form>
            <div className="inputTag">
              <label>Register As</label>
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
              <label>Name</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FaPencilAlt style={{ backgroundColor: '#FFA500', color: '#fff' }} />
              </div>
            </div>
            <div className="inputTag">
              <label>Email Address</label>
              <div>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineMailOutline style={{ backgroundColor: '#FFA500', color: '#fff' }} />
              </div>
            </div>
            <div className="inputTag">
              <label>Phone Number</label>
              <div>
                <input
                  type="number"
                  placeholder="Enter your Mobile No."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <FaPhoneFlip style={{ backgroundColor: '#FFA500', color: '#fff' }} />
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
            <button type="submit" onClick={handleRegister} style={{ backgroundColor: '#FFA500', color: '#fff' }}>
              Register
            </button>
            <Link to={"/login"} style={{ backgroundColor: '#FFA500', color: '#fff' }}>Login Now</Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;