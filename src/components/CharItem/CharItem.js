import React from 'react'

import './CharItem.scss'
import { useDispatch, useSelector } from 'react-redux';
import { changeCharInfoModal, fetchCharacterById, selectChar } from '../../store/slices/charSlice';
import { useSearchParams } from 'react-router-dom';

function CharItem({ data }) {
    const { id = null, img = 'test', name = 'test' } = data;

    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedCharId = useSelector(state => state.charReducer.selectedCharId);

    const urlSelectedCharId = searchParams.get('characterId');

    function handlerCharItemClick() {
        if (window.document.documentElement.clientWidth <= 992) {
            dispatch(changeCharInfoModal(true))
        }
        if (id !== selectedCharId) {

            dispatch(selectChar(id));
            dispatch(fetchCharacterById({ id }))

            setSearchParams({
                characterId: id
            })
        }
    }

    const imgStyles = {
        objectFit: 'cover',
    }

    if (img === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyles.objectFit = 'unset'
    }

    return (
        <div
            onClick={handlerCharItemClick}
            tabIndex={0}
            className={`char-item ${(selectedCharId === id || urlSelectedCharId == id) ? 'active' : ''}`}>
            <img
                style={imgStyles}
                src={img}
                alt={name}
                className="char-item__img" />
            <div className="char-item__name">{name}</div>
        </div>
    )
}

export default CharItem