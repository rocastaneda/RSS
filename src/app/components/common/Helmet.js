import React from 'react'
import {Helmet} from 'react-helmet'

export const helmet = (title) => {
  return (
    <Helmet key={title}>
      <title>{title}</title>
      <meta property="og:tite" content={`${title}`} />
    </Helmet>
  )
}
