import React from 'react'
import { Card } from 'react-bootstrap'
import Link from 'next/link'

const BlogCard = ({ id, Title, description, author }) => {
  return (
    <Card className="d-block d-md-inline-block m-4 p-3 shadow-sm hover" style={{width: "18rem"}}>
      <Card.Title className="mb-5">
        <h3>
          {Title}
        </h3>
      </Card.Title>
      <Card.Subtitle className="mb-3">
        <p className="lead mb-3">
          {description}
        </p>
        <h5>Author: </h5>{author}
      </Card.Subtitle>
      {/* <Card.Body style={{textOverflow: "ellipsis"}}>
        <p className="lead">{item.paragraph}</p>
      </Card.Body> */}
      <Link to={`${id}`} className="btn btn-outline-dark">
        Read More
      </Link>
    </Card>
  )
}

export default BlogCard