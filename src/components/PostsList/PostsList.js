/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { onFetch, removePostById, setActivePost } from '../../redux/actions';
import { PostItem } from '../index';
import { Container, Loading, Error } from './PostsList.styles';

function PostsList() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(onFetch());
  }, [dispatch]);

  function handleDismissPost(id) {
    dispatch(removePostById(id));
  }

  function handleActivePost(data) {
    dispatch(setActivePost(data));
  }

  return (
    <Container>
      {loading ? (
        <Loading>...loading</Loading>
      ) : (
        <>
          {error ? (
            <Error>...Error</Error>
          ) : (
            <AnimatePresence>
              {posts.map((data) => (
                <PostItem
                  key={data.id}
                  onDismissPost={() => handleDismissPost(data.id)}
                  onSetActivePost={() => handleActivePost(data)}
                  data={data}
                />
              ))}
            </AnimatePresence>
          )}
        </>
      )}
    </Container>
  );
}

export default PostsList;
