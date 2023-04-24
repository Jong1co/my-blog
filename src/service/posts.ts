import path from 'path';
import { promises as fs } from 'fs';
import { PostCardInfo } from '@/types/post';

export const getPosts = async (query: string = ''): Promise<PostCardInfo[]> => {
  const filepath = path.join(process.cwd(), 'src', 'data', 'posts.json');
  const data = await fs.readFile(filepath, 'utf-8');
  const posts: PostCardInfo[] = await JSON.parse(data);

  if (query === '') {
    return posts.map((post) => {
      return { ...post, thumbnail: `/images/posts/${post.path}.png` };
    });
  }

  return posts
    .filter((post) => post.category.map((tag) => tag.toLowerCase()).includes(query))
    .map((post) => {
      return { ...post, thumbnail: `/images/posts/${post.path}.png` };
    });
};
