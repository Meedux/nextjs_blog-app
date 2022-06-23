import React from 'react'

const CommentItem = ({ item }) => {
  return (
    <Card className="p-3 h-50">
      <Card.Title>
        {item.date_of_comment}
        <h4>{item.username}</h4>
      </Card.Title>
      <Card.Body>
        <p className="lead">{item.comment}</p>
      </Card.Body>
    </Card>
  )
}

export default CommentItem