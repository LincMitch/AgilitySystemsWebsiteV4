import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { 
  Card, 
  CardPrimaryAction, 
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionButton,
  CardActionIcons,
  CardActionIcon,
  } from '@rmwc/card';
import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import { Typography } from '@rmwc/typography';
import '@material/typography/dist/mdc.typography.css';

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      
      <div key={item.text} className="column is-6">
      
        <section className="section">
        <Card style={{ width: '31rem', height: '50rem'}}>
                <CardPrimaryAction>
                  <CardMedia
                    sixteenByNine
                    style={{
                      backgroundImage: 'url(https://rmwc.io/images/backgrounds/mb-bg-fb-16.png)'
                    }}
                  />
                  <div style={{ padding: '0 1rem 1rem 1rem' }}>
                    <Typography use="headline6" tag="h2">
                      Our Changing Planet
                    </Typography>
                    <Typography
                      use="subtitle2"
                      tag="h3"
                      theme="textSecondaryOnBackground"
                      style={{ marginTop: '-1rem' }}
                    >
                      by Kurt Wagner
                    </Typography>
                    <Typography
                      use="body1"
                      tag="div"
                      theme="textSecondaryOnBackground"
                    >
                      {item.text}
                    </Typography>
                  </div>
                </CardPrimaryAction>
                <CardActions>
                  <CardActionButtons>
                    <CardActionButton>Read</CardActionButton>
                    <CardActionButton>Bookmark</CardActionButton>
                  </CardActionButtons>
                  {/* <CardActionIcons>
                    <CardActionIcon onIcon="favorite" icon="favorite_border" />
                    <CardActionIcon icon="share" />
                    <CardActionIcon icon="more_vert" />
                  </CardActionIcons> */}
                </CardActions>
              </Card>
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid