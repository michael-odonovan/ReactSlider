import {useState, useEffect} from 'react'
import styles from './Slider.module.css'
import ArrowButtonLeft from './ArrowButtonLeft'
import ArrowButtonRight from './ArrowButtonRight'
import dataSlider from './dataSlider'

export default function Slider() {

	const [slideIndex, setSlideIndex] = useState(0)

	function prevSlide() {
		if(slideIndex !== 0){
			setSlideIndex(slideIndex - 1)
		}
		else if (slideIndex === 0){
			setSlideIndex(dataSlider.length-1)
		}
	}

	function nextSlide() {
		if(slideIndex !== dataSlider.length-1){
			setSlideIndex(slideIndex + 1)
		}
		else if (slideIndex === dataSlider.length-1){
			setSlideIndex(0)
		}
	}

  useEffect(() => {

		let interval = setInterval(() => {
			if(slideIndex !== dataSlider.length-1){
				setSlideIndex(slideIndex + 1)
			}
			else if (slideIndex === dataSlider.length-1){
				setSlideIndex(0)
			}
			clearInterval(interval)

		}, 2500); // speed of timer

	}, [slideIndex]);



	return (
		<div className={styles.slider}>
			<div className={styles.imageContainer}>

				{dataSlider.map((obj, index) => {
					return (
						<>
							<div
								key={obj.id}
								className={slideIndex === index ? `${styles.slide} ${styles.activeAnimation}` : `${styles.slide}`}
							>
								<img
									src={obj.src}
									alt={obj.title}
									width="100%"
									height="100%"
								/>
							</div>
						</>
					)
				})}

				<ArrowButtonLeft prevSlide={prevSlide}  fill={{ fill: "var(--black)" }} />
				<ArrowButtonRight nextSlide={nextSlide} fill={{ fill: "var(--black)" }} />

			</div>

			<div className={styles.textContainer}>

				{/* <div className={styles.title}>{dataSlider[slideIndex].title}</div> */}
				<div className={styles.details}>{dataSlider[slideIndex].details}</div>

			</div>

			<div className={styles.dotsContainer}>
				{dataSlider.map((item, index) => (
					<div
						key={item.toString()}
						onClick={() => setSlideIndex(index)}
						className={slideIndex === index ? `${styles.dot} ${styles.active}` : `${styles.dot}`}
					></div>
				))}
			</div>

		</div>
	)
}
