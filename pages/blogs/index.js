import React from 'react'
import { Container, Card } from 'react-bootstrap'
import BlogCard from '../../components/BlogCard'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { getBlogs } from '../../app/redux/slice'



export const getServerSideProps = async () => {
  const dispatch = useDispatch()
  dispatch(getBlogs())
  const blogs = useSelector(state => state.blogs)
  return {
    props: {
      blogs
    }
  }
}

const Blogs = ({ blogs }) => {
  const dispatch = useDispatch()

  //const { getBlogs, blogs } = useContext(BlogContext);
  //useEffect(()=>{
  //  getBlogs()
  //}, [])

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