import { Header } from "../../components/Header";
import background from "../../assets/github-img.png";
import RepositoryList from "../../components/RepositoryList";
import SearchForm from "../../components/SearchForm";
import UserProfile from "../../components/UserProfile";
import { useGitHubUser } from "../../hooks/useGitHubUser";
import "./styles.css";

function Home() {
  const { currentUser, repos, loading, error, searchUser } = useGitHubUser();

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="Imagem de fundo do GitHub" />
        <div className="info">
          <SearchForm loading={loading} onSearch={searchUser} />
          {error && <p className="error-message" role="alert">{error}</p>}
          {currentUser && <UserProfile user={currentUser} />}
          {currentUser && <RepositoryList repositories={repos} />}
        </div>
      </div>
    </div>
  );
}

export default Home;
