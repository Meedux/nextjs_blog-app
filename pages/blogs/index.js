import React from 'react'
import BlogCard from '../../components/BlogCard'
import Container from '../../components/styled/Container';
import axios from 'axios'

export async function getServerSideProps(){
  const response = await axios.get('http://localhost:1000/blog');
  const blogs = await response.data;
  return {
    props: {
      blogs
    }
  }
}


const Blogs = ({ blogs }) => {

  
  if(!blogs){
    return(
      <>
        <h1>Loading</h1>
      </>
    )
  }

  if(blogs.length === 0){
    return(
      <>
        <h1>Loading</h1>
      </>
    )
  }else{
    return (
      <>
        <Container>
          <div className="card-deck">
            {blogs.map(item => {
              return (
                <BlogCard
                key={item.id}
                  id={item.id}
                  Title={item.Title}
                  author={item.author}
                  description={item.description}
                />
             
                )
            })}
          </div>
        </Container>
      </>
    )
  }
}

export default Blogs