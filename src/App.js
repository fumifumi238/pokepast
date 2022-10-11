import "./App.css";

const App = () => {

  // crlfの改行コード osによって改行コードのエンコードが違う
  // 一度アクセスしたらデータベースにurlを保存
  const paste = encodeURIComponent(
    "Barraskewda @ Choice Scarf  \r\nAbility: Swift Swim  \r\nEVs: 252 Atk / 252 Spe  \r\nAdamant Nature  \r\n- Close Combat  \r\n- Crunch  \r\n- Aqua Jet  \r\n- Agility  \r\n\r\nBlissey (F) @ Assault Vest  \r\nAbility: Natural Cure  \r\nEVs: 252 HP / 252 Spe  \r\n- Avalanche  \r\n- Brick Break  \r\n- Aromatherapy  \r\n- Body Slam  \r\n"
  ).replace(/%20/g, "+");

  console.log(paste);
  return (
    <div className="App">
      <header className="App-header">
        <p>Edit src/App.js and save to reload.</p>
      </header>
      <a
        href={`https://pokepast.es/create?paste=${paste}&title=&author=&notes=`}
      >
        url
      </a>
    </div>
  );
};

export default App;
