import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import PostDetails from './components/PostDetails/PostDetails';
import TimeLine from './components/TimeLine/TimeLine';

export const PostContext = createContext()

function App() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])

  return (
    <>

      <PostContext.Provider value={[post, setPost]}>

        <BrowserRouter>
          <Header></Header>
          <Routes>

            <Route path='/' element={<TimeLine />} />
            <Route path='/postDetails/:postId' element={<PostDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PostContext.Provider>
    </>
  );
}

export default App;
