import React from 'react';

import './Head.scss';
import Button from '../../components/Button';
import CardGroup from '../../components/CardGroup/CardGroup';
import { HEAD_CARDS } from '../../config/cards';

const Head: React.FC = () => {
  return (
    <div className="container">
      <div className="info">
        <div className="title">Тавимский морской порт VISMA</div>
        <div className="text">
          Vel posuere nibh odio placerat massa vel tellus tortor. Varius eget
          nunc scelerisque etiam felis facilisi ante viverra sem. Nunc eros
          elementum.
        </div>
        <Button>о компании</Button>
      </div>
      <div className="cards">
        <CardGroup cards={HEAD_CARDS} />
      </div>
    </div>
  );
};

export default React.memo(Head);
