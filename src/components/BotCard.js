import React from 'react';

const botTypeClasses = {
  Assault: 'icon military',
  Defender: 'icon shield',
  Support: 'icon plus circle',
  Medic: 'icon ambulance',
  Witch: 'icon magic',
  Captain: 'icon star',
};

function BotCard({ bot, setBotsArmy, deleteHandler }) {
  function addBotHanlder(event) {
    if (event.target.classList.contains('button')) {
      return;
    }
    setBotsArmy(currentState => {
      //find whether a bot is added
      const isBotAdded = currentState.find(el => el.id === bot.id);
      //if bot is found
      if (isBotAdded) {
        return currentState;
      } else {
        return [...currentState, bot];
      }
    });
  }

  function onRemoveHandler(event) {
    // console.log(event.target);
    deleteHandler(bot.id);
  }

  return (
    <div className="ui column">
      <div className="ui card" key={bot.id} onClick={addBotHanlder}>
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button className="ui mini red button" onClick={onRemoveHandler}>
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
