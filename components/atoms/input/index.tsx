import React, { useState } from "react";
import styles from "./style.module.css";

const Input = () => (
  <div className={styles.container} data-testid="test">
    Input Component
    <input />
  </div>
);

export default Input;
