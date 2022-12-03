
import React from 'react'
import { Helmet } from 'react-helmet'
import cover from '../img/cover.png'

const OpenGraph = ({ title, description, image, path }) => {
  return (
    <Helmet>
      <meta charSet='UTF-8' />
      <link rel='icon' type='image/svg+xml' href='/src/favicon.svg' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='React card components' />
      <meta property='og:type' content='https://cards-components.vercel.app/' />
      <meta property='og:title' content='React cards components with vite js and tailwindcss' />
      <meta property='og:description' content='React cards components with vite js and tailwindcss' />
      <meta property='og:image' content={cover} />
      <meta property='og:image:width' content='1660' />
      <meta property='og:image:height' content='876' />
      <meta property='og:url' content='https://escuela.it/cursos/curso-avanzado-python' />
      <meta property='og:site_name' content='React card components' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:url' content='https://cards-components.vercel.app/' />
      <meta name='twitter:title' content='React card components' />
      <meta name='twitter:description' content='React cards components with vite js and tailwindcss' />
      <meta name='twitter:image' content={cover} />
      <title>React card components</title>
    </Helmet>
  )
}

export default OpenGraph
