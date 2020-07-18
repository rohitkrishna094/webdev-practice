import React, { useState, useCallback, useRef } from "react";
import produce from "immer";
import "./App.scss";

const numRows = 30;
const numCols = 30;

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

const generateEmptyGrid = () => Array(numRows).fill(Array(numCols).fill(0));
const generateRandomGrid = () => Array.from({ length: numRows }, () => Array.from({ length: numCols }, () => (Math.random() > 0.7 ? 1 : 0)));

const App = () => {
  const [grid, setGrid] = useState(() => generateEmptyGrid());
  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) return;

    setGrid((g) =>
      produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;
              if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) neighbors += g[newI][newJ];
            });

            if (neighbors < 2 || neighbors > 3) gridCopy[i][j] = 0;
            else if (g[i][j] === 0 && neighbors === 3) gridCopy[i][j] = 1;
          }
        }
      })
    );

    setTimeout(runSimulation, 10);
  }, []);

  const onPlayToggle = () => {
    setRunning(!running);
    if (!running) {
      runningRef.current = true;
      runSimulation();
    }
  };

  return (
    <>
      <button onClick={onPlayToggle}>{running ? "Pause" : "Play"}</button>
      <button onClick={() => setGrid(generateRandomGrid())}>Random</button>
      <button onClick={() => setGrid(generateEmptyGrid())}>Clear</button>
      <div className="grid-container" style={{ gridTemplateColumns: `repeat(${numCols}, 20px)` }}>
        {grid.map((row, i) =>
          row.map((_, k) => (
            <div
              key={`${i}-${k}`}
              className="grid-item"
              style={{ backgroundColor: grid[i][k] ? "dodgerblue" : undefined }}
              onClick={() =>
                setGrid(
                  produce(grid, (gridCopy) => {
                    gridCopy[i][k] = grid[i][k] ? 0 : 1;
                  })
                )
              }
            />
          ))
        )}
      </div>
    </>
  );
};

export default App;
