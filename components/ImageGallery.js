import Image from 'next/image';
import styles from '../styles/ImageGallery.module.css'

export default function ImageGallery({ items, setCurrentIndex }) {
    return (
        <div className={styles.gallery}>
            {items.map((item, index) => (
                <div key={index} className={styles.gallery_item} onClick={() => setCurrentIndex(index)}>
                    <Image
                        src={item.source}
                        alt={item.description}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        loading="lazy"
                    />
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}