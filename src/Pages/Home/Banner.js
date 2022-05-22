import React from 'react';

const Banner = () => {
    return (
        <div style={{height: '500px', backgroundImage : "url(https://images.pexels.com/photos/159293/car-engine-motor-clean-customized-159293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"}} class="hero min-h-fit" >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold ">Welcome To Auto Parts Mart</h1>
            <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
         
          </div>
        </div>
      </div>
    );
};

export default Banner;