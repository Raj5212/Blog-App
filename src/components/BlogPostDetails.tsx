
import React from 'react';
import { Button, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

interface BlogPost {
  title: string;
  description: string;
  publishedAt: string;
  urlToImage: string;
  content: string;
}

interface Props {
  post: BlogPost;
  onBack: () => void;
}

const BlogPostDetails: React.FC<Props> = ({ post, onBack }) => {
  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', mt: 4 }}>
      <Button variant="contained" color="primary" onClick={onBack} sx={{ mb: 2 }}>
        Back
      </Button>
      <Card>
        {post?.urlToImage && (
          <CardMedia
            component="img"
            height="400"
            image={post?.urlToImage}
            alt={post?.title}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {post?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {new Date(post?.publishedAt).toLocaleDateString()}
          </Typography>
          <Typography variant="body1" component="p" sx={{ mt: 2 }}>
            {post?.content}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BlogPostDetails;
