import React from 'react';
import './Info.scss';
import {HEAD_CARDSPURPEL} from "../../config/cards";
import CardGroup from "../../components/CardGroup/CardGroup";

const Info: React.FC = ()=> {
    return(
        <div className="container1">
                <div className="info1">
                    <div className="title1">
                        Услуги
                    </div>
                    <p>Тарифы на услуги по обеспечению контроля доступа на территорию VISMA на 2022 год</p>
                    <p>Условия определения цены договора и тарифы на работы</p>
                    <p>Договор перевалки (типовая форма)</p>
                </div>
            <div className="cards1">
                <CardGroup cards={HEAD_CARDSPURPEL}/>
            </div>
        </div>
    );
};

export default React.memo(Info);