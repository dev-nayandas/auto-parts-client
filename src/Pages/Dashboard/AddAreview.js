import React from 'react';

const AddAreview = () => {
    const addReview = event => {
        event.preventDefault()


        const reviews = {
            revie: event?.target?.review?.value,
            rating: event?.target?.rating?.value,
        }
        // const review = event.target.review.value;
        // const rating = event.target.rating.value;
        console.log(reviews)

        const url = 'http://localhost:5000/reviews';
        fetch(url, {
            method: 'POST',
            header: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)


        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }


    return (
        <div>
            {/* <h1 className='text-4xl text-center'>Add a Review</h1> */}
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col ">

                    <div class="card  shadow-2xl bg-base-100">
                        <form onSubmit={addReview} class="card-body">
                            <h1 className='text-4xl text-center'>Add a Review</h1>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Review</span>
                                </label>
                                <input type="text" name='review' placeholder="Review" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Rating</span>
                                </label>
                                <input type="text" name='rating' placeholder="Rating 1 to 5" class="input input-bordered" />

                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Submit Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAreview;