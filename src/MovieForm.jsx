import React, { Component } from 'react';

class MovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            poster: '',
            comment: ''
        };
    }

  onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
  }

  submitForm = (e) => {
      const url = " http://campus-bordeaux.ovh:3001/api/quests/movies/";
      const config = {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state),
      };
      e.preventDefault();
      fetch(url, config)
          .then(res => res.json())
          .then((res) => {
              if (res.error) {
                  alert(res.error);
              } else {
                  alert(`Added employee with the ID ${res}!`);
              }
          }).catch((e) => {
              console.error(e);
              alert('Error during l\'an employee addition');
          });
  }


  render() {
      return (
          <div className="MovieForm">
              <h2>Movies</h2>

              <form onSubmit={this.submitForm}>
                  <fieldset>
                      <legend>Add favourite movie</legend>
                      <div className="form-data">
                          <label htmlFor="name">title:</label>
                          <input
                              type="text"
                              id="title"
                              name="title"
                              onChange={this.onChange}
                              value={this.state.title}
                          />
                      </div>

                      <div className="form-data">
                          <label htmlFor="poster">poster-url:</label>
                          <input
                              type="text"
                              id="poster"
                              name="poster"
                              onChange={this.onChange}
                              value={this.state.poster}
                          />
                      </div>

                      <div className="form-group" >
                        <label >comment:</label>
                        <textarea className="form-data" value={this.state.comment} onChange={this.onChange}  name="comment" rows="2"></textarea>
                    </div>
                      <div className="form-data">
                          <input type="submit" value="Submit" />
                      </div>
                  </fieldset>
              </form>
          </div>
      );
  }
};

export default MovieForm;