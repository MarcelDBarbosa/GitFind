import { useRef, useState } from "react";
import { getUser, getUserRepositories } from "../services/github";

export function useGitHubUser() {
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const requestId = useRef(0);

  async function searchUser(username) {
    const normalizedUsername = username.trim();
    const currentRequestId = ++requestId.current;

    if (!normalizedUsername) {
      setCurrentUser(null);
      setRepos([]);
      setError("Informe um nome de usuário.");
      return;
    }

    setLoading(true);
    setError("");
    setCurrentUser(null);
    setRepos([]);
    try {
      const [user, userRepos] = await Promise.all([
        getUser(normalizedUsername),
        getUserRepositories(normalizedUsername),
      ]);

      if (currentRequestId === requestId.current) {
        setCurrentUser(user);
        setRepos(userRepos);
      }
    } catch (requestError) {
      if (currentRequestId === requestId.current) {
        setError(requestError.message || "Não foi possível realizar a busca.");
      }
    } finally {
      if (currentRequestId === requestId.current) {
        setLoading(false);
      }
    }
  }

  return { currentUser, repos, loading, error, searchUser };
}
