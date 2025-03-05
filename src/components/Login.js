// rafce - react arrow function component export

import React from "react";
import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const navigate = useNavigate();
  const user = useSelector(store=> store.user);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [showError, setshowError] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = (event) => {
    event.preventDefault();
    // Validation
    const message = checkValidData(email.current.value, password.current.value);
    setshowError(message);
    if (message) return;
    //Sign In /Sign Up
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/93866205?v=4"
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
                    dispatch(
                      addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                      })
                    );
            navigate("/browse");
          }).catch((error) => {
            setshowError(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setshowError(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          console.log("SUCCESS")
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setshowError(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg"
          alt=""
        />
      </div>
      <form
        className="absolute w-3/12 right-0 my-36 left-0 p-12 mx-auto rounded-lg bg-black text-white bg-opacity-75"
        action=""
      >
        <h1 className="text-3xl font-bold py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="Enter Your Name"
            className="p-4 my-4 w-full  rounded-lg bg-slate-600"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full  rounded-lg bg-slate-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full   rounded-lg bg-slate-600"
        />
        <p className="ml-1 text-lg text-red-600">{showError}</p>
        <button
          className="p-4 my-6 w-full bg-red-800  rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p>
          {" "}
          {isSignInForm ? "New to Netflix?" : "Already a User?"}{" "}
          <span
            className="font-semibold cursor-pointer underline"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign Up" : "Sign In"} Now
          </span>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
