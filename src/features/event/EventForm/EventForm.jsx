import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import {connect} from 'react-redux'
import {createEvent, updateEvent} from '../eventActions'
import cuid from 'cuid';

const mapState = (state,ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {
    title: '',
    date:'',
    city:'',
    venue:'',
    hostedBy:''
  }
  if (eventId && state.events.length >0){
    event = state.events.filter(event => event.id === eventId)[0]
  }
  return{
    event
  }
}

const actions = {
  createEvent,
  updateEvent
}

class EventForm extends Component {
  state = {...this.props.event};

  componentDidMount(){
    if (this.props.selectedEvent != null) {
      this.setState({
        ...this.props.selectedEvent
      })
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    if (this.state.id) {
      this.props.updateEvent(this.state);
      this.props.history.push(`/events/${this.state.id}`)
    }else{
      const newEvent = {
        ...this.state,
        id : cuid(),
        hostPhotoURL : "/assets/user.png"
      }
      this.props.createEvent(newEvent);
      this.props.history.push('/events')
    }
    
  };

  handleInputChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    });

  };

  render() {
    // const { cancelFormOpen } = this.props;
    const { title, date, city, venue, hostedBy } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name='title'
              placeholder="Event Title"
              value={title}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input 
            type="date" 
            placeholder="Event Date" 
            name='date'           
            value={date}
            onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input 
            placeholder="City event is taking place" 
            name='city'
            value={city}
            onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input 
            placeholder="Enter the Venue of the event" 
            name='venue'
            value={venue}
            onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input 
            placeholder="Enter the name of person hosting" 
            name='hostedBy'
            value={hostedBy}
            onChange={this.handleInputChange}
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button type="button" onClick={this.props.history.goBack}>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}
export default connect(mapState,actions)(EventForm);
