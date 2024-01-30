import React from 'react'

import './RandomChar.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRandomCharacter } from '../../store/slices/charSlice';
import Loading from '../ui/Loading/Loading';
import ErrorMessage from '../ui/ErrorMessage/ErrorMessage';

function RandomChar() {

    const dispatch = useDispatch();
    const randomCharData = useSelector(state => state.charReducer.randomCharData);
    const randomCharStatus = useSelector(state => state.charReducer.randomCharStatus);


    React.useEffect(() => {
        dispatch(fetchRandomCharacter())
    }, [])


    let content;

    switch (randomCharStatus) {
        case 'pending':
            content = <Loading classes='random-char__loading' />
            break;
        case 'fulfilled':
            content = <View data={randomCharData} />
            break;
        case 'rejected':
            content = <ErrorMessage>
                There's been an error. <br />
                Reload the page or press the <span>"TRY IT"</span> button
            </ErrorMessage>
            break;
    }


    return (
        <section className="random-char">
            <div className="container">
                <div className="random-char__wrapper">
                    <div className="random-char__info">
                        {content}
                    </div>
                    <div className="random-char__try">
                        <div className="random-char__try-text">Random character for today!
                            Do you want to get to know him better?</div>
                        <div className="random-char__try-text">Or choose another one</div>
                        <button
                            onClick={() => { dispatch(fetchRandomCharacter()) }}
                            className="button button--red random-char__try-button">Try it</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

function View({ data }) {

    const { img, name, description, detailsUrl, wikiUrl } = data;
    return (
        <>
            <img
                src={img}
                alt={name}
                className="random-char__img"
                style={{
                    objectFit: img === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? 'contain' : 'cover'
                }} />
            <div className="random-char__content">
                <div className="random-char__name">{name}</div>
                <p className="random-char__descr">
                    {description.length > 190 ? description.slice(0, 190) + '...' : description}
                </p>
                <div className="random-char__links">
                    <a
                        href={detailsUrl}
                        target='_blank'
                        className="button button--red">HOMEPAGE</a>
                    <a
                        href={wikiUrl}
                        target='_blank'
                        className="button ">WIKI</a>
                </div>
            </div>
        </>
    )
}



export default RandomChar