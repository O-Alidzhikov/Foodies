"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [image, setImage] = useState();

  const imageInput = useRef();
  function imagePicker() {
    imageInput.current.click();
  }

  function imageChange(event) {
    const image = event.target.files[0];

    if (!image) {
      setImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImage(fileReader.result);
    };

    fileReader.readAsDataURL(image);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!image && <p>No image selected yet</p>}
          {image && (
            <Image src={image} alt="a food picture selected by user" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={imageChange}
        />
        <button className={classes.button} type="button" onClick={imagePicker}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
