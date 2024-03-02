import React from 'react';

import './Carousel.scss';
import MOCK_IMAGE from 'img/head/headBackground.jpg';

import CarouselCard from '../CarouselCard';

const CAROUSEL_CARDS = [
  {
    image: MOCK_IMAGE,
    title: 'Semper eu pulvinar eget integer',
    date: '20/05/22',
    description:
      'Pretium duis phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras. Amet pharetra montes ipsum gravida tellus tellus.',
  },
  {
    image: MOCK_IMAGE,
    title: 'title',
    date: 'date',
    description: 'description',
  },
  {
    image: '',
    title: 'title',
    date: 'date',
    description: 'description',
  },
  {
    image: '',
    title: 'title',
    date: 'date',
    description: 'description',
  },
];

const Carousel: React.FC = () => {
  return (
    <div className="carousel">
      {CAROUSEL_CARDS.map((card, index) => (
        <CarouselCard key={index} {...card} />
      ))}
    </div>
  );
};

export default React.memo(Carousel);
