import React from 'react';

const AddAreview = () => {
    return (
        <div>
            {/* <h1 className='text-4xl text-center'>Add a Review</h1> */}
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col ">
                   
                    <div class="card  shadow-2xl bg-base-100">
                        <div class="card-body">
                        <h1 className='text-4xl text-center'>Add a Review</h1>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Review</span>
                                </label>
                                <input type="text" placeholder="Review" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Rating</span>
                                </label>
                                <input type="text" placeholder="Rating 1 to 5" class="input input-bordered" />
                              
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Submit Review</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAreview;