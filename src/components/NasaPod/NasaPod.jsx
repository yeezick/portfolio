import {useState, useEffect } from "react"
import { getNasaPod } from "../../services/data"

import "./nasaPod.css"

const NasaPod = () => {

  const [nasaPod, setNasaPod] = useState("")

  useEffect(() => {
  const fetchNasaPod = async () => {
    const response = await getNasaPod();
    setNasaPod(response)
  }
  fetchNasaPod()
  }, [])

  return (
    <div className="cosmic-wrapper">
      <div className="cosmic">
      <img className="cosmic-picture" src={nasaPod.url} alt="nasa daily astronomy"/>
      <p className="cosmic-title"> {nasaPod.title}</p>
      <p className="cosmic-text"> {nasaPod.explanation}</p>
      <p className="cosmic-courtesy">Courtesy of <a href="https://www.nasa.gov/" target="_blank" rel="noreferrer">NASA</a> and their awesome <a href="https://apod.nasa.gov/apod/astropix.html" target="_blank" rel="noreferrer">APOD api</a></p>
    </div>
    </div>
  )
}

export default NasaPod
