import React from 'react';
import propTypes from 'prop-types';
import { Button } from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

export default function AuthedView({ user }) {
  return (
    <div>
        {
          user
            ? <Button id="logOutBtn" onClick={signOutUser}>Sign Out</Button>
            : <Button id="logInBtn" onClick={signInUser}>Sign In</Button>
        }
    </div>
  );
}

AuthedView.propTypes = {
  user: propTypes.any
};
