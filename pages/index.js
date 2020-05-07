import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import StoryList from '../componentns/StoryList';
import Layout from '../componentns/Layout';

const Index = ({ stories }) => {
  console.log(stories);
  if (!stories || stories.length === 0) {
    return <Error statusCode={503} />
  }
  return (
    <Layout title="Hacker Next" description="A Hacker News clone made with Next.js">
      <StoryList stories={stories} />
    </Layout>
  )
}

Index.getInitialProps = async () => {
  let stories;
  try {
    const res = await fetch('https://api.hnpwa.com/v0/news/1.json')
    stories = await res.json();
  } catch (err) {
    console.log(err);
    stories = [];
  }
  return { stories };
}

export default Index;