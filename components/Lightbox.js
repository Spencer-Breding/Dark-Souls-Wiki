import styles from '../styles/Lightbox.module.css';

export default function Lightbox({ item, items, currentIndex, onClose, onPrev, onNext, onThumbnailClick }) {
    let startIdx = currentIndex - 3;
    let endIdx = startIdx + 7;
    const placeholder = { source: "", description: "" };
    let placeholdersBefore = 0;
    let placeholdersAfter = 0;
    if (startIdx < 0) {
        placeholdersBefore = -startIdx;
        startIdx = 0;
    }

    if (endIdx > items.length) {
        placeholdersAfter = endIdx - items.length;
        endIdx = items.length;
    }
    const previewItems = [
        ...Array(placeholdersBefore).fill(placeholder),
        ...items.slice(startIdx, endIdx),
        ...Array(placeholdersAfter).fill(placeholder)
    ];

    return (
        <div className={styles.lightbox}>
            <button className={styles.closeButton} onClick={onClose}>X</button>
            <button className={`${styles.arrowButton} ${styles.left}`} onClick={onPrev}>&#10094;</button>
            <button className={`${styles.arrowButton} ${styles.right}`} onClick={onNext}>&#10095;</button>
            <div className={styles.imageContainer}>
                <img className={styles.mainImage} src={item.source} alt={item.description} />
                <p className={styles.imageDescription}>{item.description}</p>
                <div className={styles.previewContainer}>
                    {Array.isArray(previewItems) && previewItems.map((previewItem, index) => (
                        <img
                            key={index}
                            src={previewItem.source}
                            alt={previewItem.description}
                            className={`${styles.previewImage} ${index === 3 ? styles.selectedPreview : ''}`}
                            onClick={() => previewItem.source && onThumbnailClick(startIdx + index - placeholdersBefore)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}