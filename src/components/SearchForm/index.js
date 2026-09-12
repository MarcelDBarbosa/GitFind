import { useState } from "react";

function SearchForm({ loading, onSearch }) {
  const [username, setUsername] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(username);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="usuario">Usuário do GitHub</label>
      <div>
        <input
          id="usuario"
          name="usuario"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="@username"
          autoComplete="username"
        />
        <button type="submit" disabled={loading}>
          {loading ? "BUSCANDO..." : "BUSCAR"}
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
