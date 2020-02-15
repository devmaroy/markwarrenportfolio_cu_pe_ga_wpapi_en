import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isEmpty, isValidEmail } from '../../../../utils/helpers/validation'
import { submitForm } from '../../../../utils/helpers/form'
import ContactFormResponse from './contactFormResponse';
import Loading from '../../common/loading';


class ContactForm extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            fields: {
                first_name: '',
                last_name: '',
                email_address: '',
                subject: '',
                message: '',
            },
            fieldsErrors: {
                first_name: '',
                last_name: '',
                email_address: '',
                subject: '',
                message: '',
            },
            loading: false,
            success: false,
            error: false,
        }
    }

    handleChange = ( e ) => {
        const name = e.target.name;
        const value = e.target.value;
        const fieldsErrors = this.validateField( name, value );

        this.setState( ( { fields } ) => ({
            fieldsErrors,
            fields: {
                ...fields,
                [name]: value
            }
        }));
    }

    isRequired = ( fieldName ) => {
        return this.props.required_fields.includes( fieldName );
    }

    validateField = ( fieldName, value ) => {
        let errors = this.state.fieldsErrors;

        switch ( fieldName ) {
            case 'first_name': 
                if ( this.isRequired( fieldName ) ) {
                    errors.first_name = isEmpty( value ) ? 'Please enter your first name' : '';
                }

                break;
            
            case 'last_name':
                if ( this.isRequired( fieldName ) ) {
                    errors.last_name = isEmpty( value ) ? 'Last name cannot be empty' : '';
                }

                break;      

            case 'email_address':
                errors.email_address = '';

                if ( this.isRequired( fieldName ) ) {
                    errors.email_address = isEmpty( value ) ? 'Email address cannot be empty' : '';
                }

                if ( ! isEmpty( value ) && ! isValidEmail( value ) ) {
                    errors.email_address = 'Email must be valid.';
                }

                break;

            case 'subject':
                if ( this.isRequired( fieldName ) ) {
                    errors.subject = isEmpty( value ) ? 'Subject cannot be empty' : '';
                }
                
                break; 

            case 'message':
                if ( this.isRequired( fieldName ) ) {
                    errors.message = isEmpty( value ) ? 'Message cannot be empty' : '';
                }

                break; 
        
            default:
                break;
        }

        
        return errors;
    }

    validateForm = ( { fieldsErrors, fields } ) => {
        let valid = true;

        // Check if we have errors in state
        Object.keys( fieldsErrors ).forEach( ( error ) => fieldsErrors[ error ].length > 0 && ( valid = false ) ); 

        // Check if form was submitted empty
        let errors;
        Object.keys( fields ).map(( fieldKey ) => {
            errors = this.validateField( fieldKey, fields[fieldKey] );
            return errors[ fieldKey ].length > 0 && ( valid = false );
        });
        this.setState(() => ({ errors: fieldsErrors }))

        return valid;
    }

    handleSubmit = async ( e ) => {
        e.preventDefault();
        
        if ( this.validateForm( this.state ) ) {
            // Form is valid
            
            // Set loading
            this.setState(() => ( { loading: true } ) ); 
            
            // Send to netlify 
            try {
                await submitForm( 'mwcontact', this.state.fields );
                this.setState(() => ( { success: true, loading: false } ) )
            } catch ( e ) {
                this.setState(() => ( { error: true, loading: false } ) )
            }
        }
    }

    render() {
        const formFields = this.props;
        const { fieldsErrors, loading, error, success } = this.state;
        
        if ( loading ) {
            return <Loading />;
        }

        if ( success ) {
            return (
                <ContactFormResponse
                    heading="Thank you for contacting me."
                    type="success"
                    emoji="😄"
                >
                    <p>You are very important to me, all information received will always remain confidential. I will contact you as soon as I review your message.</p>
                </ContactFormResponse>
            )
        }

        if ( error ) {
            return (
                <ContactFormResponse
                    heading="Sorry, there was a problem."
                    type="error"
                    emoji="😔"
                >
                    <p>Something went wrong. Unfortunately your information was not sent. Please try again later. If problem occurs again, try to contact me via social media (page bottom right corner). Thank you.</p>
                </ContactFormResponse>
            )
        }

        return (
            <React.Fragment>
                <form autoComplete="off" method="post" name="mwcontact" data-netlify="true" netlify-honeypot="bot" onSubmit={ this.handleSubmit } className="form">
                    {
                        // Quick note for someone in the future:
                        // I know.. nested ternary operators are... awful, but for this case still good.
                        // Mainly because it's still readable and also I don't want to use npm package or something
                        // because I need this functionality only in this component. Sorry :-)
                        Object.keys( formFields )
                            .filter(( field ) => field !== 'button' && field !== 'required_fields' )
                            .map(( field ) => (
                                <React.Fragment key={ field }>
                                    <div className="form__group">
                                        {
                                            field === 'message' ? (
                                                <textarea 
                                                    placeholder={ formFields.required_fields.includes( field ) 
                                                        ? `${ formFields[ field ] } *` 
                                                        : formFields[ field ]
                                                    }
                                                    name={ field }
                                                    value={ this.state[ field ] }
                                                    onChange={ this.handleChange }
                                                    className={ fieldsErrors[ field ] ? 'form__control error' : ( ! isEmpty( this.state.fields[field] ) ? 'form__control success' : 'form__control' ) }>
                                                </textarea> 
                                            ) : (
                                                <input 
                                                    type="text"
                                                    placeholder={ formFields.required_fields.includes( field ) 
                                                        ? `${ formFields[ field ] } *`
                                                        : formFields[ field ]
                                                    }
                                                    name={ field }
                                                    value={ this.state[ field ] }
                                                    onChange={ this.handleChange }
                                                    className={ fieldsErrors[ field ] ? 'form__control error' : ( ! isEmpty( this.state.fields[field] ) ? 'form__control success' : 'form__control' ) }
                                                />
                                            )
                                        }

                                        {
                                            fieldsErrors[field] ? (
                                                <span className="form__response form__response--error">
                                                    <FontAwesomeIcon icon={ [ "far", 'times-circle' ] } fixedWidth />
                                                </span>                                        
                                            ) : 
                                                ! isEmpty( this.state.fields[field] ) && (
                                                    <span className="form__response form__response--success">
                                                        <FontAwesomeIcon icon={ [ "far", 'check-circle' ] } fixedWidth />
                                                    </span>
                                                )
                                        }

                                        <div className="form__hidden">
                                            <label htmlFor="bot">Don't fill this out, human</label>
                                            <input name="bot" />
                                        </div>
                                    </div>

                                    {
                                        fieldsErrors[field] && (
                                            <p className="form__error-message">{ fieldsErrors[field] }</p>
                                        )
                                    }
                                </React.Fragment>
                            ))
                    }
                
                    <div className="form__meta">
                        <button type="submit" className="button button--primary">
                            { formFields[ 'button' ] }
                        </button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}


ContactForm.propTypes = {   
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email_address: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    required_fields: PropTypes.arrayOf(PropTypes.string).isRequired,
}


export default ContactForm;