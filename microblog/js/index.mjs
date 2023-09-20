document
  .getElementById("create_message_form")
  .addEventListener("submit", function (e) {
    // prevent from refreshing the page on submit
    e.preventDefault();
    // read form elements
    const username = document.getElementById("post_name").value;
    const content = document.getElementById("post_content").value;
    // clean form
    document.getElementById("create_message_form").reset();
    // create a new message element
    const elmt = document.createElement("div");
    elmt.className = "message";
    elmt.innerHTML = `
        <div class="message_user">
            <img class="message_picture" src="media/user.png" alt="${username}">
            <div class="message_username">${username}</div>
        </div>
        <div class="message_content">${content}</div>
        <div class="upvote-icon icon">0</div>
        <div class="downvote-icon icon">0</div>
        <div class="delete-icon icon"></div>
    `;

    // add an event listener for the upvote icon
    const upvote = elmt.querySelector(".upvote-icon");
    upvote.addEventListener("click", () => {
      upvote.textContent = parseInt(upvote.textContent) + 1;
    });

    // add an event listener for the downvote icon
    const downvote = elmt.querySelector(".downvote-icon");
    downvote.addEventListener("click", () => {
      downvote.textContent = parseInt(downvote.textContent) + 1;
    });

    // add an event listener for the delete icon
    const del = elmt.querySelector(".delete-icon");
    del.addEventListener("click", () => {
      elmt.remove();
    });

    // add this element to the document
    document.getElementById("messages").prepend(elmt);
    
  });
