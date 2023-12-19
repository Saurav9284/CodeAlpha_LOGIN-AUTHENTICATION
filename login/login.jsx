<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login</title>
    <link rel="icon" href="https://i.ibb.co/1d9BGZK/download-1-removebg-preview.jpg">

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;1,500;1,600&display=swap" rel="stylesheet">
    <!-- MDB -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.css" rel="stylesheet" />
    <script src="https://kit.fontawesome.com/ab7e10d51f.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous" />
    <!-- For font awesome premium icons -->
    <link rel="stylesheet" data-purpose="Layout StyleSheet" title="Web Awesome"
        href="/css/app-wa-02670e9412103b5852dcbe140d278c49.css?vsn=d">
    <!-- For font awesome premium icons ends here -->
    <link rel="stylesheet" href="./login.css" />
    <!-- <link rel="stylesheet" href="./footer.css" /> -->
</head>
<body style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(glossier.png);">
    <div id = "navbar"></div>
    <div class="spinner-border text-secondary" role="status" id="spinner">
        <span class="sr-only">Loading...</span>
    </div>
    <div id="alert-container">
        <div id="alert">
            <p id="alert-msg">Please fill all the required details!</p>
            <button>OK</button>
        </div>
    </div>
    <section class="vh-100">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100" id="loginbox">
                <div class="col col-xl-10">
                    <div class="card" style="border-radius: 1rem">
                        <div class="row g-0">
                            <div class="col-md-6 col-lg-5 d-none d-md-block">
                                <img src="https://images.ctfassets.net/fo9twyrwpveg/36ZMAB8mgdZhBuEKLaR36z/3460ec0fd00d8143bea57e033301411b/glossier-seeklogo.com.svg" alt="logo" 
                                class="img-fluid">
                                <img src="https://i.pinimg.com/736x/1a/6c/ee/1a6cee098676cdeae463d83da296be11.jpg"
                                    alt="login form" class="img-fluid1" style="border-radius: 1rem 0 0 1rem "/>
                            </div>
                            <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                <div class="card-body p-4 p-lg-5 text-black">
                                    <form>
                                        <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px" style="font-family: 'Poppins', sans-serif;">
                                            Login
                                        </h5>

                                        <div class="form-outline mb-4">
                                            <input type="email" id="form2Example17"
                                                class="form-control form-control-lg" />
                                            <label class="form-label" for="form2Example17">Email address</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="password" id="form2Example27"
                                                class="form-control form-control-lg" />
                                            <label class="form-label" for="form2Example27">Password</label>
                                        </div>

                                        <div class="pt-1 mb-4">
                                            <button class="btn btn-lg btn-block btn-primary" type="submit"
                                                id="signinbtn">
                                                Sign in
                                            </button>
                                            <button class="btn btn-lg btn-block btn-primary" type="submit"
                                                id="googlebtn">
                                                Sign in with google
                                            </button>
                                        </div>

                                        <a class="small text-muted" href="#!">Forgot password?</a>
                                        <p class="mb-5 pb-lg-2" style="color: #393f81">
                                            Don't have an account?
                                            <a href="../Signup/signup.html" style="color: #393f81">Sign up</a>
                                        </p>
                                        <a href="#!" class="small text-muted">Terms of use.</a>
                                        <a href="#!" class="small text-muted">Privacy policy</a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div id="footer"></div>
</body>

</html>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.js"></script>
<!-- <script src="./Components/loginIMPORT.js" type="module"></script> -->

<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import {
    getDatabase,
    ref,
    onValue,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAGpHrB0sm21lPXpz4OtoSKWVLFb-jisb8",
    authDomain: "glossier-eba28.firebaseapp.com",
    projectId: "glossier-eba28",
    storageBucket: "glossier-eba28.appspot.com",
    messagingSenderId: "79396284003",
    appId: "1:79396284003:web:e7b409f936564e49b6fa56",
    measurementId: "G-G7STPRSJ5S",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase();

const signInButton = document.getElementById("signinbtn");
let spinner = document.getElementById("spinner");

signInButton.addEventListener("click", (event) => {
    event.preventDefault();
    const emailInput = document.getElementById("form2Example17");
    const passwordInput = document.getElementById("form2Example27");
    const email = emailInput.value;
    const password = passwordInput.value;

    if (!email || !password) {
        document.querySelector("#alert-msg").textContent =
            "Please fill all the required details!";
        document.querySelector("#alert-container").style.display = "block";

        return;
    }

    spinner.style.display = "block";

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userId = user.uid;
            const starCountRef = ref(database, "users/" + userId);
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                let [firstName, lastName] = data.username.split(" ");

                localStorage.setItem("userName", firstName);
                // localStorage.setItem("userName", data.username);
                window.location.assign("./index.html");
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            spinner.style.display = "none";

            document.querySelector("#alert-msg").textContent =
                "Entered wrong details";
            document.querySelector("#alert-container").style.display = "block";
            console.log(error);
        });
});

let googlebtn = document.getElementById("googlebtn");
googlebtn.addEventListener("click", (event) => {
    event.preventDefault();

    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;

            let [firstName, lastName] = user.displayName.split(" ");

            localStorage.setItem("userName", firstName);
            window.location.assign("../index.html");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
        });
});

document.querySelector("#alert button").addEventListener("click", () => {
    document.querySelector("#alert-container").style.display = "none";
});
</script>
