import React from 'react';
import styles from './Modal.module.css'

const Modal = ({children, visible, setVisible}) => {

    const rootClases = [styles.modal]

    if (visible) {
        rootClases.push(styles.active)
    }

    return (
        <div className={rootClases.join(' ')}>
            <div className={styles.modalContent}>
                {children}
            </div>
        </div>

    );
};

export default Modal;