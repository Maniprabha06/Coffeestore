import React, { useState } from 'react';
import './ReviewPage.css';

const ReviewPage = () => {
  // State to hold the current review being written
  const [reviewText, setReviewText] = useState('');
  
  // State to hold existing reviews
  const [reviews, setReviews] = useState([
    "Great product, highly recommend!",
    "Fast shipping, good customer service."
  ]);

  // Function to handle submission of review
  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim() === '') return; // Prevent empty reviews
    
    // Add the new review to the reviews list
    setReviews([...reviews, reviewText]);

    // Clear the textarea after submitting
    setReviewText('');
  }

  return (
    <div className="review-page">
      <div className="review-form">
        <h2>Write a Review</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your review..."
            rows={4}
            cols={50}
          />
          <br />
          <button type="submit">Submit Review</button>
        </form>
      </div>
      <div className="existing-reviews">
        <h2>Existing Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ReviewPage;
