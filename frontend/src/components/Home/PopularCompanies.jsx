import React from "react";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Hydrabad, India",
      openPositions: 10,
      icon: <FaMicrosoft style={{ backgroundColor: '#FFA500', color: '#fff' }}/>,
    },
    {
      id: 2,
      title: "Tesla",
      location: "Pune, India",
      openPositions: 5,
      icon: <SiTesla style={{ backgroundColor: '#FFA500', color: '#fff' }}/>,
    },
    {
      id: 3,
      title: "Apple",
      location: "Mumbai, India",
      openPositions: 20,
      icon: <FaApple style={{ backgroundColor: '#FFA500', color: '#fff' }}/>,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
