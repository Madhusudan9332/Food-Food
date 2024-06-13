import React from 'react'
import propTypes from 'prop-types'


function CatogoryImg({name}) {
    const [image, setImage] = React.useState(null);
    React.useEffect(() => {
        const randomNumber = Math.ceil(Math.random() * 10);
        import(`../assets/images/${name}_${randomNumber}.jpg`)
          .then((imageModule) => {
            setImage(imageModule.default);
          })
          .catch((error) => {
            console.error("Error loading image:", error);
          });
      },[name])

  return (
    <>
        <img
              src={image}
              alt={`${name} Here.. 😋`}
              className="w-64 h-64 object-cover rounded-full"
            />
            <p>{name}</p>
    </>
  )
}

export default CatogoryImg

CatogoryImg.propTypes = {
    name: propTypes.string.isRequired,
}