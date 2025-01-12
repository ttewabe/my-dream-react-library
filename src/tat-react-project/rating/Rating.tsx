import React from 'react';
import {
    Rating as PrimeRating,
    RatingProps as PrimeRatingProps,
} from 'primereact/rating';

// Wrapper component for PrimeReact Rating
export const Rating: React.FC<PrimeRatingProps> = (props) => {
    return <PrimeRating {...props} />;
};
