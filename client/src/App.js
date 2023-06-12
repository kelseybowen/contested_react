import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { gapi } from 'gapi-script';
import Index from './views';
import { useCookies } from 'react-cookie';
import './App.css';
// import { countContext } from './Context';

function App() {

  const [user, setUser] = useState({});
  const [cookies, setCookie, removeCookie] = useCookies(['google-token']);

  function handleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    console.log("Encoded JWT ID token: " + response.credential);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(e) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  // prompts user to login with google
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "416332037370-6s6hk3ng74ip1t6flp0idnsg39v9o97f.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
    // google.accounts.id.renderButton(
    //   document.getElementById("signInDiv"),
    //   { theme: "outline", size: "large" }
    // );
    // google.accounts.id.prompt({client_id: "416332037370-6s6hk3ng74ip1t6flp0idnsg39v9o97f.apps.googleusercontent.com"});
  }, [])

  return (
    <div className="App">
      <div id='signInDiv'></div>
      {Object.keys(user).length !== 0 &&
        <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
      }
      {user &&
        <div>
          <h3>{user.given_name}</h3>
        </div>
      }
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index cookies={cookies} setCookie={setCookie} removeCookie={removeCookie} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
