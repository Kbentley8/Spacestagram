import React, {Component} from 'react';
import './App.css';
import {getPlanetPics} from '../../api-calls';
import Planets from '../../Planets';
import Loading from '../Loading';


class App extends Component {
  constructor() {
    super();
    this.state = {
      planetDetails: [],
      error: null
    }
  }

  componentDidMount = () => {
    getPlanetPics()
      .then(data => {
        const updatedPictures = data.reduce((obj, hit) => {
          let planetInfo = {
            'date': hit.date,
            'media': hit.media_type,
            'title': hit.title,
            'url': hit.url
          }
          obj.push(planetInfo);
          return obj;
        }, []);
        this.setState({planetDetails: updatedPictures})
      })
      .catch(error => {
        this.setState({error: 'Not able to get NASA Pictures try again some time later'})
      })
  }

  render() {
    return (
      <main className='app'>
      <h1 className='title'>Spacestagram</h1>
      {!this.state.planetDetails.length && !this.state.error && <Loading />}
      {this.state.error && <h2>{this.state.error}</h2>}
      <Planets planetDetails={this.state.planetDetails} />
      </main>
    );
  }
}

export default App;
