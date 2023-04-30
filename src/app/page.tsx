import { Banner } from '@/_common/components/Banner';
import { RecentPosts } from '../_common/components/RecentPosts';

export default function Home() {
  return (
    <section className="flex flex-col">
      <Banner />
      {/* @ts-expect-error Server Component */}
      <RecentPosts />
    </section>
  );
}
