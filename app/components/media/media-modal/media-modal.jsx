import Modal from 'react-bootstrap-modal'
import React, {PropTypes} from 'react'
import './media-modal.styl'

const MediaModal = props => {
  return (
    <Modal show>
      <Modal.Header>
        <img className='close-button' src='./dist/media/add.svg' onClick={props.handleGallery} />
      </Modal.Header>
      <Modal.Body>
        <img src={props.img.image_url} />
      </Modal.Body>
    </Modal>
  )
}
MediaModal.propTypes = {
  handleGallery: PropTypes.func,
  img: PropTypes.object
}
export default MediaModal
