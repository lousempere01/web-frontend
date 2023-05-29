let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".close-btn");
// const btnLogout = document.querySelector(".btnLogout");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

// document.getElementById("login") => div id="login"

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", (event) => {
  event.preventDefault();
  // event.stopPropagation();
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  wrapper.classList.remove("active");
});

// //simulate user login state
// const userLoggedIn = true;
// if (userLoggedIn) {
//   // create the logout button element
//   btnLogout = document.createElement("a");
//   btnLogout.href = "index.html";
//   btnLogout.classList.add("nav-link", "btnLogout");
//   btnLogout.textContent = "Logout";

//   // replace the login button with the logout button
//   btnPopup.replaceWith(btnLogout);
// }

toggle.addEventListener("click", function () {
  collapse.forEach((col) => col.classList.toggle("collapse-toggle"));
});

// with masonry
// new Masonry("#posts .grid", {
//     itemSelector : '.grid-item',
//     gutter : 20
// });

// swiper libray initialization
// new Swiper(".swiper-container", {
//   direction: "horizontal",
//   loop: true,
//   slidesPerView: 5,
//   autoplay: {
//     delay: 3000,
//   },
//   // responsive brakpoints
//   breakpoints: {
//     "@0": {
//       slidesPerView: 2,
//     },
//     // 888px
//     "@1.00": {
//       slidesPerView: 3,
//     },
//     // 1110px
//     "@1.25": {
//       slidesPerView: 4,
//     },
//     // 1330px
//     "@1.50": {
//       slidesPerView: 5,
//     },
//   },
// });

// Sticky Navigation
window.onscroll = function () {
  myFunction();
};

// get the current value
let navbar = document.getElementById("header");

// get the navbar position
let sticky = navbar.offsetTop;

// sticky function
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Envoyer les données du formulaire de login au serveur
document.addEventListener("DOMContentLoaded", () => {
  const formLogin = document.querySelector("#loginForm");
  const emailLogin = document.querySelector("#emailLogin");
  const passwordLogin = document.querySelector("#passwordLogin");
  const btnLogin = document.querySelector("#btnLogin");

  formLogin.addEventListener("submit", async (e) => {
    e.preventDefault();
    alert("You're connected");
    const formData = {
      email: emailLogin.value,
      password: passwordLogin.value,
    };
    const email = document.getElementById("emailLogin").value;
    const password = document.getElementById("passwordLogin").value;
    console.log(formData);
    console.log(email);
    console.log(password);
    /*
    fetch("https://daily-diaries-server.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // set token in local storage
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("Vous êtes connecté");
        formLogin.reset();
      })
      .catch((err) => console.log(err));
  });*/
    try {
      const response = await fetch(
        "https://daily-diaries-server.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        console.log("ok");
        localStorage.setItem("token", data.token);
        window.location.href = "pages.html";
      } else {
        console.log("not ok");
      }
    } catch (error) {
      console.log(error);
    }
  });
});

// Envoyer les donnés du formulaire de register au serveur
document.addEventListener("DOMContentLoaded", () => {
  const formRegister = document.querySelector("#RegisterForm");
  const usernameRegister = document.querySelector("#usernameRegister");
  const emailRegister = document.querySelector("#emailRegister");
  const passwordRegister = document.querySelector("#passwordRegister");
  const btnRegister = document.querySelector("#btnRegister");

  formRegister.addEventListener("submit", async (e) => {
    e.preventDefault();
    alert("account created");
    const formData = {
      username: usernameRegister.value,
      email: emailRegister.value,
      password: passwordRegister.value,
    };
    console.log(formData);

    try {
      const response = await fetch(
        "https://daily-diaries-server.onrender.com/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        console.log("ok");
        window.location.href = "pages.html";
      } else {
        console.log("not ok");
      }
    } catch (error) {
      console.log(error);
    }
  });
});

// Send to server contact form
document.addEventListener("DOMContentLoaded", () => {
  const contactform = document.querySelector("#contactform");
  const nameContact = document.querySelector("#nameContact");
  const mailContact = document.querySelector("#mailContact");
  const phoneContact = document.querySelector("#phoneContact");
  const messageContact = document.querySelector("#messageContact");
  const btnSend = document.querySelector("#btnSend");

  contactform.addEventListener("submit", async (e) => {
    e.preventDefault();
    alert("Message send");
    const formData = {
      name: nameContact.value,
      email: mailContact.value,
      phone: phoneContact.value,
      message: messageContact.value,
    };
    console.log(formData);

    try {
      const response = await fetch(
        "https://daily-diaries-server.onrender.com/api/contact/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        console.log("ok");
        window.location.href = "index.html";
      } else {
        console.log("not ok");
      }
    } catch (error) {
      console.log(error);
    }
  });
});

// Deconnexion

// const logoutButton = document.getElementById("logoutButton");
// logoutButton.addEventListener("click", async function () {
//   const token = localStorage.getItem("accessToken");
//   console.log(token);
//   try {
//     const response = await fetch("https://localhost:3000/api/auth/logout", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.ok) {
//       const data = await response.json();
//       console.log("data", data);
//       localStorage.removeItem("accessToken"); // Supprimer l'accessToken du localStorage
//       localStorage.removeItem("loggedIn"); // Réinitialiser le statut de connexion
//       window.location.href = "index.html"; // Rediriger vers la page de connexion
//     } else {
//       console.log("La demande de déconnexion a échoué.");
//     }
//   } catch (error) {
//     console.log(error);
//     console.log("erreur");
//   }
// });

// Deconnexion
