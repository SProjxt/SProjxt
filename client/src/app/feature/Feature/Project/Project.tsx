import React from 'react';

const Project: React.FC = () => {
  const date = new Date();
  const today =
    date.getFullYear() + '-' + `${date.getMonth() + 1}` + '-' + date.getDate();
  return (
    <div className="project-container">
      <div className="d-flex justify-content-center my-3">
        <div className="project-card">
          <p className="d-flex justify-content-end">{today}</p>
          <p className="text-center font-lg">project name</p>
          <div className="d-flex justify-content-end">
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center my-3">
        <div className="project-card">
          <p className="d-flex justify-content-end">{today}</p>
          <p className="text-center font-lg">project name</p>
          <div className="d-flex justify-content-end">
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center my-3">
        <div className="project-card">
          <p className="d-flex justify-content-end">{today}</p>
          <p className="text-center font-lg">project name</p>
          <div className="d-flex justify-content-end">
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center my-3">
        <div className="project-card">
          <p className="d-flex justify-content-end">{today}</p>
          <p className="text-center font-lg">project name</p>
          <div className="d-flex justify-content-end">
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center my-3">
        <div className="project-card">
          <p className="d-flex justify-content-end">{today}</p>
          <p className="text-center font-lg">project name</p>
          <div className="d-flex justify-content-end">
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center my-3">
        <div className="project-card">
          <p className="d-flex justify-content-end">{today}</p>
          <p className="text-center font-lg">project name</p>
          <div className="d-flex justify-content-end">
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center my-3">
        <div className="project-card">
          <p className="d-flex justify-content-end">{today}</p>
          <p className="text-center font-lg">project name</p>
          <div className="d-flex justify-content-end">
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
