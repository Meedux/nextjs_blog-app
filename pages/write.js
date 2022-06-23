import React from 'react'
import { Container, Card, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useContext, useState , useEffect} from 'react'
import BlogContext from './../app/context'



const WriteBlog = ({  }) => {
    const nav = useNavigate()
    const { addBlog, editBlog, blog, getBlog, blogID, setBlogID, setEditBlog, editAndUpdate } = useContext(BlogContext)
    const generateUniqueId = require('generate-unique-id');

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

        console.log(data)


        addBlog(data)
        // document.getElementById('Title').value = '';
        // document.getElementById('description').value = ''
        // document.getElementById('author').value = ''
        // document.getElementById('paragraph').value = ''

        setTitle('')
        setDesc('')
        setAuthor('')
        setParagraph('')
        setKey('')


        nav(`/blogs/${id}`);
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

        editAndUpdate(data, blogID)

        setTitle('')
        setDesc('')
        setAuthor('')
        setParagraph('')
        setEditBlog(false)

        const tempID = blogID;

        setBlogID('')

        nav(`/blogs/${tempID}`)
    }

    useEffect(() => {
        if(editBlog){
            getBlog(blogID)
            setTitle(blog.Title)
            setDesc(blog.description)
            setAuthor(blog.author)
            setParagraph(blog.paragraph)
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