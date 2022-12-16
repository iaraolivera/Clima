import React, { useState } from "react";
import styles from "./WeatherForm.module.css";

function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("");
  function onChange(e) {
    const value = e.target.value;
    if (value !== "") {
      setCity(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onChangeCity(city);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.container}>
        <input type="text" onChange={onChange} className={styles.input} />
      </form>
    </div>
  );
}

export default WeatherForm;
