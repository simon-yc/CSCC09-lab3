if (!localStorage.getItem("blog")) {
  localStorage.setItem("blog", JSON.stringify({ next: 0, messages: [] }));
}

/*  ******* Data types *******
    
    message objects must have the following attributes:
        - (String) messageId
        - (String) username
        - (String) content
        - (Number) upvotes
        - (Number) downvotes

****************************** */

// get all messages
export function getMessages() {
  const blog = JSON.parse(localStorage.getItem("blog"));
  return blog.messages;
}

// add a message
export function addMessage(username, content) {
  const blog = JSON.parse(localStorage.getItem("blog"));
  const message = { id: blog.next++, 
                    username: username, 
                    content: content,
                    upvotes: 0,
                    downvotes: 0
                  };
  blog.messages.push(message);
  localStorage.setItem("blog", JSON.stringify(blog));
}

// upvote a message given its messageId
export function upvoteMessage(messageId) {
  const blog = JSON.parse(localStorage.getItem("blog"));
  const index = blog.messages.findIndex(function (message) {
    return message.id == messageId;
  });
  if (index == -1) return null;
  blog.messages[index].upvotes++;
  localStorage.setItem("blog", JSON.stringify(blog));
}

// downvote a message given its messageId
export function downvoteMessage(messageId) {
  const blog = JSON.parse(localStorage.getItem("blog"));
  const index = blog.messages.findIndex(function (message) {
    return message.id == messageId;
  });
  if (index == -1) return null;
  blog.messages[index].downvotes++;
  localStorage.setItem("blog", JSON.stringify(blog));
}

// delete a message given its messageId
export function deleteMessage(messageId) {
  const blog = JSON.parse(localStorage.getItem("blog"));
  const index = blog.messages.findIndex(function (message) {
    return message.id == messageId;
  });
  if (index == -1) return null;
  blog.messages.splice(index, 1);
  localStorage.setItem("blog", JSON.stringify(blog));
}
