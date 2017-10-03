import MediaModal from './media-modal/media-modal.jsx'
import {getDataService} from 'project-services'
import React, {Component} from 'react'
import './media.styl'

class Media extends Component {
  constructor () {
    super()
    this.state = {
      isOpened: false,
      photos: [],
      img: {}
    }
  }
  componentDidMount () {
    getDataService().then(data => {
      this.setState({photos: data.photos})
    })
  }

  handleGallery = img => {
    this.setState({isOpened: !this.state.isOpened, img})
  }
  render () {
    return (
      <div id='gallery'>
        {this.state.isOpened && <MediaModal handleGallery={this.handleGallery} img={this.state.img} />}
        {this.state.photos.map(i => (
          <div key={i.id}>
            <img src={i.image_url} onClick={() => { this.handleGallery(i) }} />
            <h1>{i.name + ' ' + i.user.username}</h1>
          </div>
        ))}
      </div>
    )
  }
}
export default Media
