import style from './modal.module.css';
import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }
  hendleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  hendleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={style.Overlay} onClick={this.hendleBackdropClick}>
        <div className={style.Modal}>{this.props.children}</div>
      </div >,
      modalRoot,
    );
  }
}
export default Modal;