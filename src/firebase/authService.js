import auth from "../firebase";
export default function login(email, password) {
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
