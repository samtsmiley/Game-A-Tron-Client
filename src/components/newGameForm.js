import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './newGameFormValidators'
import './newGameForm.css'

const renderField = ({ 
  input, 
  label, 
  type, 
  placeholder, 
  meta: { touched, error, warning }
 }) => (
  <div>
    
    <div>
      <input {...input} type={type} placeholder={placeholder} />
      <label className="item-label">{label}</label>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderRules = ({ fields, meta: { error, submitFailed } }) => (
  <div className="rules subcard">
    <p>Set Rules</p>  
    
      {fields.map((rule, index) => (
       
        <div key={index} className="rules-fields subcard">
          <Field
          name={`${rule}.description`}
          type="text"
          component={renderField}
          label={`Rule ${index + 1}`}
          placeholder={`Rule ${index + 1}`}
          />
        <button
          type="button"
          title="Remove Rule"
          onClick={() => fields.remove(index)}
          >x</button>

        </div> 
      ))}
    
  <div>
      <button type="button" onClick={() => fields.push({})}>
        +
      </button>
      {submitFailed && error && <span>{error}</span>}
    </div>
  </div>
)

const renderScores = ({ fields, meta: { error, submitFailed } }) => (
  <div className="scores subcard">
    <p>Set Ways to Score</p>
  
    {fields.map((score, index) => (
      <div key={index} className="subcard">
        <Field
          name={`${score}.description`}
          type="text"
          component={renderField}
          label="Action"
          placeholder="Action"
        />
        <Field
          name={`${score}.points`}
          type="number"
          component={renderField}
          label="Point Value"
          placeholder="Point Value"
        />
        <button
        type="button"
        title="Remove Score"
        onClick={() => fields.remove(index)}
        >x</button>
      </div> 
    ))}
  
    <div>
      <button type="button" onClick={() => fields.push({})}>
        +
      </button>
        {submitFailed && error && <span>{error}</span>}
      </div>
  </div>
)

const NewGameForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props

  return (
     <form onSubmit={handleSubmit}> 
      <div className="title-desc subcard">
        <Field
          name="name"
          type="text"
          component={renderField}
          label="Game Name"
          placeholder="Game Title"

        />
        <Field
          name="description"
          type="textarea"
          component={renderField}
          label="Game Description"
          placeholder="Description"
        />
      </div>
      <FieldArray name="rules" component={renderRules} />
      <FieldArray name="scores" component={renderScores} />
      <div className="title-desc subcard">
          <Field
            name="endScore"
            type="number"
            component={renderField}
            label="Game End Condition"
            placeholder="Winning Point Total"
          />
      </div>
      <div className="reset-submit-btn">
        
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Reset
        </button>

        <button 
          type="submit" 
          disabled={submitting}>
          Submit
        </button>

      </div>
    </form>
  )
}

export default reduxForm({
  form: 'newGameForm', // a unique identifier for this form
  validate
})(NewGameForm)