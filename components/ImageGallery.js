import styles from '../styles/ImageGallery.module.css'

export default function ImageGallery({ items, setCurrentIndex }) {
    return (
        <div className={styles.gallery}>
            {items.map((item, index) => (
                <div key={index} className={styles.gallery_item} onClick={() => setCurrentIndex(index)}>
                    <img src={item.source} alt={item.description} />
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}