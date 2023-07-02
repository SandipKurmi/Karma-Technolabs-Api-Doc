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

// user update
document
  .getElementById("updateUserButton")
  .addEventListener("click", userUpdate);
document
  .getElementById("copyUpdateUserResultButton")
  .addEventListener("click", copyResponseOfUpdateUser);

// delete user
document
  .getElementById("deleteUserButton")
  .addEventListener("click", deleteUser);
document
  .getElementById("copyDeleteUserResultButton")
  .addEventListener("click", copyResponseOfDeleteUser);

// category
document
  .getElementById("createCategoryButton")
  .addEventListener("click", createCategory);
document
  .getElementById("copyCreateCategoryResultButton")
  .addEventListener("click", copyResponseOfCreateCategory);

document
  .getElementById("categoryListButton")
  .addEventListener("click", categoryList);
document
  .getElementById("copyCategoryListResultButton")
  .addEventListener("click", copyResponseOfCategoryList);

// category detail
document
  .getElementById("categoryDetailsButton")
  .addEventListener("click", categoryDetail);
document
  .getElementById("copyCategoryDetailsResultButton")
  .addEventListener("click", copyResponseOfCategoryDetail);

// updateCategoryButton
// copyUpdateCategoryResultButton
document
  .getElementById("updateCategoryButton")
  .addEventListener("click", updateCategory);
document
  .getElementById("copyUpdateCategoryResultButton")
  .addEventListener("click", copyResponseOfUpdateCategory);

// deleteCategoryButton
// copyDeleteCategoryResultButton

document
  .getElementById("deleteCategoryButton")
  .addEventListener("click", deleteCategory);
document
  .getElementById("copyDeleteCategoryResultButton")
  .addEventListener("click", copyResponseOfDeleteCategory);

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

function userUpdate() {
  const loader = document.getElementById("loaderUpdateUser");
  const resultDiv = document.getElementById("updateUserResult");

  // Show the loading indicator
  loader.style.display = "block";
  resultDiv.innerHTML = "";

  const tokenInput = document.getElementById("updateUserToken");
  const token = tokenInput.value;

  fetch(
    "https://karmatechnolabsapi.up.railway.app/api/user/649c35e730b810ec150aa8ed",
    {
      method: "PUT",
      body: JSON.stringify({
        userName: "Sandip Kurmi",
        password: "admin",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      displayDataOfUpdateUser(data);
      // Hide the loading indicator
      loader.style.display = "none";
    })
    .catch((error) => {
      console.log(error);
      // Hide the loading indicator
      loader.style.display = "none";
    });
}

function deleteUser() {
  const loader = document.getElementById("loaderDeleteUser");
  const resultDiv = document.getElementById("deleteUserResult");

  // Show the loading indicator
  loader.style.display = "block";
  resultDiv.innerHTML = "";

  const tokenInput = document.getElementById("deleteUserToken");
  const token = tokenInput.value;

  fetch(
    "https://karmatechnolabsapi.up.railway.app/api/user/649c35e730b810ec150aa8ed",
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      displayDataOfDeleteUser(data);
      // Hide the loading indicator
      loader.style.display = "none";
    })
    .catch((error) => {
      console.log(error);
      // Hide the loading indicator
      loader.style.display = "none";
    });
}

// category
function createCategory() {
  const loader = document.getElementById("loaderCreateCategory");
  const resultDiv = document.getElementById("createCategoryResult");

  // Show the loading indicator
  loader.style.display = "block";
  resultDiv.innerHTML = "";

  const nameInput = document.getElementById("createCategoryName");
  const name = nameInput.value;

  const descriptionInput = document.getElementById("createCategoryDescription");
  const description = descriptionInput.value;

  const tokenInput = document.getElementById("createCategoryToken");
  const token = tokenInput.value;

  fetch("https://karmatechnolabsapi.up.railway.app/api/category", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      description: description,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      displayDataOfCreateCategory(data);
      // Hide the loading indicator
      loader.style.display = "none";
    })
    .catch((error) => {
      console.log(error);
      // Hide the loading indicator
      loader.style.display = "none";
    });
}

function categoryList() {
  const loader = document.getElementById("loaderCategoryList");
  const resultDiv = document.getElementById("categoryListResult");

  // Show the loading indicator
  loader.style.display = "block";
  resultDiv.innerHTML = "";

  fetch("https://karmatechnolabsapi.up.railway.app/api/category", {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      displayDataOfCategoryList(data);
      // Hide the loading indicator
      loader.style.display = "none";
    })
    .catch((error) => {
      console.log(error);
      // Hide the loading indicator
      loader.style.display = "none";
    });
}

function categoryDetail() {
  const loader = document.getElementById("loaderCategoryDetail");
  const resultDiv = document.getElementById("categoryDetailResult");

  // Show the loading indicator
  loader.style.display = "block";
  resultDiv.innerHTML = "";

  fetch(
    "https://karmatechnolabsapi.up.railway.app/api/category/64820cbf878b2882b6604c69",
    {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      displayDataOfCategoryDetail(data);
      // Hide the loading indicator
      loader.style.display = "none";
    })
    .catch((error) => {
      console.log(error);
      // Hide the loading indicator
      loader.style.display = "none";
    });
}

function updateCategory() {
  const loader = document.getElementById("loaderUpdateCategory");
  const resultDiv = document.getElementById("updateCategoryResult");

  // Show the loading indicator
  loader.style.display = "block";
  resultDiv.innerHTML = "";

  const nameInput = document.getElementById("updateCategoryName");
  const name = nameInput.value;

  const descriptionInput = document.getElementById("updateCategoryDescription");
  const description = descriptionInput.value;

  // updateCategoryStatus
  const statusInput = document.getElementById("updateCategoryStatus");
  const status = statusInput.value;

  const tokenInput = document.getElementById("updateCategoryToken");
  const token = tokenInput.value;

  fetch(
    "https://karmatechnolabsapi.up.railway.app/api/category/64a13f1930b810ec150aa918",
    {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        description: description,
        status: status,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      displayDataOfUpdateCategory(data);
      // Hide the loading indicator
      loader.style.display = "none";
    })

    .catch((error) => {
      console.log(error);
      // Hide the loading indicator
      loader.style.display = "none";
    });
}

function deleteCategory() {
  const loader = document.getElementById("loaderDeleteCategory");
  const resultDiv = document.getElementById("deleteCategoryResult");

  // Show the loading indicator
  loader.style.display = "block";
  resultDiv.innerHTML = "";

  const tokenInput = document.getElementById("deleteCategoryToken");
  const token = tokenInput.value;

  fetch(
    "https://karmatechnolabsapi.up.railway.app/api/category/64a13f1930b810ec150aa918",
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      displayDataOfDeleteCategory(data);
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

function copyResponseOfUpdateUser() {
  const resultDiv = document.getElementById("updateUserResult");
  const range = document.createRange();

  range.selectNode(resultDiv);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  // Add a visual cue to indicate the response has been copied
  const copyButton = document.getElementById("copyUpdateUserResultButton");
  copyButton.textContent = "Response Copied!";
  setTimeout(() => {
    copyButton.textContent = "Copy Response";

    // Reset the button text after 2 seconds
  }, 2000);
}

function copyResponseOfDeleteUser() {
  const resultDiv = document.getElementById("deleteUserResult");
  const range = document.createRange();

  range.selectNode(resultDiv);
  window.getSelection().removeAllRanges();

  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  // Add a visual cue to indicate the response has been copied
  const copyButton = document.getElementById("copyDeleteUserResultButton");
  copyButton.textContent = "Response Copied!";
  setTimeout(() => {
    copyButton.textContent = "Copy Response";

    // Reset the button text after 2 seconds
  }, 2000);
}

// category
function copyResponseOfCreateCategory() {
  const resultDiv = document.getElementById("createCategoryResult");
  const range = document.createRange();

  range.selectNode(resultDiv);
  window.getSelection().removeAllRanges();

  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  // Add a visual cue to indicate the response has been copied
  const copyButton = document.getElementById("copyCreateCategoryResultButton");
  copyButton.textContent = "Response Copied!";
  setTimeout(() => {
    copyButton.textContent = "Copy Response";

    // Reset the button text after 2 seconds
  }, 2000);
}

function copyResponseOfCategoryList() {
  const resultDiv = document.getElementById("categoryListResult");
  const range = document.createRange();

  range.selectNode(resultDiv);
  window.getSelection().removeAllRanges();

  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  // Add a visual cue to indicate the response has been copied
  const copyButton = document.getElementById("copyCategoryListResultButton");
  copyButton.textContent = "Response Copied!";
  setTimeout(() => {
    copyButton.textContent = "Copy Response";

    // Reset the button text after 2 seconds
  }, 2000);
}

function copyResponseOfCategoryDetail() {
  const resultDiv = document.getElementById("categoryDetailResult");
  const range = document.createRange();

  range.selectNode(resultDiv);
  window.getSelection().removeAllRanges();

  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  // Add a visual cue to indicate the response has been copied
  const copyButton = document.getElementById("copyCategoryDetailsResultButton");
  copyButton.textContent = "Response Copied!";
  setTimeout(() => {
    copyButton.textContent = "Copy Response";

    // Reset the button text after 2 seconds
  }, 2000);
}

function copyResponseOfUpdateCategory() {
  const resultDiv = document.getElementById("updateCategoryResult");
  const range = document.createRange();

  range.selectNode(resultDiv);
  window.getSelection().removeAllRanges();

  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  // Add a visual cue to indicate the response has been copied
  const copyButton = document.getElementById("copyUpdateCategoryResultButton");
  copyButton.textContent = "Response Copied!";
  setTimeout(() => {
    copyButton.textContent = "Copy Response";

    // Reset the button text after 2 seconds
  }, 2000);
}

function copyResponseOfDeleteCategory() {
  const resultDiv = document.getElementById("deleteCategoryResult");
  const range = document.createRange();

  range.selectNode(resultDiv);
  window.getSelection().removeAllRanges();

  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  // Add a visual cue to indicate the response has been copied
  const copyButton = document.getElementById("copyDeleteCategoryResultButton");
  copyButton.textContent = "Response Copied!";
  setTimeout(() => {
    copyButton.textContent = "Copy Response";

    // Reset the button text after 2 seconds
  }, 2000);
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

function displayDataOfUpdateUser(data) {
  const resultDiv = document.getElementById("updateUserResult");
  resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

function displayDataOfDeleteUser(data) {
  const resultDiv = document.getElementById("deleteUserResult");
  resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

// category display
function displayDataOfCreateCategory(data) {
  const resultDiv = document.getElementById("createCategoryResult");
  resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

function displayDataOfCategoryList(data) {
  const resultDiv = document.getElementById("categoryListResult");
  resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

function displayDataOfCategoryDetail(data) {
  const resultDiv = document.getElementById("categoryDetailResult");
  resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

function displayDataOfUpdateCategory(data) {
  const resultDiv = document.getElementById("updateCategoryResult");
  resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

function displayDataOfDeleteCategory(data) {
  const resultDiv = document.getElementById("deleteCategoryResult");
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
