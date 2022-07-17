import React from 'react'

const Card = ({ children }) => {
  return (
    <div className='p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8'>
        {children}
    </div>
  )
}

const Body = ({children}) => {
    return (
        <div className='p-5'>
            {children}
        </div>
    )
}

const Title = ({children}) => {
    return (
        <div className='p-2 text-lg md:text-base italic'>
            {children}
        </div>
    )
}

const Subtitle = ({children}) => {
    return (
        <div className='p-2 text-gray-600'>
            {children}
        </div>
    )
}

const BlogTitle = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

const BlogPost = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

const CommentName = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

const CommentContent = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}



Card.Body = Body
Card.Title = Title
Card.Subtitle = Subtitle

export default Card