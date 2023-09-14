import React from 'react'
import Layout from './Layout'
import myImage from '../public/pic.png'

const Owner = () => {
  return (
    <Layout>
        <h1>Gina - Group J - 12</h1>
        <img src={myImage}/>
        <h2>Short Biography :</h2>
        <p className="bio">With four years of experience in coordination and customer service, I transitioned into the software development field after graduating from Generation's Junior Software Developer Bootcamp. My career goal was driven by a passion for rapid learning and the continuous acquisition of new knowledge. I actively embraced feedback as a valuable tool for personal development and took on responsibilities while effectively managing my time.</p>
    </Layout>
  )
}

export default Owner