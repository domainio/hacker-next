import Comment from './Comment';

const CommentList = ({ comments }) => {
  console.log('commnets 1: ', comments);
  return (
    <>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  )
}

export default CommentList;