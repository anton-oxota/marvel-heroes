import React from 'react'
import './ComicList.scss'

import ComicItem from '../ComicItem/ComicItem'
import { useDispatch, useSelector } from 'react-redux'
import { changeComicsOffset, fetchComics } from '../../store/slices/comicSlice';
import Loading from '../ui/Loading/Loading';
import ErrorMessage from '../ui/ErrorMessage/ErrorMessage';

function ComicList() {

    const buttonActivity = React.useRef();
    buttonActivity.current = false

    const dispatch = useDispatch();
    const comicsData = useSelector(state => state.comicReducer.comicsData);
    const fetchComicsStatus = useSelector(state => state.comicReducer.fetchComicsStatus)

    React.useEffect(() => {
        if (!comicsData.length) {
            dispatch(fetchComics())
        }
    }, [])


    const comiscItemElements = comicsData.map((item, index) => {
        return <ComicItem key={index} data={item} />
    })

    let content = comiscItemElements

    const buttonStyles = {
        display: 'none'
    }

    switch (fetchComicsStatus) {
        case 'pending':
            if (!comicsData.length) {
                content = <Loading classes='comic-list__loading' />
            } else {
                content = comiscItemElements
                buttonStyles.display = 'block';
                buttonActivity.current = true
            }
            break;
        case 'fulfilled':
            buttonStyles.display = 'block'
            break;
        case 'rejected':
            content = <ErrorMessage>There's been an error. <br />
                Reload the page</ErrorMessage>
            break;

    }

    function handlerLoadMobeButton() {
        dispatch(changeComicsOffset(20))
        dispatch(fetchComics())
    }

    return (
        <section className="comic-list">
            <div className="container">
                <div className="comic-list__wrapper">
                    {content}
                </div>

                <button
                    onClick={handlerLoadMobeButton}
                    style={buttonStyles}
                    disabled={buttonActivity.current}
                    className='button button--red comic-list__button'>Load More</button>
            </div>
        </section>
    )
}

export default ComicList