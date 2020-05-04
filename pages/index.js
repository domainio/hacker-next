import fetch from 'isomorphic-fetch';
import Error from 'next/error';

const Index = ({ stories }) => {
  console.log(stories);
  if (!stories || stories.length === 0) {
    return <Error statusCode={503} />
  }
  return (
    <div>
      <h1>hacker next</h1>
      <div>
        {stories.map(story => (
          <h2 key={story.id}>{story.title}</h2>
        ))}
      </div>
    </div>
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