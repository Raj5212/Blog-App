// /src/components/BlogPostItem.tsx
import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

interface BlogPost {
  title: string;
  description: string;
  publishedAt: string;
  urlToImage: string;
  content: string;
}

interface Props {
  post: BlogPost;
  onClick: () => void;
}

const BlogPostItem: React.FC<Props> = ({ post, onClick }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', border: '1px solid #e0e0e0' }} className="card-hover">
      <CardActionArea onClick={onClick}>
        {post?.urlToImage && (
          <CardMedia
            component="img"
            height="140"
            image={post?.urlToImage}
            alt={post?.title}
          />
        )}
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {post?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {post?.description}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {new Date(post?.publishedAt).toLocaleDateString()}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <Box sx={{ p: 2 }}>
        <Link href="#" onClick={onClick} underline="always">
          See More
        </Link>
      </Box> */}
    </Card>
  );
};

export default BlogPostItem;
