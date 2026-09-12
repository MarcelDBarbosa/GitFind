import { Header } from "../../components/Header";
import background from "../../assets/github-img.png";
import ItemList from "../../components/ItemList"
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="imagem de fundo"/>
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username" />
            <button>BUSCAR</button>
          </div>
          <div className="perfil">
            <img src="https://avatars.githubusercontent.com/u/173863078?v=4" className="profile" alt="imagem do perfil" />
            <div>
              <h3>Marcel Dupret</h3>
              <span>@MarcelDBarbosa</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr />
          <div>
            <h4 className="repositorio">Repositórios</h4>
            <ItemList title="Projeto 1" description="Descrição do projeto" />
            <ItemList title="Projeto 2" description="Descrição do projeto" />
            <ItemList title="Projeto 3" description="Descrição do projeto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
