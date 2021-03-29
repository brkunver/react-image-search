import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from './ImageList'
import Footer from './Footer'

class App extends React.Component {
  state = { imgs: [] };

  onSubmit = async (term) => {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID HszC0Z5AyiPI2HD8oCN6gLXzeaZDeLKRytcx3QbOJnA",
      },
    });
    console.log(res.data.results);
    this.setState({ imgs: res.data.results });
  };

  render() {
    return (
      <div className="container">
        <SearchBar onSubmit={this.onSubmit} />
        <ImageList imgList={this.state.imgs} />
        <Footer/>
      </div>
    );
  }
}

export default App;
