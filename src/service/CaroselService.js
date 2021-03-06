import slide1 from "../assets/images/master-slide-01.jpg";
import slide2 from "../assets/images/master-slide-02.jpg";
import slide3 from "../assets/images/master-slide-03.jpg";

class CarouselService {
    getSlidesForHomeCarousel() {
        return [
            {
                img: slide1,
                label: "First slide label",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                img: slide2,
                label: "Second slide label",
                description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
            },
            {
                img: slide3,
                label: "Third slide label",
                description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
            },
        ]
    }
}

export const carouselService = new CarouselService()