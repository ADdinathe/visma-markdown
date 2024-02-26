import React from 'react';
import './Info.sass';
import {HEAD_CARDS} from "../../config/cards";
import CardGroup from "../../components/CardGroup/CardGroup";

const Info: React.FC = ()=> {
    return(
        <div className="container">
            <div className="title">
                Услуги
                <div className="info">
                    <p>Тарифы на услуги по обеспечению контроля доступа на территорию VISMA на 2022 год</p>
                    <p>Условия определения цены договора и тарифы на работы</p>
                    <p>Договор перевалки (типовая форма)</p>
                </div>
            </div>
            <div className="cards">
                <CardGroup cards={HEAD_CARDS}/>
            </div>
        </div>
    );
};

export default React.memo(Info);