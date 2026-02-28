import { useState } from "react";

const winCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [isPlayerOne, setIsPlayerOne] = useState(true);
    const [message, setMessage] = useState("");
    const [gameActive, setGameActive] = useState(true);

    function handleMove(index: number) {
        if (!gameActive || board[index] !== "") return;

        const newBoard = [...board];
        newBoard[index] = isPlayerOne ? "X" : "O";
        setBoard(newBoard);

        if (checkWinner(newBoard)) {
        setMessage(`${newBoard[index]} wins`);
        setGameActive(false);
        setTimeout(resetGame, 1500);
        return;
        }

        if (!newBoard.includes("")) {
        setMessage("Draw");
        setGameActive(false);
        setTimeout(resetGame, 1500);
        return;
        }

        setIsPlayerOne(!isPlayerOne);
    }

    function checkWinner(currentBoard) {
        return winCombinations.some(([a, b, c]) =>
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
        );
    }

    function resetGame() {
        setBoard(Array(9).fill(""));
        setIsPlayerOne(true);
        setMessage("");
        setGameActive(true);
    }

    return (
        <div>
        <h2>{message}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 80px)", gap: "5px" }}>
            {board.map((cell, index) => (
            <div
                key={index}
                onClick={() => handleMove(index)}
                style={{
                width: "80px",
                height: "80px",
                border: "1px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                cursor: "pointer"
                }}
            >
                {cell}
            </div>
            ))}
        </div>
        </div>
    );
}