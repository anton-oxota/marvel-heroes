import React from 'react'
import RandomChar from '../../components/RandomChar/RandomChar'
import CharContent from '../../components/CharContent/CharContent'

function CharacterPage() {
    React.useEffect(() => {
        document.title = 'Marvel Heroes'
    })
    return (
        <>
            <main className='main'>
                <RandomChar />
                <CharContent />
            </main>
        </>
    )
}

export default CharacterPage