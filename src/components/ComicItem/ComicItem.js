import React from 'react'

import './ComicItem.scss'
import { Link } from 'react-router-dom'

function ComicItem({ data }) {
    const { id = 0, title = 'test', price = 0, img = null } = data;

    const imgStyles = {
        objectFit: 'cover',
    }

    if (img === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyles.objectFit = 'unset'
    }

    return (
        <Link to={`/comics/${id}`} className="comic-item">
            <img style={imgStyles} src={img} alt={title} className="comic-item__img" />
            <div className="comic-item__title">{title}</div>
            <div className="comic-item__price">{price}</div>
        </Link>
    )
}

export default ComicItem