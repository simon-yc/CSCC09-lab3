import { getMessages, addMessage, upvoteMessage, downvoteMessage, deleteMessage } from "/js/api.mjs";

function update() {
  const messages = getMessages();
  document.querySelector("#messages").innerHTML = "";
  messages.forEach(function (message) {
    const elmt = document.createElement("div");
    elmt.className = "message";
    elmt.innerHTML = `
        <div class="message_user">
            <img class="message_picture" src="media/user.png" alt="${message.username}">
            <div class="message_username">${message.username}</div>
        </div>
        <div class="message_content">${message.content}</div>
        <div class="upvote-icon icon">${message.upvotes}</div>
        <div class="downvote-icon icon">${message.downvotes}</div>
        <div class="delete-icon icon"></div>
    `;
    elmt
      .querySelector(".upvote-icon")
      .addEventListener("click", function (e) {
        upvoteMessage(message.id);
        update();
      });
    
    elmt
      .querySelector(".downvote-icon")
      .addEventListener("click", function (e) {
        downvoteMessage(message.id);
        update();
      });

    elmt
      .querySelector(".delete-icon")
      .addEventListener("click", function (e) {
        deleteMessage(message.id);
        update();
      });
    document.querySelector("#messages").prepend(elmt);
  });
}

document.querySelector("#create_message_form").addEventListener("submit", function (e) {
  e.preventDefault();
    const username = document.getElementById("post_name").value;
    const content = document.getElementById("post_content").value;
    document.getElementById("create_message_form").reset();
  addMessage(username, content);
  update();
});

update();
