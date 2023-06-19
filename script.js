// randome api call
document.getElementById("apiButton").addEventListener("click", fetchData);
document.getElementById("copyButton").addEventListener("click", copyResponse);

// sign up
document.getElementById("signUpButton").addEventListener("click", signUp);
document
  .getElementById("copysignUpResultButton")
  .addEventListener("click", copyResponseOfSignUp);
// sign in
document.getElementById("signInButton").addEventListener("click", signIn);
document
  .getElementById("copySignInResultButton")
  .addEventListener("click", copyResponseOfSignIn);

// user list
document.getElementById("userListButton").addEventListener("click", userList);
document
  .getElementById("copyUserListResultButton")
  .addEventListener("click", copyResponseOfUserList);

// user details
document
  .getElementById("userDetailButton")
  .addEventListener("click", userDetail);
document
  .getElementById("copyUserDetailResultButton")
  .addEventListener("click", copyResponseOfUserDetail);

// api call function

function fetchData() {
  const loader = document.getElementById("loader");
  const resultDiv = document.getElementById("result");

  // Show the loading indicator
  loader.style.display = "block";
  resultDiv.innerHTML = "";

  fetch("https://karmatechnolabsapi.up.railway.app/api/user")
    .then((response) => response.json())
    .then((data) => {
      displayData(data);
      // Hide the loading indicator
      loader.style.display = "none";
    })
    .catch((error) => {
      console.log(error);
      // Hide the loading indicator
      loader.style.display = "none";
    });
}

function signUp() {
  const loader = document.getElementById("loaderSignUp");
  const resultDiv = document.getElementById("signUpResult");

  // Show the loading indicator
  loader.style.display = "block";
  resultDiv.innerHTML = "";

  fetch("https://karmatechnolabsapi.up.railway.app/api/auth/signUp", {
    method: "POST",
    body: JSON.stringify({
      userName: "foo",
      password: "bar",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      displayDataOfSignUp(data);
      // Hide the loading indicator
      loader.style.display = "none";
    })
    .catch((error) => {
      console.log(error);
      // Hide the loading indicator
      loader.style.display = "none";
    });
}

function signIn() {
  const loader = document.getElementById("loaderSignIn");
  const resultDiv = document.getElementById("signInResult");

  // Show the loading indicator

  loader.style.display = "block";
  resultDiv.innerHTML = "";

  fetch("https://karmatechnolabsapi.up.railway.app/api/auth/signIn", {
    method: "POST",
    body: JSON.stringify({
      userName: "foo",
      password: "bar",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      displayDataOfSignIn(data);
      // Hide the loading indicator
      loader.style.display = "none";
    })
    .catch((error) => {
      console.log(error);
      // Hide the loading indicator
      loader.style.display = "none";
    });
}

function userList() {
  const loader = document.getElementById("loaderUserList");
  const resultDiv = document.getElementById("userListResult");

  // Show the loading indicator

  loader.style.display = "block";
  resultDiv.innerHTML = "";

  fetch("https://karmatechnolabsapi.up.railway.app/api/user", {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      displayDataOfUserList(data);
      // Hide the loading indicator
      loader.style.display = "none";
    })
    .catch((error) => {
      console.log(error);
      // Hide the loading indicator
      loader.style.display = "none";
    });
}

function userDetail() {
  const loader = document.getElementById("loaderUserDetail");
  const resultDiv = document.getElementById("userDetailResult");

  // Show the loading indicator

  loader.style.display = "block";
  resultDiv.innerHTML = "";

  fetch(
    "https://karmatechnolabsapi.up.railway.app/api/user/648205daffdc5a186881ed74",
    {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      displayDataOfUserDetail(data);
      // Hide the loading indicator
      loader.style.display = "none";
    })
    .catch((error) => {
      console.log(error);
      // Hide the loading indicator
      loader.style.display = "none";
    });
}

// copy response function

function copyResponse() {
  const resultDiv = document.getElementById("result");
  const range = document.createRange();
  range.selectNode(resultDiv);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  // Add a visual cue to indicate the response has been copied
  const copyButton = document.getElementById("copyButton");
  copyButton.textContent = "Response Copied!";
  setTimeout(() => {
    copyButton.textContent = "Copy Response";
  }, 2000); // Reset the button text after 2 seconds
}

function copyResponseOfSignUp() {
  const resultDiv = document.getElementById("signUpResult");
  const range = document.createRange();
  range.selectNode(resultDiv);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  // Add a visual cue to indicate the response has been copied
  const copyButton = document.getElementById("copysignUpResultButton");
  copyButton.textContent = "Response Copied!";
  setTimeout(() => {
    copyButton.textContent = "Copy Response";
  }, 2000); // Reset the button text after 2 seconds
}

function copyResponseOfSignIn() {
  const resultDiv = document.getElementById("signInResult");
  const range = document.createRange();
  range.selectNode(resultDiv);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  // Add a visual cue to indicate the response has been copied
  const copyButton = document.getElementById("copySignInResultButton");
  copyButton.textContent = "Response Copied!";
  setTimeout(() => {
    copyButton.textContent = "Copy Response";
  }, 2000); // Reset the button text after 2 seconds
}

function copyResponseOfUserList() {
  const resultDiv = document.getElementById("userListResult");
  const range = document.createRange();
  range.selectNode(resultDiv);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  // Add a visual cue to indicate the response has been copied
  const copyButton = document.getElementById("copyUserListResultButton");
  copyButton.textContent = "Response Copied!";
  setTimeout(() => {
    copyButton.textContent = "Copy Response";
  }, 2000); // Reset the button text after 2 seconds
}

function copyResponseOfUserDetail() {
  const resultDiv = document.getElementById("userDetailResult");
  const range = document.createRange();
  range.selectNode(resultDiv);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  // Add a visual cue to indicate the response has been copied
  const copyButton = document.getElementById("copyUserDetailResultButton");
  copyButton.textContent = "Response Copied!";
  setTimeout(() => {
    copyButton.textContent = "Copy Response";
  }, 2000); // Reset the button text after 2 seconds
}

// display functions

function displayData(data) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

function displayDataOfSignUp(data) {
  const resultDiv = document.getElementById("signUpResult");
  resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

function displayDataOfSignIn(data) {
  const resultDiv = document.getElementById("signInResult");
  resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

function displayDataOfUserList(data) {
  const resultDiv = document.getElementById("userListResult");
  resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

function displayDataOfUserDetail(data) {
  const resultDiv = document.getElementById("userDetailResult");
  resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

$(document).on("click", ".button-nav, .navigation-backdrop", function () {
  var $nav = $("#navigation-demo");
  var $hasClass = $nav.hasClass("open");

  if (!$hasClass) {
    $nav.addClass("open");
    $("body").append("<div class='navigation-backdrop'></div>");
  } else {
    $nav.removeClass("open");
    $(".navigation-backdrop").remove();
  }
});
