import { useMemo } from 'react';

export const useSortedPosts = (posts, sorted) => {
  const sortedPosts = useMemo(() => {
    if (sorted) {
      return [...posts].sort((a, b) => a[sorted].localeCompare(b[sorted]));
    }
    return posts;
  }, [sorted, posts]);
  return sortedPosts;
};

export const usePosts = (posts, sorted, query) => {
  const sortedPosts = useSortedPosts(posts, sorted);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()));
  }, [query, sortedPosts]);
  return sortedAndSearchedPosts;
};
