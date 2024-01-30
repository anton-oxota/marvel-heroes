import React from 'react'

import './SingleComicPage.scss'

import { useNavigate, useParams } from 'react-router-dom'
import MarvelBanner from '../../components/MarvelBanner/MarvelBanner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComic } from '../../store/slices/comicSlice';
import Loading from '../../components/ui/Loading/Loading';
import ErrorMessage from '../../components/ui/ErrorMessage/ErrorMessage';

function SingleComicPage() {

    const navigate = useNavigate();
    const { comicId } = useParams();

    const dispatch = useDispatch();
    const comicData = useSelector(state => state.comicReducer.comicData)
    const fetchComicStatus = useSelector(state => state.comicReducer.fetchComicStatus)

    React.useEffect(() => {
        dispatch(fetchComic({ id: comicId }))
    }, [])


    let content

    switch (fetchComicStatus) {
        case 'pending':
            content = <Loading />
            document.title = 'Loading...'
            break;
        case 'fulfilled':
            content = <View data={comicData} navigate={navigate} />
            document.title = `${comicData.title}`
            break;
        case 'rejected':
            content = <ErrorMessage>
                There's been an error. <br />
                Reload the page
            </ErrorMessage>
            document.title = 'Loading...'
            break;

    }


    return (
        <main className='main'>
            <MarvelBanner />

            <section className='comic'>
                <div className="container">
                    <div className="comic__wrapper">
                        {content}
                    </div>
                </div>
            </section>
        </main>
    )
}

function View({ data, navigate }) {

    const { img, title, description, pageCount, language, price } = data;

    const pageCountElement = pageCount ? <div className="comic__pages">{pageCount} pages</div> : null;
    const languageElement = language ? <div className="comic__lang">Language: {language}</div> : null;


    return (
        <>
            <img src={img} alt={title} className="comic__img" />
            <div className="comic__content">
                <div className="comic__title">{title}</div>
                <p className="comic__descr">{description}</p>
                {pageCountElement}
                {languageElement}
                <div className="comic__price">{price}</div>

            </div >
            <button
                onClick={() => { navigate('/comics') }}
                className='comic__button-back'
            >Back to all</button>
        </>
    )
}

export default SingleComicPage