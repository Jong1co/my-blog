import CategoryGraph from './CategoryGraph';
import { MyInfo } from './MyInfo';
import { getClassifiedPosts } from '../../service/posts';
import { classifyPostsByCategory } from '@/utils/classifyPostsByCategory';

export const Banner = async () => {
  const posts = await getClassifiedPosts();

  const convertCategoryWithCount = () => {
    return Object.entries(classifyPostsByCategory(posts)).map(([category, count]) => ({ title: category, count }));
  };

  return (
    <section className="flex flex-col items-center justify-start w-full max-w-2xl px-4 pb-10 mx-auto whitespace-pre ">
      <MyInfo />
      <CategoryGraph category={convertCategoryWithCount()} />
    </section>
  );
};
