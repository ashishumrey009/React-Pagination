import React,{useState,useEffect} from 'react';
import axios from 'axios'
import './App.css';
import { Posts } from './components/Posts';
import { Pagination } from './components/Pagination';

function App() {
  const [post,setPosts] = useState([])
  const[loading,setLoading] = useState(false)
  const[currentPage,setCurrentPage]= useState(1);
  const [postPerPage,setPostPerPage] = useState(30)

  useEffect(()=>{
    const fetchPosts = async()=>{
    setLoading(true)
    //const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const res = await axios.get('https://data.cityofnewyork.us/resource/h9gi-nx95.json')
    setPosts(res.data)
    setLoading(false)
    }
    fetchPosts()
  },[])

  //get current posts
  const indexOfLastPost = currentPage *postPerPage;
  const indexOfFirstPost = indexOfLastPost-postPerPage;
  const currentPosts = post.slice(indexOfFirstPost,indexOfLastPost)
  console.log(post)


  const paginate =(pageNumber) =>setCurrentPage(pageNumber)
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My bllog</h1>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postsPerPage={postPerPage} totalPosts={post.length} paginate={paginate} />
    </div>
  );
}

export default App;
