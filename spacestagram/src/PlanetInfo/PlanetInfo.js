import React, {Component} from "react";
import '../PlanetInfo/PlanetInfo.css';
import {RiHeart3Line, RiHeart3Fill} from 'react-icons/ri';
{
class PlanetInfo extends Component {
    constructor() {
        super();
        this.state = {
          like: false
        }
      }
    
      likePicture = () => {
        this.setState({like: !this.state.like});
      }
    
      render() {
        return (
          <article className='card'>
          <h1>{this.props.title}</h1>
          <p>{new Date(this.props.date).toDateString()}</p>
          {this.props.media === 'video' ? <a href={this.props.url} target='_blank' rel='noreferrer'>Click to see video</a> : <img src={this.props.url} alt={this.props.title} />}
          {!this.state.like ? <RiHeart3Line className='heart' onClick={() => this.likePicture()} /> : <RiHeart3Fill className='heart' onClick={() => this.likePicture()} />}
          </article>
    
        )
      }
    }
    

}

export default PlanetInfo;