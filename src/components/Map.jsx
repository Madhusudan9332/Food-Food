import propypes from 'prop-types';

const Map = ({ mapSrc }) => {

  return (
    <div className={`w-full h-64`}>
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

Map.propTypes = {
  mapSrc: propypes.string.isRequired
};