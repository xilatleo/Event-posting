import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import EventList from "../EventList/EventList";
// import EventForm from "../EventForm/EventForm";
// import cuid from "cuid";
import { createEvent, updateEvent, deleteEvent } from "../eventActions";

const mapState = state => ({
  events: state.events
});
const actions = {
  createEvent,
  updateEvent,
  deleteEvent
};

class EventDashboard extends Component {
  // state = {
  //   isOpen: false,
  //   selectedEvent: null
  // };

  // handleIsOpenToggle = () => {
  //   this.setState(({ isOpen }) => ({
  //     isOpen: !isOpen
  //   }));
  // };
  // handeCreateFormOpen = () => {
  //   this.setState({
  //     isOpen: true,
  //     selectedEvent: true
  //   });
  // };

  // handleFormCancel = () => {
  //   this.setState({
  //     isOpen: false
  //   });
  // };

  // handleCreateEvent = newEvent => {
  //   newEvent.id = cuid();
  //   newEvent.hostPhotoURL = "/assets/user.png";
  //   this.props.createEvent(newEvent);
    // this.setState(({ events }) => ({
      
    //   isOpen: false
    // }));
  // };

  // handleSelectEvent = e => {
  //   this.setState({
  //     selectedEvent: e,
  //     isOpen: true
  //   });
  // };

  // handleUpdateEvent = updatedEvent => {
  //   this.props.updateEvent(updatedEvent);
  //   // this.setState(({ events }) => ({
  //   //   isOpen: false,
  //   //   selectEvent: null
  //   // }));
  // };

  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };

  render() {
    // const { isOpen, selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            // selectEvent={this.handleSelectEvent}
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Activity Feed</h2>
          {/* <Button
            positive
            content="Create Event"
            onClick={this.handeCreateFormOpen}
          />
          {isOpen && (
            <EventForm
              key={selectedEvent ? selectedEvent.id : 0}
              updateEvent={this.handleUpdateEvent}
              // selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              cancelFormOpen={this.handleFormCancel}
            />
          )} */}
        </Grid.Column>
      </Grid>
    );
  }
}
export default connect(mapState, actions)(EventDashboard);
