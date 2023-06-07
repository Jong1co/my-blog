import { getAllCategories } from '@/service/posts';
import CategoryGraph from './CategoryGraph';
import { MyInfo } from './MyInfo';

export const Banner = async () => {
  const category = await getAllCategories();
  console.log(category);

  return (
    <section className="flex flex-col items-center justify-start w-full max-w-2xl px-4 pb-10 mx-auto whitespace-pre ">
      <MyInfo />
      {/* <CategoryGraph category={category} /> */}
    </section>
  );
};
