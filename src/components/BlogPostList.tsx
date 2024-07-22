// /src/components/BlogPostList.tsx
import React from 'react';
import { Grid } from '@mui/material';
import BlogPostItem from './BlogPostItem';

interface BlogPost {
  title: string;
  description: string;
  publishedAt: string;
  urlToImage: string;
  content: string;
}

interface Props {
  posts: BlogPost[];
  onPostClick: (post: BlogPost) => void;
}

const BlogPostList: React.FC<Props> = ({ posts, onPostClick }) => {
  return (
    <Grid container spacing={3}>
      {posts?.map((post, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <BlogPostItem post={post} onClick={() => onPostClick(post)} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogPostList;
