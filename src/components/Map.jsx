import React, { useState, useEffect } from "react";
import { getRandomCoordinates } from "../assets/coordinates";

const Map = ({ className }) => {
  const centerLat = 28.38221900;
  const centerLon = 77.30309300; 

  const [newLat1, setNewLat1] = useState(28.382674902888002);
  const [newLon1, setNewLon1] = useState(77.29154521097661);
  const [newLat2, setNewLat2] = useState(28.356797600000000);
  const [newLon2, setNewLon2] = useState(77.275482600000000);
  const [newLat3, setNewLat3] = useState(28.405779499999998);
  const [newLon3, setNewLon3] = useState(77.306030999999990);

  useEffect(() => {
    console.log("Map component mounted",parseFloat((77.3 + Math.random() * 0.2).toFixed(15)));
    setNewLat1(parseFloat((28.3 + Math.random() * 0.1).toFixed(15)));
    setNewLon1(parseFloat((77.3 + Math.random() * 0.1).toFixed(15)));
    
    setNewLat2(parseFloat((28.3 + Math.random() * 0.1).toFixed(15)));
    setNewLon2(parseFloat((77.3 + Math.random() * 0.1).toFixed(15)));
    
    setNewLat3(parseFloat((28.3 + Math.random() * 0.1).toFixed(15)));
    setNewLon3(parseFloat((77.3 + Math.random() * 0.1).toFixed(15)));
    
    console.log("Map component unmounted",newLat1,newLon1,newLat2,newLon2,newLat3,newLon3);
  }, []);

  const mapSrc = `https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d34373.49576485182!2d${centerLat}!3d${centerLon}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d${newLat2}!2d${newLon2}!4m5!1s0x390cddbbc128cc3f%3A0xa974558f05d1107b!2sShop%20No.%203%2C%20Pulaoo%20Master%2C%20Near%20Nissan%20Huts%2C%20Plot%20%2F36A%2C%20New%20Industrial%20Township%2C%20Faridabad%2C%20Haryana%20121001!3m2!1d${newLat3}!2d${newLon3}!5e0!3m2!1sen!2sin!4v1718258945369!5m2!1sen!2sin`;

  return (
    <div className={`w-full h-64 ${className}`}>
      <iframe
        src={mapSrc}
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
