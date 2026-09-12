import ItemList from "../ItemList";

function RepositoryList({ repositories }) {
  if (!repositories.length) {
    return <p className="empty-state">Este usuário não possui repositórios públicos.</p>;
  }

  return (
    <section aria-labelledby="repositories-title">
      <h4 id="repositories-title" className="repositorio">Repositórios</h4>
      {repositories.map((repository) => (
        <ItemList
          key={repository.id}
          title={repository.name}
          description={repository.description}
        />
      ))}
    </section>
  );
}

export default RepositoryList;
