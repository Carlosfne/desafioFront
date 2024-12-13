import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

const githubClient = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    'User-Agent': 'MyApp',
  },
});

export const getUser = async (username: string) => {
  try {
    const response = await githubClient.get(`/users/${username}`);
    return response.data;
  } catch (error:any) {
    if (error.response?.status === 403) {
      console.error('Limite de requisições atingido. Tente novamente mais tarde.');
    } else {
      console.error('Erro ao buscar usuário:', error);
    }
    throw error;
  }
};

export const getRepos = async (username: string) => {
  try {
    const response = await githubClient.get(`/users/${username}/repos`);
    return response.data;
  } catch (error:any) {
    if (error.response?.status === 403) {
      console.error('Limite de requisições atingido. Tente novamente mais tarde.');
    } else {
      console.error('Erro ao buscar repositórios:', error);
    }
    throw error;
  }
};

export const getRepoDetails = async (fullName: string) => {
  try {
    const response = await githubClient.get(`/repos/${fullName}`);
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 403) {
      console.error('Limite de requisições atingido. Tente novamente mais tarde.');
    } else {
      console.error('Erro ao buscar detalhes do repositório:', error);
    }
    throw error;
  }
};