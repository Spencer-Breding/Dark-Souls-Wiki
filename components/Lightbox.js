import { useState, useEffect } from 'react';
import styles from '../styles/Lightbox.module.css';

export default function Lightbox({ item, items, currentIndex, onClose, onPrev, onNext, onThumbnailClick }) {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        // Slight delay to let the initial render complete before starting the fade-in
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 50);

        return () => clearTimeout(timer);  // Cleanup timeout if component is unmounted
    }, []);
    const [imageAnimation, setImageAnimation] = useState('');
    const [transitioning, setTransitioning] = useState(false);
    const handleAnimation = (nextIndex, callback) => {
        const direction = nextIndex > currentIndex ? 'left' : 'right';
        let enterFrom = direction === 'left' ? 'Right' : 'Left';

        // Apply the exit (outgoing) animation
        if (direction === 'left') {
            setImageAnimation(styles.animateOutToLeft);
        } else if (direction === 'right') {
            setImageAnimation(styles.animateOutToRight);
        }

        setTransitioning(true); // Indicate that a transition is ongoing

        setTimeout(() => {
            callback(); // Call the onNext or onPrev function to update currentIndex

            // Apply the entry (incoming) animation
            setImageAnimation(styles[`animateInFrom${enterFrom}`]);

            setTimeout(() => {
                setTransitioning(false); // Indicate that the transition is complete
                setImageAnimation(''); // Reset the animation class
            }, 500);  // The timeout should match your incoming animation duration
        }, 500); // The timeout should match your outgoing animation duration
    }
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

    const handleClose = () => {
        setIsVisible(false);
        // Wait for the fade-out animation to complete, then call onClose
        setTimeout(() => onClose(), 300);
    };

    return (
        <div className={`${styles.lightbox} ${isVisible ? styles.fadeIn.visible : styles.fadeIn}`}>
            <button className={styles.closeButton} onClick={handleClose}>X</button>
            <button className={`${styles.arrowButton} ${styles.left}`} onClick={() => {
                if (!transitioning) {
                    const nextIndex = currentIndex - 1;  // Previous index
                    handleAnimation(nextIndex, onPrev);
                }
            }}>&#10094;</button>
            <button className={`${styles.arrowButton} ${styles.right}`} onClick={() => {
                if (!transitioning) {
                    const nextIndex = currentIndex + 1;  // Next index
                    handleAnimation(nextIndex, onNext);
                }
            }}> &#10095;</button>
            <div className={styles.imageContainer}>
                <div className={`${styles.mainImageContainer} ${imageAnimation}`}>
                    <div className={styles.mainImageWrapper}>
                        <img className={styles.mainImage} src={item.source} alt={item.description} />
                    </div>
                    <p className={styles.imageDescription}>{item.description}</p>
                </div>
                <div className={styles.previewContainer}>
                    {Array.isArray(previewItems) && previewItems.map((previewItem, index) => (
                        <img
                            key={index}
                            src={previewItem.source}
                            alt={previewItem.description}
                            className={`${styles.previewImage} ${index === 3 ? styles.selectedPreview : ''}`}
                            onClick={() => {
                                if (previewItem.source && !transitioning) {
                                    const nextIndex = startIdx + index - placeholdersBefore;
                                    handleAnimation(nextIndex, () => onThumbnailClick(nextIndex));
                                }
                            }}
                        />
                    ))}
                </div>
            </div>
        </div >
    );
}