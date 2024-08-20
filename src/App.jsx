import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GoogleAuth from "./components/GoogleAuth/GoogleAuth";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Error from "./Error/Error";
import Home from "./Home/Home";
import Profile from "./profile/profile";

const App = () => {
  const GoogleWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="27309396415-gmcm8601o5ba2t157p9utajkv1vashvb.apps.googleusercontent.com">
        <GoogleAuth />
      </GoogleOAuthProvider>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<GoogleWrapper />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />{" "}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
