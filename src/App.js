import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onFetch, removePostById } from './redux/actions';
import { Layout, Post } from './components';

function App() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(onFetch());
  }, [dispatch]);

  function handleDismissPost(id) {
    dispatch(removePostById(id));
  }

  function Posts() {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return posts.map(({ id, ...rest }) => <Post key={id} onDismissPost={() => handleDismissPost(id)} {...rest} />);
  }
  function ActivePost() {
    return 'ActivePost';
  }

  // return (
  //   <div>
  //     <ol>
  //       {posts.map(({ title }) => (
  //         <li>{title}</li>
  //       ))}
  //     </ol>
  //   </div>
  // );
  return <Layout posts={<Posts />} activePost={<ActivePost />} />;
}

export default App;
