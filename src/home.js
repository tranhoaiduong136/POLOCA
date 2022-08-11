import React, { createContext, useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import Layout from "./components/layout/Layout";
import LayoutGuest from "./components/layout/LayoutGuest";
import "./home.css";

export const LogInContext = createContext({
  isFirstLogIn: true,
  toggleIsFirstLogIn: (i) => {
    i = !i;
  },
});

export const RoleContext = createContext({
  role: "admin",
  setRole: (newVal, i) => {
    i = newVal;
  },
});

function useStickyState(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const stickyValue =
      typeof window !== "undefined" ? window.localStorage.getItem(key) : "";
    return stickyValue && stickyValue !== undefined
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

const Home = () => {
  const [name, setName] = useState("");
  const [psswd, setPsswd] = useState("");
  const [loggedIn, setLoggedIn] = useStickyState(undefined, "role");
  const [isFirstLogIn, setFirstLogin] = useStickyState(true, "first-login");

  const toggleIsFirstLogIn = () => {
    setFirstLogin(!isFirstLogIn);
  }

  const changeEmail = (key) => {
    let input = key.target.value;
    setName(input);
  };
  const changePassword = (key) => {
    let input = key.target.value;
    setPsswd(input);
  };
  const authen = (key) => {
    if (
      key.key === 'Enter' &&
      name.toLowerCase() === "admin" &&
      psswd.toLowerCase() === "admin"
    ){
      setLoggedIn("admin");
      setFirstLogin(false);
    }else if (
      key.key === 'Enter' &&
      name.toLowerCase() === "guest" &&
      psswd.toLowerCase() === "guest"
    ){
      setLoggedIn("guest");
    }
  };

  const login = () => {
    if (name.toLowerCase() === "admin" && psswd.toLowerCase() === "admin")
    {  setLoggedIn("admin");
      setFirstLogin(false);}
    else if (name.toLowerCase() === "guest" && psswd.toLowerCase() === "guest")
    { 
      setLoggedIn("guest");
      setFirstLogin(false);
    }
    else{
      alert("wrong account")
      setFirstLogin(true);
    }
    
  };

  return (
    <LogInContext.Provider value={{ isFirstLogIn, toggleIsFirstLogIn }}>
      {loggedIn === "admin" && !isFirstLogIn ? (
        <Layout />
      ) : (
        <>
          {loggedIn === "guest" && !isFirstLogIn ? (
            <LayoutGuest />
          ) : (
            <div className="container">
              <div className="login-card">
                <div className="logo">
                  <img src="favicon.png" alt="company logo" />
                </div>
                <div className="form">
                  <label htmlFor="name">Email:</label>
                  <input
                    placeholder="admin / guest"
                    type="text"
                    id="name"
                    onInput={(key) => changeEmail(key)}
                    onKeyPress={(key) => authen(key)}
                  />

                  <label htmlFor="passwd">Password:</label>
                  <input
                    placeholder="admin / guest"
                    type="text"
                    id="name"
                    onInput={(key) => changePassword(key)}
                    onKeyDown={(key) => authen(key)}
                  />

                  <button onClick={login}>Login</button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </LogInContext.Provider>
  );
};

export default Home;
