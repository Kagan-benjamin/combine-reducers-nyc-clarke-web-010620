import React, { Component } from 'react';
import { addAuthor } from '../actions';
import uuid from 'uuid';
import { connect } from 'react-redux';

export class AuthorInput extends Component {

  state = {
    authorName: '',
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleOnSubmit = event => {
    event.preventDefault();
    const author = {...this.state, id: uuid() };
    this.props.addAuthor(author);
    this.setState({
      authorName: ''
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <p>
            <input
              type="text"
              onChange={(event) => this.handleOnChange(event)}
              name="authorName"
              value={this.state.authorName}
              placeholder="author name" />
          </p>
            <input type="submit" />
          <button onClick={ e => this.handleDelete(e) }>Delete Author</button>
        </form>
      </div>
    );
  }
};

export default connect(null, { addAuthor })(AuthorInput);
