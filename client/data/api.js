import uuidv4 from 'uuid/v4'

const fakeDatabase = {
  assessments: [{
    id: uuidv4(),
    customer: 'fooCustomer',
    assessor: 'fooAssessor'
  }, {
    id: uuidv4(),
    customer: 'barCustomer',
    assessor: 'barAssessor'
  }, {
    id: uuidv4(),
    customer: 'bazCustomer',
    assessor: 'bazAssessor'
  }]
}

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const fetchAssessments = (filter) => {
  // TODO: add filtering by id
  return delay(500).then(() => {
    if (Math.random() > 0.5) {
      throw new Error('You are using a mock API that randomly throws errors!')
    }

    if (filter) {
      return fakeDatabase.assessments.filter((a) => {
        return a.id.includes(filter)
      })
    }
    return fakeDatabase.assessments
  })
}

export const addAssessment = (customer, assessor) => {
  delay(500).then(() => {
    const assessment = {
      id: uuidv4(),
      customer,
      assessor
    }
    fakeDatabase.assessments.push(assessment)
    return assessment
  })
}

export const setAssessor = (id, assessor) => {
  delay(500).then(() => {
    const assessment = fakeDatabase.assessments.find((a) => a.id === id)
    assessment.assessor = assessor
    return assessment
  })
}
