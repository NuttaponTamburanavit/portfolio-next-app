import React, { useState } from 'react';
import styles from './style.module.css';

const button = () => (
  <div className={styles.container} data-testid="test">
    button Component
  </div>
);
export default button;