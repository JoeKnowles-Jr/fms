import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions'
import { connect } from 'react-redux'
import styled from 'styled-components'

class Signup extends PureComponent {

    handleFormSubmit(formProps) {
        this.props.signupUser(formProps)
    }

    renderField = ({ input, label, type, meta: { touched, error } }) => (
        <div>
            <label>{label}</label>
            <div>
                <input className="form-control" {...input} placeholder={label} type={type} />
                {touched && error && <span className="text-danger">{error}</span>}
            </div>
        </div>
    )

    renderSelectField(field) {
        return (
            <SelectWrapper>
                <label>{field.label}</label>
                <select  {...field.input} id="state"  >
                    {field.children}
                </select>

                <div className="text-danger">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </SelectWrapper>
        )
    }

    renderError() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <string>Oops! {this.props.errorMessage}</string>
                </div>
            )
        }
    }

    render() {
        const { handleSubmit, submitting } = this.props
        const handleSelectChange = (e) => {
            this.props.setUserState(e.target.value)
        }

        return (
            <SignupWrapper>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <fieldset className="form-group">
                        <SelectRowWrapper>
                            <Field
                                name="state"
                                label="State"
                                onChange={handleSelectChange}
                                component={this.renderSelectField}>
                                <option></option>
                                <option value="AL"> AL - Alabama</option>
                                <option value="AK"> AK - Alaska</option>
                                <option value="AZ"> AZ - Arizona</option>
                                <option value="AR"> AR - Arkansas</option>
                                <option value="CA"> CA - California</option>
                                <option value="CO"> CO - Colorado</option>
                                <option value="CT"> CT - Connecticut</option>
                                <option value="DE"> DE - Delaware</option>
                                <option value="FL"> FL - FLorida</option>
                                <option value="GA"> GA - Georgia</option>
                                <option value="HI"> HI - Hawaii</option>
                                <option value="ID"> ID - Idaho</option>
                                <option value="IL"> IL - Illinois</option>
                                <option value="IN"> IN - Indiana</option>
                                <option value="IA"> IA - Iowa</option>
                                <option value="KS"> KS - Kansas</option>
                                <option value="KY"> KY - Kentucky</option>
                                <option value="LA"> LA - Lousiana</option>
                                <option value="ME"> ME - Maine</option>
                                <option value="MD"> MD - Maryland</option>
                                <option value="MA"> MA - Massachusetts</option>
                                <option value="MI"> MI - Michigan</option>
                                <option value="MN"> MN - Minnesota</option>
                                <option value="MS"> MS - Mississippi</option>
                                <option value="MO"> MO - Missouri</option>
                                <option value="MT"> MT - Montana</option>
                                <option value="NE"> NE - Nebraska</option>
                                <option value="NV"> NV - Nevada</option>
                                <option value="NH"> NH - New Hampshire</option>
                                <option value="NJ"> NJ - New Jersey</option>
                                <option value="NM"> NM - New Mexico</option>
                                <option value="NY"> NY - New York</option>
                                <option value="NC"> NC - North Carolina</option>
                                <option value="ND"> ND - North Dakota</option>
                                <option value="OH"> OH - Ohio</option>
                                <option value="OK"> OK - Oklahoma</option>
                                <option value="OR"> OR - Oregon</option>
                                <option value="PA"> PA - Pennsylvania</option>
                                <option value="RI"> RI - Rhode Island</option>
                                <option value="SC"> SC - South Carolina</option>
                                <option value="SD"> SD - South Dakota</option>
                                <option value="TN"> TN - Tennessee</option>
                                <option value="TX"> TX - Texas</option>
                                <option value="UT"> UT - Utah</option>
                                <option value="VT"> VT - Vermont</option>
                                <option value="VA"> VA - Virginia</option>
                                <option value="WA"> WA - Washington</option>
                                <option value="WV"> WV - West Virginia</option>
                                <option value="WI"> WI - Wisconsin</option>
                                <option value="WY"> WY - Wyoming</option>
                            </Field>
                        </SelectRowWrapper>
                    </fieldset>
                    <fieldset className="form-group">
                        <Field
                            name="firstName"
                            label="First Name"
                            component={this.renderField}
                            type="text" />
                    </fieldset>
                    <fieldset className="form-group">
                        <Field
                            name="lastName"
                            label="Last Name"
                            component={this.renderField}
                            type="text" />
                    </fieldset>
                    <fieldset className="form-group">
                        <Field
                            name="email"
                            label="Email"
                            component={this.renderField}
                            type="text" />
                    </fieldset>
                    <fieldset className="form-group">
                        <Field
                            name="password"
                            label="Password"
                            component={this.renderField}
                            type="password" />
                    </fieldset>
                    <fieldset className="form-group">
                        <Field
                            name="passwordConfirmation"
                            label="Password Confirmation"
                            component={this.renderField}
                            type="password" />
                    </fieldset>
                    {this.renderError()}
                    <button type="submit" className="btn btn-primary" disabled={submitting}>Sign Up</button>
                </form>
            </SignupWrapper>
        )
    }
}

const validate = values => {
    const errors = {}

    if (!values.email) {
        errors.email = 'Please enter an email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) {
        errors.email = 'Please enter an password'
    }

    if (!values.passwordConfirmation) {
        errors.email = 'Please enter an password confirmation'
    }

    if (values.password !== values.passwordConfirmation) {
        errors.password = 'Password must match'
    }

    return errors;
}

const SelectRowWrapper = styled.div`
    display: flex;
    width: 15rem;
    flex-direction: column;
`

const SelectWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const SignupWrapper = styled.div`
    width: 100%;
`

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.error
    }
}

export default reduxForm({
    form: 'signin',
    validate
})(connect(mapStateToProps, actions)(Signup))
