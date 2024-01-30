import React from 'react'
import './CharInfoMobile.scss'
import CharInfo from '../CharInfo/CharInfo'
import { useDispatch, useSelector } from 'react-redux'
import { changeCharInfoModal } from '../../store/slices/charSlice';
import { useSearchParams } from 'react-router-dom';

function CharInfoMobile() {
    const dispatch = useDispatch();
    const charInfoModal = useSelector(state => state.charReducer.charInfoModal)

    const [searchParams] = useSearchParams();

    React.useEffect(() => {
        if (searchParams.get('characterId') &&
            window.document.documentElement.clientWidth <= 992) {
            dispatch(changeCharInfoModal(true))
        } else {
            dispatch(changeCharInfoModal(false))
        }
    }, [])

    function closeModal(e) {
        const target = e.target;

        if (target.getAttribute('data-modal-close')) {
            dispatch(changeCharInfoModal(false))
        }
    }

    return (
        <div
            data-modal-close
            onClick={closeModal}
            style={{
                visibility: charInfoModal ? 'visible' : 'hidden'
            }}
            className={`char-info-mobile ${charInfoModal ? 'active' : ''}`}>
            <CharInfo />
            <button
                className='char-info-mobile__button-close'
                data-modal-close
                onClick={closeModal}
            >
                <svg data-modal-close width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-modal-close fillRule="evenodd" clipRule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#fff" /></svg>
            </button>
        </div>
    )
}

export default CharInfoMobile