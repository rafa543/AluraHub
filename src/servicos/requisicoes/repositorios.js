import api from '../api'

export async function pegarRepositoriosDoUsusario(id) {
  try {
    console.log(id)
    const resultado = await api.get(`/repos?postId=${id}`)
    return resultado.data
  }catch(error){
    console.log(error)
    return []
  }
}

export async function salvarRepositoriosDoUsusario(postId, nome, data, id) {
  try {
    console.log(id)
    await api.put(`/repos/${id}`, {
      name: nome,
      data: data,
      postId: postId,
      id: id
    })
    return 'sucesso'
  }catch(error){
    console.log(error)
    return 'erro'
  }
}

export async function criarRepositoriosDoUsusario(postId, nome, data) {
  try {
    await api.post(`/repos`, {
      name: nome,
      data: data,
      postId: postId,
    })
    return 'sucesso'
  }catch(error){
    return 'erro'
  }
}

export async function deletarRepositorioDoUsusario(id) {
  try {
    await api.delete(`/repos/${id}`)
    return 'sucesso'
  }catch(error){
    return 'erro'
  }
}