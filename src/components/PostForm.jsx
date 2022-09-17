import React from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = (props) => {
  const [post, setPost] = React.useState({
    title: '',
    body: '',
  });
  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };
    setPost({
      title: '',
      body: '',
    });
    props.create(newPost);
  };
  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Name of Task"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Description of Task"
      />
      <MyButton onClick={addNewPost}>Add Task</MyButton>
    </form>
  );
};

export default PostForm;
