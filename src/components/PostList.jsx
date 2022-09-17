import PostItem from './PostItem';
import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PostList = ({ posts, remove }) => {
  if (!posts.length) {
    return (
      <h2 style={{ textAlign: 'center', margin: '15px' }}>
        List is empty, or not found. Please add tasks
      </h2>
    );
  }
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Todo List</h2>
      <TransitionGroup>
        {posts.map((item, index) => (
          <CSSTransition key={item.id} timeout={500} classNames="post">
            <PostItem remove={remove} post={item} number={index + 1} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
