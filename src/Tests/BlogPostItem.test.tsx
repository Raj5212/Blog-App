import { render, screen, fireEvent } from '@testing-library/react';
import BlogPostItem from '../components/BlogPostItem';

test('renders blog post item and handles click', () => {
  const post = {
    title: 'Test Title',
    description: 'Test Description',
    publishedAt: '2023-07-22',
    urlToImage: 'https://example.com/image.jpg',
    content: 'Test Content',
  };
  const handleClick = jest.fn();
  render(<BlogPostItem post={post} onClick={handleClick} />);

  expect(screen.getByText('Test Title')).toBeInTheDocument();
  expect(screen.getByText('Test Description')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Test Title'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
