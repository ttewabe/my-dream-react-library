import React, { useState } from 'react';
import { StyledRating } from './Rating.styles';
import { Rating, RatingChangeEvent } from 'primereact/rating';
//import { ReadOnly } from '../../stories/Rating.stories';

export interface RatingValueProps {
    value: number;
    stars: number;
    readOnly: boolean;
    cancel: boolean;
}

export const RatingValue: React.FC<RatingValueProps> = () => {
    const [values, setValue] = useState<number | undefined>(undefined);

    const handleRatingChange = (e: RatingChangeEvent) => {
        setValue(e.value ? e.value : 0);
    };

    return (
        <StyledRating className="card flex justify-content-center">
            <Rating
                value={values}
                onChange={handleRatingChange}
                cancel={false}
            />
        </StyledRating>
    );
};
