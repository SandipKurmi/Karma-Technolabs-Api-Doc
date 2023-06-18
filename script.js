document.getElementById("apiButton").addEventListener("click", fetchData);
document.getElementById("copyButton").addEventListener("click", copyResponse);
// signUpButton
document.getElementById("signUpButton").addEventListener("click", signUp);

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

function fetchData() {
  const loader = document.getElementById("loader");
  const resultDiv = document.getElementById("result");

  // Show the loading indicator
  loader.style.display = "block";
  resultDiv.innerHTML = "";

  fetch("https://karmatechnolabsapi.up.railway.app/api/users")
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
  const loader = document.getElementById("loader");
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

function displayData(data) {
  const resultDiv = document.getElementById("result");
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
