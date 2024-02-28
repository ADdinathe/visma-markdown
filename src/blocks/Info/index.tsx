import React from 'react';
import './Info.scss';
import {HEAD_CARDSPURPEL} from "../../config/cards";
import CardGroup from "../../components/CardGroup/CardGroup";

// TODO> Перенести в config
const SERVICES = [
    {
        title: 'Услуги',
        text: 'Тарифы на услуги по обеспечению контроля доступа на территорию VISMA на 2022 год'
    },
    {
        title: 'Условия',
        text: 'Условия определения цены договора и тарифы на работы'
    },
    {
        title: 'Договор',
        text: 'Договор перевалки (типовая форма)'
    }
];

const Services: React.FC = ()=> {
    return(
        <div className="container1">
                <div className="info1">
                    <div className="title1">
                        Услуги
                    </div>
                    {SERVICES.map(({text}, index) => (
                        <div key={index} className="text1">
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
            <div className="cards1">
                <CardGroup cards={HEAD_CARDSPURPEL}/>
            </div>
        </div>
    );
};

export default React.memo(Services);