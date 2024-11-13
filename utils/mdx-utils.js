import { api } from '../services/api';

export const getPosts = async () => {
  try {
    const response = await api.get('/posts');
    console.log("Resposta completa:", response); // Verifica o conteúdo da resposta
    return response.data || [];
  } catch (error) {
    console.error("Erro ao obter posts:", error);
    return [];
  }
};

export const getPostBySlug = async (id) => {
  try {
    const { data } = await api.get(`/posts?id=eq.${id}`); // Ajuste "posts" se o nome da tabela for diferente
    if (data && data.length > 0) {
      return data[0];  // Retorna o primeiro item, pois o filtro pelo ID traz apenas um post
    }
    return null; // Retorna null se o post não for encontrado
  } catch (error) {
    console.error(`Erro ao buscar post com id ${id}:`, error);
    return null;
  }
};