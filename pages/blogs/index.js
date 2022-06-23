import React from 'react'
import { useContext, useEffect } from 'react'
import { Container, Card } from 'react-bootstrap'
import BlogContext from '../app/context'
import BlogCard from './../components/BlogCard'

export const getServerSideProps = async () => {
  return {
    params: {

    }
  }
}

const Blogs = ({ params }) => {
  const { getBlogs, blogs } = useContext(BlogContext);
  useEffect(()=>{
    getBlogs()
  }, [])

  if(blogs.length == 0){
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