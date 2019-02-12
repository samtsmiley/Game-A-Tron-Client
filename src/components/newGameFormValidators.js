const validate = values => {
  const errors = {}
  if (!values.gameName) {
    errors.gameName = 'Required'
  } else if (values.gameName.trim() !== values.gameName){
    errors.gameName = 'Cannot start or end with whitespace'
  }

  if (!values.scores || !values.scores.length) {
    errors.scores = { _error: 'At least one score must be entered' }
  } else {
    const scoresArrayErrors = []
    values.scores.forEach((score, scoreIndex) => {
      const scoreErrors = {}
      if (!score || !score.scoreName) {
        scoreErrors.scoreName = 'Required'
        scoresArrayErrors[scoreIndex] = scoreErrors
      }
      if (!score || !score.scoreValue) {
        scoreErrors.scoreValue = 'Required'
        scoresArrayErrors[scoreIndex] = scoreErrors
      }
    })
    if (scoresArrayErrors.length) {
      errors.scores = scoresArrayErrors
    }
  }
  
  if (!values.rules || !values.rules.length) {
    errors.rules = { _error: 'At least one score must be entered' }
  } else {
    const rulesArrayErrors = []
    values.rules.forEach((rule, ruleIndex) => {
      const ruleErrors = {}
      if (!rule || !rule.ruleName) {
        ruleErrors.firstName = 'Required'
        rulesArrayErrors[ruleIndex] = ruleErrors
      }
    })
    if (rulesArrayErrors.length) {
      errors.rules = rulesArrayErrors
    }
  }
      
  return errors
}

export default validate
