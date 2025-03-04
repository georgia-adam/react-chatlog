import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const messageAlign =
    props.sender === 'Estragon' ? 'chat-entry remote' : 'chat-entry local';

  const onLikeButtonClick = () => {
    const updatedData = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.isLiked,
    };

    props.onUpdate(updatedData);
  };

  const likeButton = props.isLiked ? '❤️' : '🤍';

  return (
    <div className={messageAlign}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button onClick={onLikeButtonClick} className="like">
          {likeButton}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  isLiked: PropTypes.bool,
  onUpdate: PropTypes.func,
};

export default ChatEntry;
