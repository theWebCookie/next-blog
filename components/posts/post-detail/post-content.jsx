import PostHeader from './post-header';
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';

const post = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting started with NextJS',
  image: 'getting-started-nextjs.png',
  date: '2022-02-10',
  content: '# This is a fitst post',
};

const PostContent = () => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
