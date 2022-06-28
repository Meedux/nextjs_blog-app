import React from 'react'
import { useState } from 'react'
import { Container, Col, Row, Card, Button, Form } from 'react-bootstrap'
import { BsTrash } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import CommentItem from '../../components/CommentItem'
import { useDispatch, useSelector } from 'react-redux'
import { blogSlice } from '../../app/redux/slice'
import { useRouter } from 'next/router'
import { addblog, updateblog, deleteBlog, changeEditState } from '../../app/redux/slice'
import Router from 'next/router'
import axios from 'axios'



export async function getStaticPaths(){
  const response = await axios.get('http://localhost:1000/blog');
  const data = await response.data;

  const paths = data.map(item => { return { params: { id: String(item.id) } }})

  return{
    paths,
    fallback: false
  }
}


export async function getStaticProps({ params }){
  const response = await axios.get(`http://localhost:1000/blog/${params.id}`);
  const data = await response.data;

  return {
    props:{
      data
    }
  }
}


const BlogPage = ({ data }) => {
  const dispatch = useDispatch();
  const router = useRouter()
  const generateUniqueId = require('generate-unique-id');
  const [ commentName, setComName ] = useState('')
  const [ comment, setComment] = useState('')
  const today = new Date();
  const date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
  // const { id } = router.query


  const adBlogs = [];
  //const data = blog;

  function deleteAndExit(e){
    dispatch(deleteBlog({ payload: { id: data.id } }))
    Router.push('/blogs')
  }

  function updateBlog(e){ 
      dispatch(changeEditState({editState: true, editBlog: data })) 
      Router.push('../write')
  }


  function postComment(){
      const commentData = {
          commentID: generateUniqueId(),
          username: commentName,
          date_of_comment: date,
          comment: comment
      }

      data.comments.push(commentData)

      dispatch(updateblog({ obj: data }))
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