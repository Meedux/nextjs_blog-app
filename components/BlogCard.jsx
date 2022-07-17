import React from 'react'
import Link from 'next/link'
import Card from './styled/Card'

const BlogCard = ({ id, Title, description, author }) => {
  return (
    <Card className="d-block d-md-inline-block m-4 p-3 shadow-sm hover" style={{width: "18rem"}}>
      <Card.Title>
        <h3 className='font-bold'>
          {Title}
        </h3>
      </Card.Title>
      <Card.Subtitle>
        <p className="lead mb-3">
          {description}
        </p>
        <h5>Author: </h5>{author}
      </Card.Subtitle>
      {/* <Card.Body style={{textOverflow: "ellipsis"}}>
        <p className="lead">{item.paragraph}</p>
      </Card.Body> */}
      <Link href={`/blogs/${id}`} >
          <a className="btn btn-outline-dark">Read More</a>
      </Link>
    </Card>
  )
}

export default BlogCard