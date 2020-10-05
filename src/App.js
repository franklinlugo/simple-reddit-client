import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onFetch } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(onFetch());
  }, [dispatch]);

  return (
    <div>
      <h1>App</h1>
      <ol>
        {posts.map(({ title }) => (
          <li>{title}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
