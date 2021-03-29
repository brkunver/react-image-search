import React from 'react'
import './styles/searchbar.css'

class SearchBar extends React.Component {
  state = { query: "" }

  handleForm = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.query)
  }

  render() {
    return (
      <div className='row justify-content-center SearchBar' >

        <div className="col-lg-8 col-sm-10">
          <h1>Image Search App</h1>
          <form onSubmit={this.handleForm} className='input-group input-group-lg'>
            <input
              onChange={event => this.setState({ query: event.target.value })}
              className="form-control"
              type="text"
              aria-describedby="query"
            />
          </form>
          <p>Hit enter to search</p>
        </div>
      </div>
    )
  }

}

export default SearchBar