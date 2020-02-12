import React, { Component } from 'react';
import PropTypes from 'prop-types';


class NewsletterForm extends Component {
    constructor( props ) {
        super( props );
        this.state = { email: '' };
    }

    handleChange = ( e ) => {
        const email = e.target.value;
        this.setState( () => ( { email } ) );
    }

    handleSubmit = ( e ) => {
        e.preventDefault();
        this.props.onSubmit( this.state.email );
    }

    isValidEmail = () => {
        return ( /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ ).test( this.state.email );
    }

    canBeSubmitted = () => {
        return this.state.email.length > 0 && this.isValidEmail();
    }

    render() {
        const { email } = this.state;
        const { variant, placeholder, buttonText } = this.props;
       
        return (
            <form className={ `action-form action-form--${ variant }` } onSubmit={ this.handleSubmit }>
                <div className="action-form__group">
                    <input 
                        type="text"
                        placeholder={ placeholder }
                        value={ email }
                        onChange={ this.handleChange }
                        className={ this.canBeSubmitted() ? 'action-form__control' : 'action-form__control disabled' }
                    />

                    <button className="action-form__control action-form__button" disabled={ !this.canBeSubmitted() } type="submit">
                        { buttonText }
                    </button> 
                </div>
            </form>
        );
    }
}


NewsletterForm.defaultProps = {
    variant: 'primary',
    placeholder: 'Email Address',
    buttonText: 'Subscribe',
}

NewsletterForm.propTypes = {
    variant: PropTypes.string,
    placeholder: PropTypes.string,
    buttonText: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
}


export default NewsletterForm;