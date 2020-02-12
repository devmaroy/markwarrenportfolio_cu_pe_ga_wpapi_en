import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsletterForm from './newsletterForm';
import addToMailchimp from 'gatsby-plugin-mailchimp';


class Newsletter extends Component {
    constructor( props ) {
        super( props );
        this.state = { subscribe: {} };
    }

    subscribeToNewsletter = async ( email ) => {
        try {
            const subscribe = await addToMailchimp( email );
            this.setState( () => ( { subscribe } ) );
        } catch ( e ) {
            // Nothing, because mailchimp returns always 200
        }
    }

    render() {
        const { subscribe } = this.state;
        const { variant, placeholder, buttonText } = this.props;
 
        return (
            <div className={ `newsletter newsletter--${ variant }` }>
                {
                    subscribe.result === 'success' ? (
                        <div className="newsletter-success">
                            <h3 className="newsletter-success__heading">
                                Thanks for signing up!
                            </h3>
                            <div className="newsletter-success__text">
                                <p>You'll be getting my articles in your inbox.</p>
                            </div>
                        </div>
                    ) : (
                        <React.Fragment>
                            <NewsletterForm
                                variant={ variant }
                                placeholder={ placeholder }
                                buttonText={ buttonText }
                                onSubmit={ this.subscribeToNewsletter }
                            />

                            {
                                subscribe && (
                                    <div className="newsletter-error__text" dangerouslySetInnerHTML={ { __html: subscribe.msg } } /> 
                                )
                            }
                        </React.Fragment>
                    )
                }
            </div>
        )
    }
}


Newsletter.defaultProps = {
    variant: 'primary',
    placeholder: 'Email Address',
    buttonText: 'Subscribe',
}

Newsletter.propTypes = {
    variant: PropTypes.string,
    placeholder: PropTypes.string,
    buttonText: PropTypes.string,
}


export default Newsletter;