import React from 'react'
import MarvelBanner from '../../components/MarvelBanner/MarvelBanner'
import ComicList from '../../components/ComicList/ComicList'

function ComicsPage() {

    React.useEffect(() => {
        document.title = 'Comics'
    })


    return (
        <>
            <main className='main'>
                <MarvelBanner />
                <ComicList />
            </main>
        </>
    )
}

export default ComicsPage