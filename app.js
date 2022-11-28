// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyC0gsWVU42SWA2LbcYR9xYS7HtiZd7qE-Y",
  // authDomain: "hs-test-afbf2.firebaseapp.com",
  // databaseURL: "https://hs-test-afbf2-default-rtdb.firebaseio.com",
  // projectId: "hs-test-afbf2",
  // storageBucket: "hs-test-afbf2.appspot.com",
  // messagingSenderId: "527219495256",
  // appId: "1:527219495256:web:51027b3132b9d701ce952d",

  apiKey: "AIzaSyATt67vlC1_RDUNLQ0CAqzLZ3-yLPEw4_8",
  authDomain: "hs-smartdatabase.firebaseapp.com",
  databaseURL: "https://hs-smartdatabase-default-rtdb.firebaseio.com",
  projectId: "hs-smartdatabase",
  storageBucket: "hs-smartdatabase.appspot.com",
  messagingSenderId: "772474913472",
  appId: "1:772474913472:web:7a7010e5b3ae404d302325",
  measurementId: "G-H3DNQHF9B5"

  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var username = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var opcao = document.getElementById("opcao").value;

  set(ref(database, "users/" + username), {
    username: username,
    email: email,
    message: message,
    opcao: opcao,
  });

  //ativar alerta
  // document.getElementById("toast-default").style.display = "block";

  // remover alerta

  setTimeout(() => {
    document.getElementById("toast-default").style.display = "none";
  }, 3000);

  //resetar formulário

  document.getElementById("contact-form").reset();

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "guilhermeggr23@gmail.com",
    Password: "EEFFCB72FD20CBDC4F6CDEC124502630EE62",
    Opcao: opcao,
    To: "solutions.hssmart@gmail.com",
    From: "guilhermeggr23@gmail.com",
    Subject: username + " te enviou uma mensagem!",
    Body:
      "Nome: " +
      username +
      "<br/>Email: " +
      email +
      "<br/>Mensagem: " +
      message +
      "<br/>Opção: " +
      opcao,
  });
}

