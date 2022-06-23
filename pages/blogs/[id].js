import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { Container, Col, Row, Card, Button, Form } from 'react-bootstrap'
import BlogContext from '../app/context'
import { BsTrash } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import CommentItem from '../components/CommentItem'

export const getStaticPaths = async () => {

  return{
    params: {
      
    }
  }
}

export const getServerSideProps = async (params) => {
  return{
    props: {

    }
  }
}


const BlogPage = () => {
  const generateUniqueId = require('generate-unique-id');
  const [ commentName, setComName ] = useState('')
  const [ comment, setComment] = useState('')
  const today = new Date();
  const date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();

  const nav = useNavigate();
  const { id } = useParams()
  const { blog, getBlog, getBlogs, deleteBlog, setEditBlog, setBlogID, editAndUpdate  } = useContext(BlogContext)
  useEffect(()=>{
    getBlog(id)
    getBlogs()
  }, [])
  const adBlogs = [];
  const data = blog;

  function deleteAndExit(e){
    e.preventDefault()
    deleteBlog(id)
    nav('/blogs')
  }

  function updateBlog(e){
      e.preventDefault()
      setEditBlog(true)
      setBlogID(data.id)
      nav('/write')
  }


  function postComment(){
      const commentData = {
          commentID: generateUniqueId(),
          username: commentName,
          date_of_comment: date,
          comment: comment
      }

      data.comments.push(commentData)

      editAndUpdate(data, id)
      nav(`/blogs/${id}`)

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