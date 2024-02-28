import React from 'react';
import './Button.scss';
import cn from "classnames";
import { ReactComponent as Arrow } from "../../img/arrow.svg";

type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    isPurple?: boolean;
}
const Button: React.FC<Props> = ({children, onClick, className, isPurple}: Props) => {

    return (
        <div className={cn('button',  isPurple && `button_purple`)}>
            {children}
            <Arrow className="arrow" />
        </div>
    );
}


export default React.memo(Button);