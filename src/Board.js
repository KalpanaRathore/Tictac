import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick }) => {
    const renderSquare = (i) => {
        return (
            <Square
                key={i}
                value={squares[i].value}
                onClick={() => onClick(i)}
                color={squares[i].color}
            />
        );
    };

    return (
        <div className="board">
            <div className="row">
                <div className="col">{renderSquare(0)}</div>
                <div className="col">{renderSquare(1)}</div>
                <div className="col">{renderSquare(2)}</div>
            </div>
            <div className="row">
                <div className="col">{renderSquare(3)}</div>
                <div className="col">{renderSquare(4)}</div>
                <div className="col">{renderSquare(5)}</div>
            </div>
            <div className="row">
                <div className="col">{renderSquare(6)}</div>
                <div className="col">{renderSquare(7)}</div>
                <div className="col">{renderSquare(8)}</div>
            </div>
        </div>
    );
};

export default Board;
