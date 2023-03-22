import React from 'react';
import { AiFillEdit } from 'react-icons/ai';

const Board: React.FC = () => {
  return (
    <>
      <button className="btn-main text-center mb-3">create</button>
      <div className="board-container">
        <div className="board-card p-2">
          <p className="d-flex justify-content-around text-uppercase">
            to do
            <span>
              <AiFillEdit />
            </span>
          </p>
          <div className="card-container mt-2">
            <div className="card my-1">123</div>
            <div className="card my-1">123</div>
            <div className="card my-1">123</div>
            <div className="card my-1">123</div>
            <div className="card my-1">123</div>
          </div>
        </div>
        <div className="board-card p-2">
          <p className="d-flex justify-content-around text-uppercase">
            to do
            <span>
              <AiFillEdit />
            </span>
          </p>
          <div className="card-container mt-2">
            <div className="card my-1">123</div>
            <div className="card my-1">123</div>
            <div className="card my-1">123</div>
            <div className="card my-1">123</div>
            <div className="card my-1">123</div>
          </div>
        </div>
        <div className="board-card p-2">
          <p className="d-flex justify-content-around text-uppercase">
            to do
            <span>
              <AiFillEdit />
            </span>
          </p>
          <div className="card-container mt-2">
            <div className="card my-1">123</div>
            <div className="card my-1">123</div>
            <div className="card my-1">123</div>
            <div className="card my-1">123</div>
            <div className="card my-1">123</div>
          </div>
        </div>
        <div className="board-card p-2">
          <p className="d-flex justify-content-around text-uppercase">
            to do
            <span>
              <AiFillEdit />
            </span>
          </p>
          <div className="card-container mt-2">
            <div className="card my-1">123</div>
            <div className="card my-1">123</div>
            <div className="card my-1">123</div>
            <div className="card my-1">123</div>
            <div className="card my-1">123</div>
          </div>
        </div>
        <div className="board-card p-2">
          <p className="d-flex justify-content-around text-uppercase">
            to do
            <span>
              <AiFillEdit />
            </span>
          </p>
          <div className="card-container mt-2">
            <div className="card my-1">123</div>
            <div className="card my-1">123</div>
            <div className="card my-1">123</div>
            <div className="card my-1">123</div>
            <div className="card my-1">123</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
