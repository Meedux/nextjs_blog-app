import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { Container, Col, Row, Card, Button, Form } from 'react-bootstrap'
import { BsTrash } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import CommentItem from '../components/CommentItem'
import { useDispatch, useSelector } from 'react-redux'
import { addBlog, editAndUpdate, deleteBlog, setBlog, setBlogIDs, setBlogs, setState, setBlogID, setBlogEditState } from '../../app/redux/slice'
import Router from 'next/router'




export const getStaticPaths = async () => {
  const dispatch = useDispatch();
  dispatch(setBlogIDs())
  const paths = useSelector(state => state.blog.blogIDs)

  return{
    paths,
    fallback: false
  }
}

export const getServerSideProps = async (params) => {
  const dispatch = useDispatch();
  dispatch(setBlogID({ payload: { id: parseInt(params.id) } }))
  const data = dispatch(getBlog({ id: parseInt(params.id) }))
  return{
    props: {
      data
    }
  }
}


const BlogPage = ({ data }) => {
  const dispatch = useDispatch();
  const generateUniqueId = require('generate-unique-id');
  const [ commentName, setComName ] = useState('')
  const [ comment, setComment] = useState('')
  const today = new Date();
  const date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
  const id = useSelector(state => state.blog.blogID)

  //const nav = useNavigate();
  //const { id } = useParams()

  //const { blog, getBlog, getBlogs, deleteBlog, setEditBlog, setBlogID, editAndUpdate  } = useContext(BlogContext)
  //useEffect(()=>{
  //  getBlog(id)
  //  getBlogs()
  //}, [])

  const adBlogs = [];
  //const data = blog;

  function deleteAndExit(e){
    e.preventDefault()
    dispatch(deleteBlog({ payload: { id: data.id } })) // change
    Router.push('/blogs')
  }

  function updateBlog(e){
      e.preventDefault()
      dispatch(setBlogEditState({ payload: { editState: true } })) //change
      dispatch(setBlogID({ payload: { id: data.id } })) //change
      Router.push('/write')
  }


  function postComment(){
      const commentData = {
          commentID: generateUniqueId(),
          username: commentName,
          date_of_comment: date,
          comment: comment
      }

      data.comments.push(commentData)

      dispatch(editAndUpdate({ payload: { obj: data, id: data.id } })) //change
      //nav(`/blogs/${id}`)
      Router.push(`/blogs/${data.id}`)

      setComName('')
      setComment('')
  }

  if(!data){
    return(
      <h1>Content is Loading</h1>
    )
  }
  return (
      <>
          <Container>
            <Button variant="outline-dark" onClick={(e)=>deleteAndExit(e)}>
              <BsTrash size={20}/>
            </Button>
            <Button variant="outline-dark" onClick={(e)=>updateBlog(e)}>
              <AiFillEdit size={20}/>
            </Button>
            <Row>
              <Col sm={12} md={8} className="p-3">
                <Card className="text-center">
                  <Card.Title className="mt-3">
                    <h1>
                      {data.Title}
                    </h1>
                  </Card.Title>
                  <Card.Subtitle>
                    <h3>
                      Author: {data.author}
                    </h3>
                  </Card.Subtitle>
                  <Card.Body className="text-start py-4">
                    <p className="lead">
                      {data.paragraph}
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              {/* TODO: add blog items at the side of the page */}
            </Row>
            <Row>

              <Card className="mb-4 shadow-lg">
                <Form.Group className="mb-3">
                  <Form.Label>Enter Name</Form.Label>
                  <Form.Control id="comment-name" placeholder="Enter Name" onChange={(event) => setComName(event.target.value)} value={commentName}/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Enter Comment</Form.Label>
                  <Form.Control id="comment-name" placeholder="Enter Comment" onChange={(e) => setComment(e.target.value)} value={comment}/>
                </Form.Group>
                <div className="d-flex justify-content-end">
                  <button variant="outline-dark" onClick={(e)=>postComment()}>Submit Comment</button>
                </div>
              </Card>

              {data.comments != undefined && data.comments.map(item => (
                  <CommentItem key={item.commentID} item={item} />
                ))
              }
            </Row>
          </Container>
        </>
      )
  }

export default BlogPage