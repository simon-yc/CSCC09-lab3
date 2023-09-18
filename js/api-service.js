let apiService = (function () {
  let module = {};

  /*  
    ******* Data types *******
    Message:
      Attributes:
        - (string) messageId 
        - (string) author
        - (string) content
        - (number) upvote
        - (number) downvote 
  */

  /**
   * Add a message
   * @param {string} author: the author of this message
   * @param {string} content: message content
   */
  module.addMessage = function (author, content) {};

  /**
   * Delete a message
   * @param {*} messageId message to be deleted
   */
  module.deleteMessage = function (messageId) {};

  /**
   * Return the latest messages using pagination.
   * 
   * page=0 returns the first 5 messages, page=1 returns the next 5 messages, etc.
   * 
   * @param {number} page: the page you are currently on
   * @param {number} limit: how many messages to retrieve per page
   */
  module.getMessages = function (page = 0, limit = 5) {};

  return module;
})();
