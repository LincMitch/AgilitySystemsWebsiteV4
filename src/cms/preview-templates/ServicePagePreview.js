import React from 'react'
import PropTypes from 'prop-types'
import { ServicePageTemplate } from '../../templates/service-page'

const ServicePagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <ServicePageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      intro={{ blurbs }}
    />
  )
}

ServicePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ServicePagePreview
