import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div class="hero min-h-screen bg-base-200">
            
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                <h1 class="text-5xl font-bold">My Profile</h1>
                    
                    <h1 class="py-2 text-secondary">Name:   {user?.displayName}</h1>
                    <h1 class="py-2 text-secondary">email:  {user?.email}</h1>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                    <h1 class="text-5xl font-bold text-secondary text-center">Update Profile</h1>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Education</span>
                            </label>
                            <input type="text" placeholder="Education" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Location</span>
                            </label>
                            <input type="text" placeholder="Location" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Phone Number</span>
                            </label>
                            <input type="text" placeholder="Phone Number" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">LinkdedIn Profile Link</span>
                            </label>
                            <input type="url" placeholder="your linkedIn profile url" class="input input-bordered" />
                            
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;