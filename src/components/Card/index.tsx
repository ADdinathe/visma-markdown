import React from "react";
import './Card.scss';
import cn from 'classnames';
import {CardColorEnum} from "../../config/colors";



export type CardProps = {
    children:  React.ReactNode;
    color?: CardColorEnum;
    tag: React.ReactNode;
}

const Card: React.FC<CardProps> = ({tag, color = CardColorEnum.blue, children})=>{

    return (
        <div className={cn('card', `card_${color}`)}>

                <div className="tag">{tag}</div>
                <div className="text">{children}</div>

        </div>
    )
}

export default React.memo(Card);