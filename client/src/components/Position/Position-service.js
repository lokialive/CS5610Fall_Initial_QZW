import axios from 'axios'


//const POSITIONS_API = `${API_BASE}/positions`;
const POSITIONS_API = '/api/positions'

export const createPosition = async (position) => {
  const response = await axios.post(POSITIONS_API, position)
  return response.data
}

export const findPositions = async () => {
  const response = await axios.get(POSITIONS_API)
  const positions = response.data
  return positions
}

export const deletePosition = async (pid) => {
  const response = await axios.delete(`${POSITIONS_API}/${pid}`)
  return response.data
}

export const updatePosition = async (position) => {
  await axios.put(`${POSITIONS_API}/${position._id}`, position)
  return position
}
