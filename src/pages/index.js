import React from "react"
import { useRecoilState } from "recoil"
import { worldState } from "../store"
import Layout from '../layouts/main'
import SEO from "../components/seo"
import "./index.sass"

const Home = () => {
  const [{world}, setWorld] = useRecoilState(worldState)

  const handleShuffle = () => {
    setWorld({world: "world"})
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div>Hello {world}</div>
      <button className="primary-btn" onClick={handleShuffle}> shuffle</button> 
    </Layout>
  )
}

export default Home