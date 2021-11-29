---
to: <%= absPath %>/index.tsx
---
import React, { useState } from 'react';
import styles from './style.module.css';

const <%= component_name %> = () => (
  <div className={styles.container} data-testid="test">
    <%= component_name %> Component
  </div>
);
export default <%= component_name %>;