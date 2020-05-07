import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Layout from '../componentns/Layout';

const Story = ({ story, storyId }) => {
  if (!story) {
    return <Error status={503} />
  }
  return (
    <Layout title={story.title}>
      <main>
        <h1><a href={story.url}>{story.title}</a></h1>
        <div className="story-details">
          <strong>{story.points} points</strong>
          <strong>{story.comments_count} comments</strong>
          <strong>{story.time_ago}</strong>
        </div>
      </main>
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