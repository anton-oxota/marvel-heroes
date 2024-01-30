import React from 'react'

function ErrorMessage({ classes, children }) {
    return (
        <div className='error-message'>
            {children}
        </div>
    )
}

export default ErrorMessage