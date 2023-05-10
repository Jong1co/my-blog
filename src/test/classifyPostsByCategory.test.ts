import { PostCardInfo } from '@/types/post';
import { classifyPostsByCategory } from '@/utils/classifyPostsByCategory';
import { describe } from 'node:test';

describe('포스트 배열을 받아 {카테고리 : 갯수} 형태의 객체를 리턴하는 함수', () => {
  let post: PostCardInfo = {
    title: 'javascript',
    description: '안녕',
    date: '',
    category: ['javascript', 'python', 'react'],
    path: '/',
    featured: false,
    thumbnail: '',
  };

  it('카테고리의 이름과 갯수가 나타나야 함', () => {
    expect(classifyPostsByCategory([post])).toEqual({ javascript: 1, python: 1, react: 1 });
  });
  it('2개씩 중첩일 경우', () => {
    expect(classifyPostsByCategory([post, post])).toEqual({ javascript: 2, python: 2, react: 2 });
  });
});
