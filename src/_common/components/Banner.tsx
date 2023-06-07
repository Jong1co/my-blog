import { getAllCategories } from '@/service/posts';
import { MyInfo } from './MyInfo';

export const Banner = async () => {
  const category = await getAllCategories();

  return (
    <section className="flex flex-col items-center justify-start w-full max-w-2xl px-4 pb-10 mx-auto whitespace-pre ">
      <MyInfo />
    </section>
  );
};
