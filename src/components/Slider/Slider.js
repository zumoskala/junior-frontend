import React, {Component} from 'react'

import Image from './Image'
import img1 from "../../assets/photos/slide-1.jpg"
import img2 from "../../assets/photos/slide-2.jpg"
import img3 from "../../assets/photos/slide-3.jpg"
import img4 from "../../assets/photos/slide-4.jpg"
import img5 from "../../assets/photos/slide-5.jpg"
import img6 from "../../assets/photos/slide-6.jpg"

class Slider extends Component {

    // set initial slide (here equal to the number of images)
    state = {
        current_img: 6
    }

    componentDidMount() {
        //create extra copies of images(slides) to avoid blank space on a slider
        let first_card_clone = this.image_display.children[0].cloneNode(true);
        let second_card_clone = this.image_display.children[1].cloneNode(true);
        let third_card_clone = this.image_display.children[2].cloneNode(true);
        let last_card_clone = this.image_display.children[this.image_display.children.length - 1].cloneNode(true);

        // append images(slides) to slider
        this.image_display.insertBefore(last_card_clone, this.image_display.children[0]);
        this.image_display.append(first_card_clone);
        this.image_display.append(second_card_clone);
        this.image_display.append(third_card_clone);

        // set timespan taken to repeat execution of function that changes slides
        let intervalId = setInterval(this.nextSlide, 1000)
        this.setState({intervalId: intervalId})
    }

    nextSlide = () => {

        // check if current image(slide) is of higher number than 0
        if (this.state.current_img > 0) {

            // if current image(slide) is of higher number than 0, than move to image on the left
            let new_img = this.state.current_img - 1;

            // transition between images takes 1 second, sequence of images is moved by a size of one image multiplied by record number of new image
            this.setState({current_img: new_img}, () => {
                this.image_display.style.transitionDuration = "1s";
                this.image_display.style.transform = `translate(-${350 * this.state.current_img}px)`;

                // if the record number of current image equals 0, than start slideshow from the beginning
                if (this.state.current_img === 0) {

                    // time of transition set to 0 seconds to hide images scrolling to the initial position
                    this.image_display.style.transitionDuration = "0s";

                    // 4 is subtracted from all images from slideshow since 4 extra images were added in componentDidMount function to fill the blank space
                    this.image_display.style.transform = `translate(-${350 * (this.image_display.children.length - 4)}px)`;
                    this.setState({current_img: 6});
                }
            });
        } else {
            return
        }
    }

    render() {
        const styles = {
            slider_display: {
                width: '100vw',
                position: 'relative',
                left: 'calc(-50vw + 50%)',
                margin: '2rem 0 0 0',
                height: '250px'
            },
            image_display: {
                display: 'flex',
                flexDirection: 'row',
                width: 'fit-content'
            },
            wrapper: {
                position: "absolute",
                zIndex: "1",
                width: "100vw",
                height: "250px",
                top: "0px",
                left: "0px",
                display: "inlineBlock",
                background: "linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 25%, rgba(255,255,255,0) 75%,rgba(255,255,255,0.8) 100%)"
            }
        }

        return (
            <div>
                <div className="slider_display" style={styles.slider_display}>
                    <div className="wrapper" style={styles.wrapper}></div>
                    <div className="image_display" style={styles.image_display}
                         ref={refID => this.image_display = refID}>
                        <Image src={img1}/>
                        <Image src={img2}/>
                        <Image src={img3}/>
                        <Image src={img4}/>
                        <Image src={img5}/>
                        <Image src={img6}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider
