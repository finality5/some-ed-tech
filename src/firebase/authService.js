import auth from "../firebase";
export function login(email, password) {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      auth.onAuthStateChanged((user) => {
        user
          .getIdToken()
          .then((token) => {
            localStorage.setItem("token", token);
          })
          .catch(() => {
            console.log("cannot set localstorage token");
          });
      });
    })
    .catch(() => {
      "login error.";
    });
}

export function logout() {
  auth
    .signOut()
    .then(() => {
      window.location = "/login";
      localStorage.removeItem("token");
      this.setState({ displayName: "" });
    })
    .catch((err) => {
      console.log("err", err);
    });
}
