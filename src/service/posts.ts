import path from 'path';
import { promises as fs } from 'fs';
import { PostCardInfo } from '@/types/post';
import { cache } from 'react';

export const getAllPosts = cache(async (query: string = ''): Promise<PostCardInfo[]> => {
  const filepath = path.join(process.cwd(), 'src', 'data', 'posts.json');
  const posts = await fs
    .readFile(filepath, 'utf-8')
    .then<PostCardInfo[]>(JSON.parse)
    .then((posts) => posts.map((post) => ({ ...post, thumbnail: `/images/posts/${post.path}.png` })))
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));

  return posts;
});

export const getFeaturedPosts = async () => {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
};

export const getClassifiedPosts = async (query: string = '') => {
  return getFeaturedPosts().then<PostCardInfo[]>((posts) => {
    if (query === '') return posts;

    return posts.filter((post) => post.category.includes(query));
  });
};

export const getPostTitle = async (path: string): Promise<Partial<PostCardInfo>> => {
  return getAllPosts()
    .then((posts) => posts.find((post) => post.path === path))
    .then((post) => ({ title: post?.title, description: post?.description }));
};

type NearbyPosts = {
  nextPost: PostCardInfo | null;
  prevPost: PostCardInfo | null;
};

export const getNearbyPosts = async (path: string): Promise<NearbyPosts> => {
  return getFeaturedPosts().then((posts) => {
    const currentIndex = posts.findIndex((post) => post.path === path);

    const nearbyPosts: NearbyPosts = { nextPost: posts[currentIndex - 1] || null, prevPost: posts[currentIndex + 1] || null };
    return nearbyPosts;
  });
};
