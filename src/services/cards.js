import axios from 'axios'

const baseUrl = 'http://localhost:3003/api/cards'

const getAll = async () => {
    const request = await axios.get(baseUrl);
    return request.data;
  };

  const create = async (obj) => {
    //console.log("body:", request.body)
    console.log("obj: ", obj)
    const request = await axios.post(baseUrl, obj)
    return request.data
}

const update = async (id, obj) => {
  console.log(`update ${id} ${obj}`)
  const request = await axios.put(`${baseUrl}/${id}`, obj)
  return request.data
}

/*
const remove = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}
*/

const exportObject = { getAll, create, update }

export default exportObject