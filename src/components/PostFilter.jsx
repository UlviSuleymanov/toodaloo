import React from 'react';
import MySelect from '../components/UI/select/MySelect';
import MyInput from './UI/input/MyInput';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        placeholder="Search"
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) => setFilter({ ...filter, sorted: selectedSort })}
        defaultValue="Sort"
        options={[
          { value: 'title', name: 'by Name' },
          { value: 'body', name: 'by Discription' },
        ]}
      />
    </div>
  );
};

export default PostFilter;
