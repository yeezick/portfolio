import {useState, useEffect } from "react"
import { getCosmic } from "../../services/data"

import "./Cosmic.css"

const Cosmic = () => {

  const [cosmicData, setCosmicData] = useState("")

  useEffect(() => {
  const fetchCosmic = async () => {
    const response = await getCosmic();
    setCosmicData(response)
  }
  fetchCosmic()
  }, [])

  return (
    <div>
      <h3 className="user-component-title">Cosmic</h3>
      <div className="cosmic">
      <p className="cosmic-title"> {cosmicData.title}</p>
      <img className="cosmic-picture" src={cosmicData.url} alt="nasa daily astronomy"/>
      <p className="cosmic-text"> {cosmicData.explanation}</p>
      <p className="cosmic-courtesy">Courtesy of <a href="https://www.nasa.gov/" target="_blank" rel="noreferrer" >NASA</a></p>
    </div>
    </div>
  )
}

export default Cosmic
