import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import StoryList from '../componentns/StoryList';
import Layout from '../componentns/Layout';
import Link from 'next/link';

const Index = ({ stories, page }) => {
  // console.log(stories);
  if (!stories || stories.length === 0) {
    return <Error statusCode={503} />
  }
  return (
    <Layout title="Hacker Next" description="A Hacker News clone made with Next.js">
      <StoryList stories={stories} />
      <footer>
        Page ({page}) > 
        <Link href={`/?page=${page}`}>
          <a> Next Page ({page + 1})</a>
        </Link>
      </footer>
    </Layout>
  )
}

Index.getInitialProps = async ({ req, res, query }) => {
  console.log('query: ', query);
  let page = Number(query.page) || 1;
  let stories;
  try {
    const res = await fetch(`https://api.hnpwa.com/v0/news/${page}.json`)
    stories = await res.json();
  } catch (err) {
    console.log(err);
    stories = [];
  }
  return { stories, page };
}

export default Index;