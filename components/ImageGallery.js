﻿import Image from 'next/image';
import styles from '../styles/ImageGallery.module.css'

export default function ImageGallery({ items, setCurrentIndex }) {
    return (
        <div className={styles.gallery}>
            {items.map((item, index) => (
                <div key={index} className={styles.gallery_item}>
                    <div className={styles.image_wrapper}>
                        <Image
                            src={item.source}
                            alt={item.description}
                            layout="responsive"  // Makes the image responsive
                            width={1}  // The actual value doesn't matter when layout="responsive"
                            height={1} // The actual value doesn't matter when layout="responsive"
                            objectFit="contain"
                            loading="lazy"
                            onClick={() => {
                                setCurrentIndex(index)
                                document.body.style.overflowY = 'hidden'
                            }}
                        />
                    </div>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}