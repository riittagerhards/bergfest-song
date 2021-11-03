import React from 'react';
import styles from './Image.module.css';

type ImageProps = {
  url: string;
  alt: string;
};

function Image({ url, alt }: ImageProps) {
  return <img src={url} alt={alt} className={styles.image} />;
}

export default Image;
