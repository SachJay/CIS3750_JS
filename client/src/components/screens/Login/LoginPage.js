import React from "react";
import { Box, Button, TextInput } from "grommet";
import { Link } from "@material-ui/core"
import { useHistory } from "react-router-dom";

export default function LoginPage() {

  const history = useHistory();

  const routeChange = () =>{ 
    if (email === "admin@fitnova.com" && password === "password") {
      let path = `newPath`; 
      history.push(path);
    }

  }

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div>
        <p>Replace this with code</p>
        <h1>Welcome</h1>
        <img src="fitnova_icon.png"></img><br/>

        <Box align="center" background="white">
        <TextInput
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <TextInput
          placeholder="Password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <Button
            label="Login"
            primary 
            onClick={() => routeChange()}
        />
        </Box>

        <Link
          component="button"
          variant="body2"
          onClick={() => {
            alert("Take me to reset password"); //TODO
          }}
        >
          Forgot your password?
        </Link><br/>

        <Link
          component="button"
          variant="body2"
          onClick={() => {
            alert("Take me to register"); //TODO
          }}
        >
          Don’t have an account? Sign up!
        </Link><br/>
    </div>
  );
}