import React from "react";
import { Button, Card, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import UpdateContact from "./UpdateContact";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateForm: false,
      hideCard: false,
    };
  }

  //hide update from
  hideUpdateContactForm = () => {
    this.setState({
      showUpdateForm: false,
      hideCard: false,
    });
  };

  handleContactEdit = () => {
    this.setState({
      showUpdateForm: true,
      hideCard: true,
    });
  };

  handleDeleteContact = (userId) => {
    let url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    fetch(url, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        this.props.deleteContact(userId);
      }
    });
  };

  render() {
    const { user, editContact } = this.props;
    const { id, name, email, phone, address } = user;
    const { showUpdateForm, hideCard } = this.state;
    const ColoredLine = ({ color }) => (
      <hr
        style={{
          color: color,
          backgroundColor: color,
          height: 5,
        }}
      />
    );

    return (
      <>
        <Row>
          {" "}
          {showUpdateForm ? (
            <UpdateContact
              updateContact={editContact}
              user={user}
              hideForm={this.hideUpdateContactForm}
            />
          ) : null}
        </Row>
        {!hideCard && (
          <Row>
            <Card
              style={{ width: "22rem" }}
              className="mt-3"
              border="secondary"
            >
              <Card.Body>
                <Card.Title>Contact Details</Card.Title>
              </Card.Body>
              <ColoredLine color="blue" />
              <Card.Body>
                <Button variant="success" onClick={this.handleContactEdit}>
                  Edit
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => this.handleDeleteContact(id)}
                >
                  Delete
                </Button>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>contact Id : {id}</ListGroupItem>
                <ListGroupItem> Name : {name}</ListGroupItem>
                <ListGroupItem> Email : {email}</ListGroupItem>
                <ListGroupItem> Phone : {phone}</ListGroupItem>
                <ListGroupItem> Address : {address.city}</ListGroupItem>
            

              </ListGroup>
            </Card>
          </Row>
        )}
      </>
    );
  }
}
export default Contact;
