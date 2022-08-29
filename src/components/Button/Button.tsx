import React from 'react';

import './Button.scss';

interface IButton {
    title: string;
}

const Button = ({title}: IButton) => {
    return (
        <button className='button button-animated'>
            {title}
        </button>
    );
};

export default Button;
