import React from 'react'
import './CharContent.scss'
import CharList from '../CharLIst/CharList'
import CharInfo from '../CharInfo/CharInfo'
import FindChar from '../FindChar/FindChar'

function CharContent() {
    return (
        <section className='char-content'>
            <div className="container">
                <div className="char-content__wrapper">
                    <CharList />
                    <aside className='char-content__aside'>
                        <CharInfo />
                        <FindChar />
                    </aside>
                </div>
            </div>
        </section>
    )
}

export default CharContent