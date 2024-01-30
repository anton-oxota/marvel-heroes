import React from 'react'

import './CharInfo.scss'
import CharInfoSkeleton from '../CharInfoSkeleton/CharInfoSkeleton'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacterById, resetSelectedCharInitialState } from '../../store/slices/charSlice'
import { Link, useSearchParams } from 'react-router-dom'
import Loading from '../ui/Loading/Loading'
import ErrorMessage from '../ui/ErrorMessage/ErrorMessage'

function CharInfo() {
    const selectedCharData = useSelector(state => state.charReducer.selectedCharData);
    const selectedCharStatus = useSelector(state => state.charReducer.selectedCharStatus);

    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();

    const urlCharId = searchParams.get('characterId');

    React.useEffect(() => {
        dispatch(resetSelectedCharInitialState())
        if (searchParams.has('characterId')) {
            dispatch(fetchCharacterById({ id: urlCharId }));
        }
    }, [])

    let content = <CharInfoSkeleton />

    switch (selectedCharStatus) {
        case 'pending':
            content = <Loading classes='char-info__loading' />
            break;
        case 'fulfilled':
            content = <View data={selectedCharData} />
            break;
        case 'rejected':
            content = <ErrorMessage>
                There's been an error. <br />
                Reload the page
            </ErrorMessage>
            break;

    }

    return (
        <div className="char-info">
            {content}
        </div>
    )
}

function View({ data }) {

    const { img, name, wikiUrl, detailsUrl, description, comics } = data;

    const comicsListElemetn = comics.length ? comics.map(item => {
        const str = 'http://gateway.marvel.com/v1/public/comics/'
        const comicId = item.resourceURI.replace(str, '')
        return <Link
            to={`comics/${comicId}`}
            key={item.name}
            className="char-info__comics-item">{item.name}</Link>
    }) : 'no comics'


    return (
        <>
            <div className="char-info__header">
                <img className='char-info__img' src={img} alt={name} />
                <div className="char-info__header-wrapper">
                    <div className="char-info__name">{name}</div>
                    <div className="char-info__actions">
                        <a target='_blank' href={detailsUrl} className='button button--red'>HOMEPAGE</a>
                        <a target='_blank' href={wikiUrl} className='button'>WIKI</a>
                    </div>
                </div>
            </div>

            <p className="char-info__descr">{description}</p>

            <div className="char-info__comics">Comics:</div>

            <ul className="char-info__comics-list">
                {
                    comicsListElemetn
                }
            </ul>
        </>
    )
}

export default CharInfo