import React from "react";
import { Box, Button, TextInput } from "grommet";
import { Link } from "@material-ui/core"
import { useHistory } from "react-router-dom";

import { useDispatch } from 'react-redux';
import loggedIn from 'C:/Users/SachJ/Github/CIS3750_JS/CIS3750_JS/client/src/components/state/actions/loginAction.js';


export default function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const routeChange = () =>{ 
   // if (email === "admin@fitnova.com" && password === "password") {
      dispatch(loggedIn());
      let path = ``; 
      history.push(path);
 //   }
  }

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div>
       

        <Box display="flex" justifyContent="center"  background="white" style = {{width: 600}}>
          <h1>Welcome</h1>
          <img src="fitnova_icon.png"></img><br/>
          <TextInput
            placeholder="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            style = {{width: 600}}
          />

          <TextInput
            placeholder="Password"
            type="password"
            value={password}
            style = {{width: 600}}
            onChange={event => setPassword(event.target.value)}
          />

          <Button
              label="Login"
              primary 
              style = {{width: 100}}
              onClick={() => routeChange()}
          />

          <Link
            component="button"
            variant="body2"
            onClick={() => {
              alert("Take me to reset password"); //not going to happen
            }}
          >
            Forgot your password?
          </Link><br/>

          <Link
            component="button"
            variant="body2"
            onClick={() => {
              alert("Take me to register"); //not going to happen
            }}
          >
            Don’t have an account? Sign up!
          </Link><br/>

        </Box>

        
    </div>
  );
}