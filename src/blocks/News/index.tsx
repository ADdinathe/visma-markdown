import React from 'react';
import './News.scss';
import Button from "../../components/Button";
const News:React.FC = () => {
  return (
    <div className="news-container">

        <div className="header">
          <h1 className="title">Новости</h1>
          <Button isPurple>
            о компании
          </Button>
        </div>
    </div>
  );
}

export default React.memo(News);

