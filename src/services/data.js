import axios from "axios" 

// may need this for reference 
// export const config = {
//   headers: {
//     Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
//   },
// };

export const getCatPic = async () => {
  try {
    const response = await axios.get("https://api.thecatapi.com/v1/images/search")
    const imgUrl = response.data[0].url;
    return imgUrl
  } catch (error) {
    console.log(error)
  }
}

export const getCrypto = async () => {
  try {
    const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10") 
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

// todo: hide api key
export const getCosmic = async () => {
  try {
    const response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=3ZflFQUbUgnxtomWnbN6ROEMWjeMA89vRGtW9Vdv")
    return response.data
  } catch (error) {
    console.log(error)
  }
}

// todo: hide api key
export const getFood = async () => {
  try {
    const response = await axios.get("https://api.spoonacular.com/recipes/random?apiKey=9262166b66784697a6bdd37ebf013b43")
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getJoke = async () => {
  try {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
    return response.data
  } catch (error) {
    console.log(error)
  }
}

// todo: hide apiKey
export const getNews = async () => {
  try {
    const response = await axios.get("http://api.mediastack.com/v1/news?access_key=6093edc68c7322dfa2913f7433667f4d&languages=en")
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getQuote = async () => {
  try {
    const response = await axios.get("http://cors-lite.herokuapp.com/https://inspiration.goprogram.ai/")
    return response.data
  } catch (error) {
    
  }
}


// weather calls needs to be made on front end due to weather app location necessity
// export const getWeather = async () => {
//   try {
//     const response = await axios.get()
//   } catch (error) {
    
//   }
// }