// src/ReviewPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReviewPage.css';

const ReviewPage = () => {
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch existing reviews from the backend
    axios.get('http://localhost:5000/reviews')
      .then(response => setReviews(response.data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim() === '') return; // Prevent empty reviews

    // Send the new review to the backend
    axios.post('http://localhost:5000/reviews', { text: reviewText })
      .then(response => {
        setReviews([...reviews, response.data]); // Add the new review to the reviews list
        setReviewText(''); // Clear the textarea after submitting
      })
      .catch(error => console.error('Error submitting review:', error));
  };

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
              <li key={index}>{review.text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ReviewPage;
