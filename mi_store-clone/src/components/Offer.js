import React from 'react'
import { Link } from 'react-router-dom'

const Offer = ({src,link,index}) => {
  return <a href={link}><img src={src} atl={"${index} offer"}/></a>
}

export default Offer