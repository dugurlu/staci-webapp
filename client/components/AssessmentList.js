import React from 'react'
import PropTypes from 'prop-types'
import SimpleCard from './SimpleCard'
import { List, ListItem } from 'material-ui/List'

export default class AssessmentList extends React.Component {
  render () {
    return (
      <SimpleCard
        title='Available assessments'
        subtitle='Choose assessment to load from list'
      >
        <List>
          {this.props.assessments.map((a) => {
            return <ListItem key={a.id} primaryText={'Assessment ' + a.id} />
          })}
        </List>
      </SimpleCard>
    )
  }
}

AssessmentList.propTypes = {
  assessments: PropTypes.array
}
