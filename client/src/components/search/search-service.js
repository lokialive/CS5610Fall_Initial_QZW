import axios from 'axios'

// const url = 'https://api.orb-intelligence.com/3/match/'
// const api_key = "c66c5dad-395c-4ec6-afdf-7b78eb94166a"
// const fetch_url = 'https://api.orb-intelligence.com/3/fetch/'
// ${url}?api_key=${api_key}&country=us&name=${name}
// ${fetch_url}${id}/?api_key=${api_key}
export const matchCompaniesByName = async (name) => {
    const response = await axios.get(`http://localhost:8080/api/search/?name=${name}`);
    const companies = response.data.results;
    return companies;
}

export const fetchCompanyByID = async (id) => {
    const response = await axios.get(`http://localhost:8080/api/companies/?id=${id}`)
    const company = response.data;
    return company;
}

export const followCompany = async (id, companyName, userId, userHandle) => {
  //1. add company name and company id to the user profile by userId
  await axios.put(`/api/profile/${userHandle}/${id}/${companyName}`, {
    responseType: 'json',
  })
  const response = await axios.put(
    `/api/follow/${id}/${userId}/${userHandle}`,
    {
      responseType: 'json',
    },
  )
  const followerList = response.data.results
  return followerList
}

