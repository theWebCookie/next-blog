import FeaturedPosts from '@/components/home-page/featured-posts';
import Hero from '@/components/home-page/hero';

const arr = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10',
  },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={arr} />
    </>
  );
};

export default HomePage;
