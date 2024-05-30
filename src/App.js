import React, { useState, useEffect } from 'react';
import Board from './Board';
import Scoreboard from './Scoreboard';
import ResetButton from './ResetButton';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const initialBoard = Array(9).fill({ value: null, color: null });
    const [board, setBoard] = useState(initialBoard);
    const [isBlueNext, setIsBlueNext] = useState(true);
    const [scores, setScores] = useState({ blue: 0, red: 0 });

    useEffect(() => {
        const savedScores = JSON.parse(localStorage.getItem('tic-tac-toe-scores'));
        if (savedScores) {
            setScores(savedScores);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tic-tac-toe-scores', JSON.stringify(scores));
    }, [scores]);

    const handleClick = (i) => {
        const newBoard = board.slice();
        if (calculateWinner(newBoard) || newBoard[i].value) {
            return;
        }

        newBoard[i] = { value: isBlueNext ? 'X' : 'O', color: isBlueNext ? 'blue' : 'red' };
        setBoard(newBoard);
        setIsBlueNext(!isBlueNext);
        
        const winner = calculateWinner(newBoard);
        if (winner) {
            setScores((prevScores) => ({
                ...prevScores,
                [winner === 'X' ? 'blue' : 'red']: prevScores[winner === 'X' ? 'blue' : 'red'] + 1,
            }));
        }
    };

    const resetGame = () => {
        setBoard(initialBoard);
    };

    const resetScores = () => {
        setScores({ blue: 0, red: 0 });
    };

    return (
        <div className="app d-flex align-items-center justify-content-center">
            <div className="container p-4 bg-white rounded shadow">
                <Scoreboard scores={scores} />
                <Board squares={board} onClick={handleClick} />
                <ResetButton resetGame={resetGame} resetScores={resetScores} />
            </div>
        </div>
    );
};

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a].value && squares[a].value === squares[b].value && squares[a].value === squares[c].value) {
            return squares[a].value;
        }
    }
    return null;
};

export default App;
