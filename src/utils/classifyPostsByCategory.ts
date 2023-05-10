import { PostCardInfo } from './../types/post.d';

export type CountByCategory = { [category: string]: number };

export const classifyPostsByCategory = (posts: PostCardInfo[]): CountByCategory => {
  return posts.reduce((accr, curr) => {
    let prev: CountByCategory = { ...accr };

    curr.category.forEach((tag) => {
      prev = { ...prev, [tag]: (prev[tag] ?? 0) + 1 };
    });

    return { ...prev };
  }, {});
};
