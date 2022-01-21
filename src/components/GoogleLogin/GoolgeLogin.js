import React from 'react';
import { GoogleLogin } from 'react-google-login';

function MyGoolgeLogin() {
  const handleSuccess = res => {
    console.log(res);
  };
  return <div>
    <GoogleLogin
        clientId="251595323812-bio7a9ath23ki0nce019ui39rhaqoffc.apps.googleusercontent.com"
        buttonText="Login with Google"
        autoLoad="true"
        onSuccess={handleSuccess}
        onFailure={handleSuccess}
      />
      <h2></h2>
  </div>;
}

export default MyGoolgeLogin;


//<meta name="google-signin-client_id" content="12345678-gbgin9h7q69rpjehq1cd2441b4nosnid.apps.googleusercontent.com">