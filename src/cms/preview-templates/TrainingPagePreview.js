import React from 'react'
import PropTypes from 'prop-types'
import { TrainingPageTemplate } from '../../templates/training-page'

const TrainingPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <div>
    <TrainingPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      intro={{ blurbs }}
    />
    </div>
  )
}

TrainingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default TrainingPagePreview
