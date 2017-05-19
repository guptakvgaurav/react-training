/**
 * Created by ttn on 17/05/17.
 */
import {FormGroup, ControlLabel, FormControl, Col, Button} from 'react-bootstrap';
import React from 'react';

const ValidationStates = {
        Success: 'success',
        Warning: 'warning',
        Error: 'error',
        None: null
    },
      InputTypes = {
        Email: {
            name: 'email',
            placeholderText: 'Enter your email here...'
        },
        Comment: {
            name: 'comment',
            placeholderText: 'Enter your comment here...'
        },
        Submit: {
            name: 'submit',
            displayText: 'Post Comment'
        }
    };

export default class CommentSubmissionForm extends React.Component {

    constructor(props) {
        super(props);
        this.getValidationStateFor = this.getValidationStateFor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            comment: ''
        }
    }

    getValidationStateFor() {
        return ValidationStates.Success;
    }

    handleChange(e, elementType) {
        switch(elementType){
            case InputTypes.Email.name:
                this.setState({ email: e.target.value});
                break;
            case InputTypes.Comment.name:
                this.setState({ comment: e.target.value});
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div style={{backgroundColor: '#e6e6e6'}}>
                <Button bsStyle="primary" bsSize="large" block>Comment Submission form</Button>
                <form>
                    {/* Email section */}
                    <FormGroup controlId={InputTypes.Email.name}
                               validationState={this.getValidationStateFor(InputTypes.Email.name)}>
                        <Col componentClass={ControlLabel} sm={2}> Email </Col>
                        <Col sm={10}>
                            <FormControl type="text" value={this.state.email}
                                         placeholder={InputTypes.Email.placeholderText}
                                         onChange={(e) => this.handleChange(e, InputTypes.Email.name)}/>
                            <FormControl.Feedback />
                        </Col>
                    </FormGroup>

                    {/* Comment section */}
                    <FormGroup controlId={InputTypes.Comment.name}
                               validationState={this.getValidationStateFor(InputTypes.Comment.name)}>
                        <Col componentClass={ControlLabel} sm={2}> Comment </Col>
                        <Col sm={10}>
                            <FormControl type="text"
                                         value={this.state.comment}
                                         placeholder={InputTypes.Comment.placeholderText}
                                        onChange={ e => this.handleChange(e, InputTypes.Comment.name)}/>
                            <FormControl.Feedback />
                        </Col>
                    </FormGroup>

                    {/* Submit button*/}
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit"
                                    disabled={this.props.isSubmitting}
                                    onClick={e => this.props.onSubmit({ email: this.state.email, text: this.state.comment})}
                            >
                                { InputTypes.Submit.displayText }
                            </Button>
                        </Col>
                    </FormGroup>
                </form>
            </div>
        );
    }
}