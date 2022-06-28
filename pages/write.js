import React from 'react'
import { Container, Card, Form } from 'react-bootstrap'
import { useContext, useState , useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { changeEditState, getBlogs } from '../app/redux/slice'
import generateUniqueId from 'generate-unique-id'
import Router from 'next/router'
import { updateblog } from '../app/redux/slice'


const WriteBlog = () => {
    const { editState } = useSelector(state => state.blog)
    const [ editBlog, setEditBlog ] = useState({})
    
    const dispatch = useDispatch()
    const [id, setID] = useState(generateUniqueId())
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [author, setAuthor] = useState('')
    const [paragraph, setParagraph] = useState('')
    const [secret_key, setKey] = useState(generateUniqueId({
        length: 10,
        useLetters: true,
        useNumbers: true
    }))

    if(editState){
        setEditBlog(useSelector(state => state.blog.editableBlog))
    }
    
    function postBlog(e) {
        setKey(generateUniqueId({
            length: 10,
            useLetters: true,
            useNumbers: true
        }))

        const data = {
            id: id,
            Title: title,
            description: desc,
            author: author,
            paragraph: paragraph,
            comments: [],
            key: secret_key
        }



        dispatch(addBlog({ payload: { blog: data } })) //change

        setTitle('')
        setDesc('')
        setAuthor('')
        setParagraph('')
        setKey('')


        Router.push(`/blogs/${data.id}`);
    }


    function updateBlog(e){

        const data = {
            id: blogID,
            Title: title,
            description: desc,
            author: author,
            paragraph: paragraph,
            comments: [],
            key: secret_key
        }

        dispatch(updateblog({ payload: { obj: data, id: editableBlog.id } })) //change data, blogID
        dispatch(changeEditState({ payload: { editState: false,  } }))

        setTitle('')
        setDesc('')
        setAuthor('')
        setParagraph('')
        setEditBlog(false)

        const tempID = editableBlog.id;


        Router.push(`/blogs/${tempID}`)
    }

    useEffect(() => {
        if(editState){
            setTitle(editableBlog.Title)
            setDesc(editableBlog.description)
            setAuthor(editableBlog.author)
            setParagraph(editableBlog.paragraph)
        }
    }, [])


  return (
    <>
        <Container>
            <Card className="p-3">
                    <Form.Group className="mb-3">
                        <Form.Label>Blog Title</Form.Label>
                        <Form.Control id="Title" placeholder="Generic Title" onChange={(e) => setTitle(e.target.value)} value={title}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Author's Name</Form.Label>
                        <Form.Control id="author"  placeholder="Generic Name" onChange={(e) => setAuthor(e.target.value)} value={author}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Blog Description</Form.Label>
                        <Form.Control id="description" placeholder="Generic Description" onChange={(e) => setDesc(e.target.value)} value={desc}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Paragraph</Form.Label>
                        <Form.Control id="paragraph" as="textarea" onChange={(e) => setParagraph(e.target.value)} value={paragraph}/>
                    </Form.Group>

                    <div className="d-flex justify-content-center">
                        {editBlog ?<button className="btn btn-primary rounded" onClick={(e)=>updateBlog(e)}>Update Blog</button> :<button className="btn btn-dark rounded" onClick={(e)=>postBlog(e)}>Post Blog</button> }
                        
                    </div>
            </Card>
        </Container>
    </>
  )
}

export default WriteBlog