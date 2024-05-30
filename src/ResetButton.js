import React from 'react';

const ResetButton = ({ resetGame, resetScores }) => {
    return (
        <div className="reset-buttons d-flex justify-content-center mt-4">
            <button onClick={resetGame} className="reset-btn btn btn-secondary mx-2">Reset Game</button>
            <button onClick={resetScores} className="reset-btn btn btn-secondary mx-2">Reset Scores</button>
        </div>
    );
};

export default ResetButton;
