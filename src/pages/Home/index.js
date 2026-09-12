import { useState } from "react";
import { Header } from "../../components/Header";
import background from "../../assets/github-img.png";
import ItemList from "../../components/ItemList"
import './styles.css';

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();
    if(newUser.login){
      const {login, avatar_url, name, bio} = newUser;
      setCurrentUser({login, avatar_url, name, bio});
      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();
      if(newRepos.length){
        setRepos(newRepos);
      }
    }
  }
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="imagem de fundo"/>
        <div className="info">
          <div>
            <input name="usuario" value={user} onChange={event => setUser(event.target.value)} placeholder="@username" />
            <button onClick={handleGetData}>BUSCAR</button>
          </div>
          {currentUser?.login ? ( <>
            <div className="perfil">
              <img src={currentUser.avatar_url} className="profile" alt="imagem do perfil" />
              <div>
                <h3>{currentUser.name}</h3>
                <span>@{currentUser.login}</span>
                <p>{currentUser.bio}</p>
              </div>
            </div>
            <hr />
          </>): null}
          {repos?.length ? ( <>
            <div>
              <h4 className="repositorio">Repositórios</h4>
              {repos.map(repo => (
                <ItemList title={repo.name} description={repo.description} />
              ))}
            </div>
          </>): null}                  
        </div>
      </div>
    </div>
  );
}

export default App;
