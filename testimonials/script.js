const testimonials = [
    { text: "This product changed my life! Highly recommended.", author: "- jane doe", image: "user1.jpg" },
    { text: "Amazing service, very satisfied!", author: "- John Smith", image: "user2.jpg" },
    { text: "A must-have for everyone!", author: "- Emily Johnson", image: "user3.jpg" }
];
let index = 0;
function nextTestimonial() {
    index = (index + 1) % testimonials.length;
    document.getElementById("testimonial-text").textContent = testimonials[index].text;
    document.getElementById("testimonial-author").textContent = testimonials[index].author;
    document.getElementById("testimonial-image").src = testimonials[index].image;
}
