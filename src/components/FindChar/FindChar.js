import React from 'react'

import './FindChar.scss'
import { useDispatch, useSelector } from 'react-redux'
import { changeFindCharacterStatus, fetchCharacterByName } from '../../store/slices/charSlice';
import { Link } from 'react-router-dom';

function FindChar({ classes }) {
    const buttonActivity = React.useRef();
    buttonActivity.current = false

    const [isValidate, setIsValidate] = React.useState(true)

    const dispatch = useDispatch();

    const findCharacterStatus = useSelector(state => state.charReducer.findCharacterStatus)
    const findCharacterData = useSelector(state => state.charReducer.findCharacterData)

    React.useEffect(() => {
        dispatch(changeFindCharacterStatus('idle'))
    }, [])

    function handlerSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const input = form.name;

        if (!input.value.trim()) {
            setIsValidate(false)
        } else {
            setIsValidate(true)
            dispatch(fetchCharacterByName({ name: input.value }))
        }
    }

    let content;

    switch (findCharacterStatus) {
        case 'pending':
            buttonActivity.current = true
            break;
        case 'fulfilled':
            content = (
                <div className="find-char__message-wrapper">
                    <div className='find-char__message find-char__message--ok'>
                        {`There is! Visit ${findCharacterData.name} page?`}
                    </div>
                    <Link className='button find-char__button-page' to={`/character/${findCharacterData.id}`}>TO PAGE</Link>
                </div>)
            break;
        case 'rejected':
            content = (
                <div className="find-char__message-wrapper">
                    <div className='find-char__message find-char__message--error'>
                        The character was not found. Check the name and try again
                    </div>
                </div>)
            break;
    }


    return (
        <div className={`find-char ${classes}`}>
            <div className="find-char__title">Or find a character by name:</div>
            <form
                onSubmit={handlerSubmit}
                action=""
                className="find-char__form">
                <input
                    type="text"
                    placeholder='Enter name'
                    name='name'
                    className="find-char__input" />
                <button
                    disabled={buttonActivity.current}
                    className="button button--red find-char__button-submit">FIND</button>
            </form>

            {isValidate ?
                content :
                <div className="find-char__message-wrapper">
                    <div className='find-char__message find-char__message--error'>
                        This field is required
                    </div>
                </div>}
        </div>
    )
}

export default FindChar