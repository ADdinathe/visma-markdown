import React from 'react';
import './CarouselCard.scss';

type CarouselCardProps = {
  image: string;
  title: string;
  date: string;
  description: string;
};

const CarouselCard: React.FC<CarouselCardProps> = ({
  date,
  title,
  description,
}) => {
  return (
    <div className="carousel-card-container">
      <div className="card-image" />
      <div className="card-info">
        <h4 className="card-date">{date}</h4>
        <h3 className="card-title">{title}</h3>
        <h5 className="card-text">{description}</h5>
      </div>
    </div>
  );
};

export default React.memo(CarouselCard);
