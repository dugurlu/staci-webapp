import React from 'react'
import PropTypes from 'prop-types'

import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'

const SimpleCard = ({title, titleColor, subtitle, message, actions, children}) => (
  <Card>
    <CardHeader
      title={title}
      titleColor={titleColor}
      subtitle={subtitle}
    />
    {message ? <CardText>{message}</CardText> : null}
    {children ? <CardText>{children}</CardText> : null}
    <CardActions>
      {actions}
    </CardActions>
  </Card>
)

export default SimpleCard

SimpleCard.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  subtitle: PropTypes.string,
  message: PropTypes.string,
  actions: PropTypes.object,
  children: PropTypes.object
}
