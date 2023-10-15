import React, { useState } from 'react';

export function ChatLog() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      const timestamp = new Date().toLocaleTimeString(); // Get the current timestamp
      const commentWithTimestamp = `${timestamp}: ${newComment}`;
      setComments([...comments, commentWithTimestamp]);
      setNewComment('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleCommentSubmit();
    }
  };

  return (
    <div>
      <h1>Chat Log</h1>
      <div className="text">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            {comment}
          </div>
        ))}
      </div>
      <div>
        <textarea className='chatbox'
          placeholder="Add a comment..."
          value={newComment}
          onChange={handleCommentChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

export default ChatLog;
