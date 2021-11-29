import axios from "axios"

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "3b7d194fb0mshc0b870619addcb7p1d76acjsn4b2657e98587",
    },
  })

  return data
}
