//[...posts] -> means it can catch all routes. eg:- /blog/posts/learn-java or /blog/posts/learn/python

//[[...posts]] -> means it can catch all but now posts is optinal. eg:- /blog/learn-java or /blog/learn/python/anything

//params:- ['posts', 'learn-java']

const Posts = ({ params }) => {
  return <div>Posts</div>;
};

export default Posts;
