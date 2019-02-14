import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './newGameFormValidators'

const renderField = ({ input, label, type, placeholder, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={placeholder} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderRules = ({ fields, meta: { error, submitFailed } }) => (
  <div>
    <span>Enter Rules</span>  
    <ol>
      {fields.map((rule, index) => (
        <li key={index}>
           <Field
          name={`${rule}.description`}
          type="text"
          component={renderField}
        />
        <button
          type="button"
          title="Remove Rule"
          onClick={() => fields.remove(index)}
          >X</button>
        </li> 
      ))}
    </ol>
  <div>
      <button type="button" onClick={() => fields.push({})}>
        Add Rule
      </button>
      {submitFailed && error && <span>{error}</span>}
    </div>
  </div>
)

const renderScores = ({ fields, meta: { error, submitFailed } }) => (
  <div>
    <span>Enter Scoring Opportunites</span>
  <ul>
    {fields.map((score, index) => (
      <li key={index}>
        <Field
          name={`${score}.description`}
          type="text"
          component={renderField}
          label="What do you have to do?"
          placeholder="Enter an Action"
        />
        <Field
          name={`${score}.points`}
          type="number"
          component={renderField}
          label="How many points is it worth?"
          placeholder="Enter a Number"
        />
        <button
        type="button"
        title="Remove Score"
        onClick={() => fields.remove(index)}
        >X</button>
      </li> 
    ))}
  </ul>
  <div>
    <button type="button" onClick={() => fields.push({})}>
      Add Score
    </button>
      {submitFailed && error && <span>{error}</span>}
    </div>
  </div>
)

const NewGameForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
     <form onSubmit={handleSubmit}> 
      <Field
        name="name"
        type="text"
        component={renderField}
        label="Game Name"
      />
       <Field
        name="description"
        type="textarea"
        component={renderField}
        label="Game Description"
        placeholder="Tell people what your game is all about. :)"
      />
      <FieldArray name="rules" component={renderRules} />
      <FieldArray name="scores" component={renderScores} />
      <Field
        name="end"
        type="number"
        component={renderField}
        label="Game End Conditions"
        placeholder="Enter Max Score"
      />
      <div>
        <button 
          type="submit" 
          disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'newGameForm', // a unique identifier for this form
  validate
})(NewGameForm)