import React from "react";
import CustomizedProgressBars from "../../components/loader/loader";
import Button from "@material-ui/core/Button";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { isLoading, isAuthenticated, error, loginWithRedirect, logout } =
    useAuth0();

  if (isLoading) {
    return <CustomizedProgressBars />;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        <Button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </Button>
      </div>
    );
  } else {
    return <Button onClick={loginWithRedirect}>Log in</Button>;
  }
};

export default Login;
