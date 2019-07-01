const useSign = () => {
  //
  // ─── SIGNUP ─────────────────────────────────────────────────────────────────────
  //

  const signup = user => {
    return fetch("/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(res => {
        return res.json();
      })
      .catch(err => {
        console.log(err);
      });
  };

  //
  // ─── SIGNIN ─────────────────────────────────────────────────────────────────────
  //

  const signin = user => {
    return fetch("/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(res => {
        return res.json();
      })
      .catch(err => {
        console.log(err);
      });
  };

  //
  // ─── SIGNOUT ────────────────────────────────────────────────────────────────────
  //

  const signout = () => {
    if (typeof window !== "undefined") localStorage.removeItem("jwt");
    return fetch("/signout", {
      method: "GET",
    })
      .then(res => {
        console.log("signout", res);
        return res.json();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return {
    signup,
    signin,
    signout,
  };
};

export default useSign;
