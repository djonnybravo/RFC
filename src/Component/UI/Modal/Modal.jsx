import React from 'react';
import styles from './Modal.module.css'

const Modal = ({children, visible, setVisible}) => {

    const rootClases = [styles.modal]

    if (visible) {
        rootClases.push(styles.active)
    }

    return (
        <div className={rootClases.join(' ')} onClick={() => setVisible(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>

    );
};

export default Modal;