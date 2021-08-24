import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';
import history from '../../history';

export class Signin extends PureComponent {

    handleFormSubmit({ email, password }) {
        this.props.signinUser({ email, password })
    }

    renderError() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <em>Oops! {this.props.errorMessage}</em>
                </div>
            )
        }
    }

    render() {
        const { handleSubmit } = this.props;

        const handleClose = () => {
            history.push('/')
        }

        return (
            <SigninWrapper>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <fieldset className="form-group">
                        <label>Email:</label>
                        <Field className="form-control" name="email" component="input" type="text" />
                    </fieldset>
                    <fieldset className="form-group">
                        <label>Password:</label>
                        <Field className="form-control" name="password" component="input" type="password" />
                    </fieldset>
                    {this.renderError()}
                    <button action="submit" className="btn btn-primary">Sign in</button>
                    <button className='close' onClick={() => handleClose()}>Cancel</button>
                </form>
            </SigninWrapper>
        )
    }
}



const SigninWrapper = styled.div`
    margin: 0 auto;
`

const mapStateToProps = (state) => {
    return { errorMessage: state.auth.error }
}

export default reduxForm({
    form: 'signin'
})(connect(mapStateToProps, actions)(Signin))
