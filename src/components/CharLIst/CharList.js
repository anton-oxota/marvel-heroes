import React from 'react'
import './CharList.scss'
import CharItem from '../CharItem/CharItem'
import { useDispatch, useSelector } from 'react-redux'
import { changeCharactersOffset, fetchCharacters } from '../../store/slices/charSlice';
import FindChar from '../FindChar/FindChar';
import CharInfoMobile from '../CharInfoMobile/CharInfoMobile';
import Loading from '../ui/Loading/Loading';
import ErrorMessage from '../ui/ErrorMessage/ErrorMessage';

function CharList() {

    const buttonActivity = React.useRef()
    buttonActivity.current = false;

    const dispatch = useDispatch();
    const characters = useSelector(state => state.charReducer.characters);
    const fetchCharacterStatus = useSelector(state => state.charReducer.charactersStatus);

    React.useEffect(() => {
        if (!characters.length) {
            dispatch(fetchCharacters())
        }
    }, [])

    const buttonStyles = {
        display: 'none'
    }

    const charItemElements = characters.map((item) => {
        return <CharItem key={item.id} data={item} />
    });

    function handlerLoadMobeButton() {
        dispatch(changeCharactersOffset(12))
        dispatch(fetchCharacters())
    }

    let content = charItemElements

    switch (fetchCharacterStatus) {
        case 'pending':
            buttonActivity.current = true;

            if (!characters.length) {
                content = <Loading />
                buttonStyles.display = 'none';

            } else {
                buttonStyles.display = 'block';
            }
            break;
        case 'fulfilled':
            buttonStyles.display = 'block';
            break;
        case 'rejected':
            content = <ErrorMessage>
                There's been an error. <br />
                Reload the page
            </ErrorMessage>
            break;

    }


    return (
        <section className="char-list">
            <div className="char-list__wrapper">
                {content}
            </div>
            <button
                onClick={handlerLoadMobeButton}
                disabled={buttonActivity.current}
                style={buttonStyles}
                className='button button--red char-list__more'>LOAD MORE</button>

            <FindChar classes='find-char--mobile' />
            <CharInfoMobile />
        </section>
    )
}



export default CharList