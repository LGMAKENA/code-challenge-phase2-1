import React from 'react';
import BotCard from './BotCard';

function BotCollection(props) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {props.botsCollection.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            setBotsArmy={props.setBotsArmy}
            deleteHandler={props.deleteHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
