export default async function getRepos(token) {

  return fetch("https://api.github.com/user/repos", { headers: {
    'Authorization': `Bearer ${token.accessToken}`
  } })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao acessar a API do GitHub");
      }
      return response.json();
    })
}
