import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class PostForm extends Component {
  renderInput = ({ input, label, meta: { touched, error } }) => {
    const formControl = `form-control ${
      touched && error ? 'is-invalid' : 'form-control'
    }`

    return (
      <div className="form-group">
        <label>{label}</label>
        <input {...input} type="text" autoComplete="off" className={formControl} />
        {touched && error && <small className="text-danger">{error}</small>}
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }

  render() {
    // console.log(this.props)
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Title" />
        <Field name="categories" component={this.renderInput} label="Categories" />
        <Field name="content" component={this.renderInput} label="Content" />
        <button className="btn btn-primary mr-2">Save</button>
        <button className="btn">Cancel</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {}

  if (!formValues.title || formValues.title.length < 3) {
    errors.title = 'Enter a title that is at least 3 characters'
  }

  if (!formValues.categories) {
    errors.categories = 'Enter some categories'
  }

  if (!formValues.content) {
    errors.content = 'Enter some content'
  }

  return errors
}

export default reduxForm({ form: 'postNewForm', validate })(PostForm)
