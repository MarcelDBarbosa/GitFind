const GITHUB_API_URL = "https://api.github.com";

async function request(endpoint) {
  const response = await fetch(`${GITHUB_API_URL}${endpoint}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Usuário não encontrado.");
    }

    throw new Error("Não foi possível consultar o GitHub.");
  }

  return response.json();
}

export async function getUser(username) {
  const user = await request(`/users/${encodeURIComponent(username)}`);

  return {
    login: user.login,
    avatar_url: user.avatar_url,
    name: user.name,
    bio: user.bio,
  };
}

export function getUserRepositories(username) {
  return request(`/users/${encodeURIComponent(username)}/repos`);
}
