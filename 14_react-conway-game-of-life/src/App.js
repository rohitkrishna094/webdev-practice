import React, { useState, useCallback, useRef } from "react";
import produce from "immer";
import { useMediaQuery } from "react-responsive";
import "./App.scss";

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

const generateEmptyGrid = (numRows, numCols) => Array(numRows).fill(Array(numCols).fill(0));
const generateRandomGrid = (numRows, numCols) => Array.from({ length: numRows }, () => Array.from({ length: numCols }, () => (Math.random() > 0.7 ? 1 : 0)));

const App = () => {
  let numRows = 35;
  let numCols = 70;

  const isTablet = useMediaQuery({ query: "(max-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-device-width: 425px)" });
  console.log(numRows, numCols);
  if (isMobile) {
    numRows = 15;
    numCols = 15;
  } else if (isTablet) {
    numRows = 35;
    numCols = 35;
  }

  const [grid, setGrid] = useState(() => generateEmptyGrid(numRows, numCols));
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

    setTimeout(runSimulation, 0);
  }, []);

  const onPlayToggle = () => {
    setRunning(!running);
    if (!running) {
      runningRef.current = true;
      runSimulation();
    }
  };

  return (
    <div className="app">
      <h3 className="title">
        Conway's Game of Life&nbsp;&nbsp;
        <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" rel="noopener noreferrer">
          <i className="far fa-question-circle" />
        </a>
      </h3>
      <div className="button-group">
        <button className="button is-primary is-link" onClick={onPlayToggle}>
          {running ? "Pause" : "Play"}
        </button>
        <button className="button is-primary is-link" onClick={() => setGrid(generateRandomGrid(numRows, numCols))}>
          Random
        </button>
        <button className="button is-primary is-link" onClick={() => setGrid(generateEmptyGrid(numRows, numCols))}>
          Clear
        </button>
      </div>
      <div className="grid-container" style={{ gridTemplateColumns: `repeat(${numCols}, 20px)` }}>
        {grid.map((row, i) =>
          row.map((_, k) => (
            <div
              key={`${i}-${k}`}
              className="grid-item"
              style={{ backgroundColor: grid[i][k] ? "#3273DC" : undefined }}
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
    </div>
  );
};

export default App;
