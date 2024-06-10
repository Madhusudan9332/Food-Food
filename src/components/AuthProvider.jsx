import { Auth0Provider } from '@auth0/auth0-react';
import propTypes from 'prop-types';


const AuthProvider = ({ children }) => {
  return (
    <Auth0Provider
      domain="dev-2ieibnzagaxua1pj.us.auth0.com"
      clientId="E7TtoCwd0BiA0RXXqsmWZvDW8OdNDu8E"
      clintSecret="qa8FaXF1F4vrLDMunePZoZ9L1QZgMC6RsiJjcXwoaVJeCiwpQOUb5_DX3n1Hi0-w"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: propTypes.node.isRequired
};