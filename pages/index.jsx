import FeaturedPosts from '@/components/home-page/featured-posts';
import Hero from '@/components/home-page/hero';
import { getFeaturedPosts } from '@/lib/posts-util';
import Head from 'next/head';

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Welcome to my Blog</title>
        <meta name='description' content='This is a blog about programming and web development.' />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;
