// /src/pages/HomePage.tsx
import React, { useState, useEffect } from 'react';
import { getBlogPosts } from '../../services/api';
import BlogPostList from '../../components/BlogPostList';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Box, Typography } from '@mui/material';
import Loader from '../../components/Loader';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getBlogPosts(page).then(data => {
        console.log({data})
      const filteredPosts = data?.articles.filter((post: any) =>  post?.author && post?.content && post?.title && post?.description);
      setPosts(filteredPosts);
      setLoading(false);
    });
  }, [page]);

  const handlePostClick = (post: any) => {
    navigate(`/post/${encodeURIComponent(post.title)}`, { state: { post } });
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Blog App
      </Typography>
      <Typography mb={3} variant="h5" align="center" gutterBottom>
        Latest News and Articles
      </Typography>
      {loading ? (
        <Loader />
      ) : (
        <>
          <BlogPostList posts={posts} onPostClick={handlePostClick} />
          <Box display="flex" justifyContent="center" mt={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setPage(page - 1)}
              disabled={page <= 1}
              sx={{ mr: 2 }}
            >
              Previous Page
            </Button>
            <Button variant="contained" color="primary" onClick={() => setPage(page + 1)}>
              Next Page
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default HomePage;
