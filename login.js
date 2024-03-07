const btn = document.getElementById("sub");
const input = document.getElementById("uname");
const password = document.getElementById("pass");
const cpassword = document.getElementById("cpass");
var result = document.getElementById("result");

const btnclick = () => {
    event.preventDefault();
  u = localStorage.setItem("username", input.value);
  let u1 = localStorage.getItem("username");

  p = localStorage.setItem("password", password.value);
  let p1 = localStorage.getItem("password");

  cp = localStorage.setItem("cpassword", cpassword.value);
  let cp1 = localStorage.getItem("cpassword");
  console.log(u1, p1, cp1);
  if (p1 == cp1) {
    console.log("success");
    alert("login success");
    window.location.href="index.html";
    
  } else {
    console.log("error");
    alert("error");
    result.innerHTML('passwords doesnt match.')
  }
};

btn.addEventListener("click",btnclick);