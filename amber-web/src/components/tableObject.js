import cv1 from '../assets/cv1.png'
import cv2 from '../assets/cv2.png'
import cv3 from'../assets/cv3.png'

let objetsList = [
    { name: "cv1", description: "curriculum vitae", price: "10.50", image: {cv1} },
    { name:"cv2", description: "curriculum vitae", price: "11.75", image: {cv2} },
    { name:"cv3", description: "curriculum vitae", price: "11.25", image: {cv3} },
]

export default function objetsListfun() {
    return (
        <ul>
        {objetsList.map(({ name, description, price, image }) => (
                    <li>{ name + description + price + image }</li>
        ))}
        </ul>
    
    )
}

