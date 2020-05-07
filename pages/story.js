import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Layout from '../componentns/Layout';

const Story = ({ story, storyId }) => {
  if (!story) {
    return <Error status={503} />
  }
  return (
    <Layout title={story.title} className>
      <main>
        <h1><a href={story.url}>{story.title}</a></h1>
        <div className="story-details">
          <strong>{story.points} points</strong>
          <strong>{story.comments_count} comments</strong>
          <strong>{story.time_ago}</strong>
        </div>
      </main>
      <style jsx>{`
        main {
          padding: 1em;
        }
        .story-title {
          font-size: 1.2rem;
          margin: 0;
          font-weight: 300;
          padding-bottom: 0.5em;
        }
        .story-title a:hover {
          text-decoration: underline;
        }
        .story-details {
          font-size: 0.8rem;
          padding-bottom: 1em;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          margin-bottom: 1em;
        }
        .story-details strong {
          margin-right: 1em;
        }
        .story-details a {
          color: #f60;
        }
      `}</style>
    </Layout>
  )
}

Story.getInitialProps = async ({ query }) => {
  const { id: storyId } = query;
  let story;
  try {
    const res = await fetch(`https://api.hnpwa.com/v0/item/${storyId}.json`)
    story = await res.json();
    console.log('story: ', story);
  } catch (err) {
    console.log(err);
    story = null;
  }
  
  return { story, storyId };
}

export default Story;