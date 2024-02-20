import React from 'react';
import CardGroup from "./components/CardGroup/CardGroup";


const tag = 'услуги';

const cards = [
    {
        tag,
        children: 'Погрузочно-разгрузочная деятельность',
    },
    {
        tag,
        children: 'Хранение грузов',
    },
    {
        tag,
        children: 'Складские операции',
    },
    {
        tag,
        children: 'Швартовые операции',
    },
]

function App() {
  return (
    <div className="App">
        <CardGroup cards={cards}/>
     </div>
  );
}

export default App;
