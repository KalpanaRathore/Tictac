import React from 'react';

const Scoreboard = ({ scores }) => {
    return (
        <div className="scoreboard d-flex justify-content-between mb-3">
            <div className="score badge bg-primary p-3">Blue: {scores.blue}</div>
            <div className="score badge bg-danger p-3">Red: {scores.red}</div>
        </div>
    );
};

export default Scoreboard;
