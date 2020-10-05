/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { onFetch, removePostById } from '../../redux/actions';
import { Post } from '../index';

function Posts() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(onFetch());
  }, [dispatch]);

  function handleDismissPost(id) {
    dispatch(removePostById(id));
  }

  return (
    <AnimatePresence>
      {posts.map(({ id, ...rest }) => (
        <Post key={id} onDismissPost={() => handleDismissPost(id)} {...rest} />
      ))}
    </AnimatePresence>
  );
}

export default Posts;
