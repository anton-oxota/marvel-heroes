import React from 'react'
import './SingleCharPage.scss'
import MarvelBanner from '../../components/MarvelBanner/MarvelBanner'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacterById, resetSelectedCharInitialState } from '../../store/slices/charSlice'
import Loading from '../../components/ui/Loading/Loading'
import ErrorMessage from '../../components/ui/ErrorMessage/ErrorMessage'

function SingleCharPage() {

    const dispatch = useDispatch();

    const { characterId } = useParams();
    const selectedCharData = useSelector(state => state.charReducer.selectedCharData);
    const selectedCharStatus = useSelector(state => state.charReducer.selectedCharStatus);


    React.useEffect(() => {
        dispatch(resetSelectedCharInitialState())
        dispatch(fetchCharacterById({ id: characterId }))
    }, [])

    let content;

    switch (selectedCharStatus) {
        case 'pending':
            content = <Loading />
            document.title = 'Loading...'
            break;
        case 'fulfilled':
            content = <View data={selectedCharData} />
            document.title = `${selectedCharData.name}`
            break;
        case 'rejected':
            content = <ErrorMessage>
                There's been an error. <br />
                Reload the page
            </ErrorMessage>
            document.title = 'Error'
            break;
    }

    return (
        <main className='main'>
            <MarvelBanner />

            <section className='char-page'>
                <div className="container">
                    <div className="char-page__wrapper">
                        {content}
                    </div>
                </div>
            </section>
        </main>
    )
}

function View({ data }) {

    const { img, name, description } = data
    return (
        <>
            <img src={img} alt={name} className="char-page__img" />
            <div className="char-page__content">
                <div className="char-page__name">{name}</div>
                <p className="char-page__descr">{description}</p>
            </div>
        </>
    )
}

export default SingleCharPage