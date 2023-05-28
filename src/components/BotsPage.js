import React, { useState } from 'react';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';

function BotsPage(props) {
  //start here with your code for step one
  const [botsArmy, setBotsArmy] = useState([]);

  async function deleteHandler(id) {
    setBotsArmy(currentState => currentState.filter(bot => bot.id !== id));
    props.setBots(currentState => currentState.filter(bot => bot.id !== id));

    await fetch(`http://localhost:8002/bots/${id}`, {
      method: 'DELETE',
    });
  }

  return (
    <div>
      <YourBotArmy
        botsArmy={botsArmy}
        setBotsArmy={setBotsArmy}
        deleteHandler={deleteHandler}
      />
      <BotCollection
        botsCollection={props.botsCollection}
        setBotsArmy={setBotsArmy}
        deleteHandler={deleteHandler}
      />
    </div>
  );
}

export default BotsPage;
