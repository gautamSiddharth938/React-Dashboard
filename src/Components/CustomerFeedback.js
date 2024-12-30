import React from 'react';
import './CustomerFeedback.css';

const feedbacks = [
    {
        name: 'John Doe',
        profilePic: './img/pexels-juanico-2589653.jpg',
        stars: 5,
        comment: 'The food was absolutely delicious! Every dish was flavorful and cooked to perfection. The presentation was beautiful, and the portions were generous. The service was friendly and attentive, making the whole experience even better. Highly recommend trying their signature dishes – a true treat for any food lover. Will definitely return!',
    },
    {
        name: 'Jane Smith',
        profilePic: './img/pexels-rasul-lotfi-16110887-29736375.jpg',
        stars: 4,
        comment: 'The meal was outstanding! Each bite was packed with incredible flavor. The ingredients tasted fresh, and the dishes were perfectly seasoned. The ambiance of the restaurant added to the charm. The staff was welcoming and efficient. I can’t wait to visit again and explore more from the menu!',
    },
    {
        name: 'Alice Johnson',
        profilePic: './img/pexels-ravinder-ravi-108844465-29758324.jpg',
        stars: 3,
        comment: 'Absolutely loved it here! The food was rich, well-prepared, and served hot. The variety on the menu was impressive, and everything we ordered exceeded expectations. The staff made us feel right at home. Great value for money, too. This is now my go-to spot for comfort food.',
    },
    {
        name: 'Bob Brown',
        profilePic: './img/pexels-juanico-2589653.jpg',
        stars: 5,
        comment: 'Delicious and memorable! The chef truly knows how to balance flavors. Every dish was unique yet comforting. The desserts were the perfect way to end the meal. Service was prompt and courteous. It\'s clear they care about quality. Highly recommend for both casual meals and special occasions.',
    },
    {
        name: 'Charlie Davis',
        profilePic: './img/pexels-rasul-lotfi-16110887-29736375.jpg',
        stars: 4,
        comment: 'One of the best dining experiences I’ve had! The flavors were bold yet well-balanced. The presentation was like artwork, and the portions were satisfying. The staff was knowledgeable and gave excellent recommendations. If you’re a foodie, this place should be on your must-visit list. I’m already planning my next visit!',
    },
];

const renderStars = (stars) => {
    return (
        <span style={{ color: 'yellow' }}>
            {'★'.repeat(stars)}
            <span style={{ color: 'lightgray' }}>{'★'.repeat(5 - stars)}</span>
        </span>
    );
};

export default function CustomerFeedback() {
    return (
        <div className="feedback-container">
            <span style={{fontSize: '15px', fontWeight: 'bolder'}}>Customer's Feedback</span>
            <div className="feedback-list">
                {feedbacks.map((feedback, index) => (
                    <div key={index} className="feedback-item">
                        <div className="feedback-head">
                        <img src={feedback.profilePic} alt={feedback.name} className="profile-pic" />
                            <h6>{feedback.name}</h6>
                        </div>
                        <div className="feedback-content">
                            <div>{renderStars(feedback.stars)}</div>
                            <p>{feedback.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}