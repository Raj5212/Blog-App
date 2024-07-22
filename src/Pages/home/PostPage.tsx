
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BlogPostDetails from '../../components/BlogPostDetails';
import { Container } from '@mui/material';

const PostPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { post } = location.state as any;

  return (
    <Container>
      <BlogPostDetails post={post} onBack={() => navigate(-1)} />
    </Container>
  );
};

export default PostPage;
