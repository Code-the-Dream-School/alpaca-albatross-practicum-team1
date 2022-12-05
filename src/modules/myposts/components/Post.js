import React, { useState } from 'react'
import { Edit } from './Edit'
import { View } from './View'
import PropTypes from 'prop-types'

export const Post = (data) => {
    const [isInEditMode, setInEditMode] = useState(false)

    console.log(isInEditMode, setInEditMode)

    const toggleEditMode = () => {
        setInEditMode(true)
    }

    const updatePost = () => {
        // Update Post with user edits
    }

    if (isInEditMode) {
        return (
            <Edit
                title={data.title}
                description={data.message}
                handleSubmit={updatePost}
            />
        )
    } else {
        return (
            <View
                title={data.title}
                description={data.message}
                handleClick={toggleEditMode}
            />
        )
    }
}
Post.propTypes = {
    data: PropTypes.object,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
