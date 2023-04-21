import { Banner } from '@/_common/Banner';
import { RecentPosts } from './components/RecentPosts';

export default function Home() {
  return (
    <section>
      <Banner />
      <RecentPosts />
    </section>
  );
}
