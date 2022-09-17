import React, { useEffect, useState } from 'react';
import PostServices from '../API/PostServices';

import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import Loader from '../components/UI/loader/Loader';
import MyModal from '../components/UI/modal/MyModal';
import { useFetching } from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';

import { getPageCount, getPagesArray } from '../utils/pages';

function Posts() {
  const [posts, setPosts] = React.useState([]);
  const [filter, setFilter] = React.useState({ sorted: '', query: '' });
  const [modal, setModal] = React.useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sorted, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchTasks, isLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostServices.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });
  let pagesArray = getPagesArray(totalPages);
  console.log([pagesArray]);

  useEffect(() => {
    fetchTasks(limit, page);
  }, []);

  const createNewPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    fetchTasks(limit, page);
  };

  return (
    <div className="App">
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createNewPost} />
      </MyModal>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create a new post
      </MyButton>
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Something went wrong ${postError}</h1>}
      <hr style={{ margin: '15px 0' }}></hr>
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <Loader />
        </div>
      ) : (
        <PostList remove={removePost} posts={sortedAndSearchedPosts} />
      )}

      <div className="page_wrapper">
        {pagesArray.map((p) => (
          <span
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? 'page page_current' : 'page'}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Posts;
