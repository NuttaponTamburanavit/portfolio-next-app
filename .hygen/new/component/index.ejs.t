---
to: <%= absPath %>/index.tsx
---
import React, { useState } from 'react';
import styles from './style.module.css';

const <%= component_name.charAt(0).toUpperCase() + component_name.slice(1) %> = () => (
  <div className={styles.container} data-testid="test">
    <%= component_name.charAt(0).toUpperCase() + component_name.slice(1) %> Component
  </div>
);

export default <%= component_name.charAt(0).toUpperCase() + component_name.slice(1) %>;