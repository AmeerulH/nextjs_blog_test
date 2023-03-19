import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Welcome to my portfolio website! I am a frontend developer with a
          passion for creating beautiful and intuitive user interfaces that
          enhance the user experience. Throughout my career, I have worked on a
          variety of projects ranging from e-commerce websites to mobile
          applications, and have experience using a wide range of technologies
          including HTML, CSS, JavaScript, React, and Angular. On this website,
          you will find examples of my work, showcasing my ability to create
          responsive designs, clean code, and seamless user experiences. You can
          also learn more about my background, skills, and work experience. I am
          always looking for new challenges and opportunities to work on
          exciting projects. If you're interested in working with me or have any
          questions, please don't hesitate to reach out!
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
