const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.trim() !== values.name){
    errors.name = 'Cannot start or end with whitespace'
  }

  if (!values.endScore) {
    errors.endScore = 'Required'
  } else if (values.endScore.trim() !== values.endScore){
    errors.endScore = 'Cannot start or end with whitespace'
  }

  if (!values.scores || !values.scores.length) {
    errors.scores = { _error: 'At least one score must be entered' }
  } else{ 
    const scoresArrayErrors = []
    values.scores.forEach((score, scoreIndex) => {
      const scoreErrors = {}
      if (!score || !score.description) {
        scoreErrors.description = 'Required'
        scoresArrayErrors[scoreIndex] = scoreErrors
      }else if (score.description.trim() !== score.description){
        scoreErrors.description = 'Cannot start or end with whitespace'
      }
      if (!score || !score.points) {
        scoreErrors.points = 'Required'
        scoresArrayErrors[scoreIndex] = scoreErrors
      }else if (score.points.trim() !== score.points){
        scoreErrors.points = 'Cannot start or end with whitespace'
      }
    })
    if (scoresArrayErrors.length) {
      errors.scores = scoresArrayErrors
    }
  }
  
  if (!values.rules || !values.rules.length) {
    errors.rules = { _error: 'At least one rule must be entered' }
  } else {
    const rulesArrayErrors = []
    values.rules.forEach((rule, ruleIndex) => {
      const ruleErrors = {}
      if (!rule || !rule.description) {
        ruleErrors.description = 'Required'
        rulesArrayErrors[ruleIndex] = ruleErrors
      }else if (rule.description.trim() !== rule.description){
        ruleErrors.description = 'Cannot start or end with whitespace'
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
