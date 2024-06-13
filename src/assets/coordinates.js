const getRandomCoordinates = (lat, lon, radiusInKm) => {
    const radiusInDegrees = radiusInKm / 111.32; // Convert radius from km to degrees
    const randomDistance = Math.random() * radiusInDegrees;
    const randomBearing = Math.random() * 2 * Math.PI; // Random angle in radians
  
    const newLat = lat + randomDistance * Math.cos(randomBearing);
    const newLon = lon + (randomDistance * Math.sin(randomBearing)) / Math.cos(lat * Math.PI / 180);
  
    const formattedLat = newLat.toFixed(14);
    const formattedLon = newLon.toFixed(14);
  
    return { newLat: parseFloat(formattedLat), newLon: parseFloat(formattedLon) };
  };

  export {getRandomCoordinates}