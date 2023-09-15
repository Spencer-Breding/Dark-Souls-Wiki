import Iframe from 'react-iframe';
import styles from '../styles/VideoGallery.module.css'

export default function VideoGallery({ items, setCurrentIndex }) {
    return (
        <div className={styles.gallery}>
            {items.map((item, index) => (
                <div key={index} className={styles.gallery_item} onClick={() => setCurrentIndex(index)}>
                    <Iframe src={item.source} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"/>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}