import React from 'react'

import styles from './ErrorModal.module.css';
import Button from './Button';
import Card from './Card';

const ErrorModal = (props) => {
  return (
      <>
          <div onClick={props.onClose} className={styles.backdrop}></div>
          <Card className={styles.modal}>
              <header className={styles.header}>
                  <h2>{props.title}</h2>
              </header>
              <div className={styles.content}>
                  <p>{props.message}</p>
              </div>
              <footer className={styles.actions}>
                  <Button onClick={props.onClose}>Okay</Button>
              </footer>
          </Card>
      </>
  );
}

export default ErrorModal