import React from 'react';
import BotCard from './BotCard';

function YourBotArmy(props) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {props.botsArmy.map(bot => (
            <BotCard
              key={bot.id}
              bot={bot}
              setBotsArmy={props.setBotsArmy}
              deleteHandler={props.deleteHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
