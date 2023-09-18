"use strict";
document
  .getElementById("create-message-form")
  .addEventListener("submit", function (e) {
    // prevent from refreshing the page on submit
    e.preventDefault();
    // read form elements
    username = document.getElementById("post-name").value;
    content = document.getElementById("post-content").value;
    // clean form
    document.getElementById("create-message-form").reset();
    // create a new message element
    elmt = document.createElement("div");
    elmt.className = "message";
    elmt.innerHTML = `
      <div class="message-user">
          <img class="message-picture" src="media/user.png" alt="${username}">
          <div class="message-username">${username}</div>
      </div>
      <div class="message-content">${content}</div>
      <div class="upvote-icon icon">0</div>
      <div class="downvote-icon icon">0</div>
      <div class="delete-icon icon"></div>
  `;
    // add this element to the document
    document.getElementById("messages").prepend(elmt);
  });
