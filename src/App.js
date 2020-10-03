import React, { useEffect, useState } from 'react';
import { getTopPost } from './services';

function App() {
  const [topPosts, setTopPosts] = useState([]);

  useEffect(() => {
    (async () => {
      setTopPosts(await getTopPost());
    })();
  }, []);

  return (
    <div>
      <h1>App</h1>
      <ol>
        {topPosts.map(({ title }) => (
          <li>{title}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
