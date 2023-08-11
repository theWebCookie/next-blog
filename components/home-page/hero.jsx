import Image from 'next/image';
import classes from './hero.module.css';
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src='/images/site/cookie.jpg' alt='An image showing cookie' width={300} height={300} />
      </div>
      <h1>Hello, I'm theWebCookie</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, esse laborum. Nobis quae voluptatum alias.</p>
    </section>
  );
};

export default Hero;
