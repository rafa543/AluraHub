import api from '../api'

export async function buscaUsuario(nomeDoUsuario) {
  try {
    const resultado = await api.get(`/users?login=${nomeDoUsuario}`)
    return resultado.data[0]
  }catch(error){
    console.log(error)
    return {}
  }
}