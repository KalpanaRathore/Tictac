import React from 'react';

const Square = ({ value, onClick, color }) => {
    return (
        <button 
            style={{ background: color }} 
            onClick={onClick} 
            className="square btn btn-light border rounded">
            {value}
        </button>
    );
};

export default Square;
