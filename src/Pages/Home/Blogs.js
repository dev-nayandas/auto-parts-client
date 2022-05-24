import React from 'react';

const Blogs = () => {
    return (
        <div style={{ width: '100%' }}>
            <div className='text-center'>
                <h1 className='text-center text-2xl'>Some Important Question And Answer</h1>

            </div>


            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Question</th>
                            <th>Answer</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr class="active">
                            <th>1</th>
                            <td> How I will improve my perfomance on React Application?</td>
                            <td>I Will take follwing Steps:<br></br> 1. Repitation is mother of all skill. So i will practice more and more.<br></br>2. I will read more documentation.<br></br>3. I will spend more time on it.<br></br> 4.I wil not will give up it eassily.<br></br>5. I will increase my skill on debuging</td>

                        </tr>

                        <tr class="active">
                            <th>2</th>
                            <td>What are the different ways to manage a state in a React application?</td>
                            <td>1. Communication State:Communication plays a crucial role in storing information <br></br>2.Data State:Every fragment of received data has<br></br>3.Control State:It refers to the state which the user has input into the app.<br></br>4. Session State:Unpredictable shaped states which are not required throughout<br></br>5.Location State:Location state is the UTF-8 display that appears in your URL bar.</td>

                        </tr>
                        <tr class="active">
                            <th>3</th>
                            <td>How does prototypical inheritance work?</td>
                            <td>1. This allows you to add new methods to a prototype <br></br>2.which will be automatically made available to all the objects which delegate to that prototype.<br></br>3.That prototype object has a prototype of its own<br></br>4. What is prototype example?
                                Using basic sketches and rough materials <br></br>5.It is a method by which an object can inherit the properties and methods of another object.</td>

                        </tr>
                        <tr class="active">
                            <th>4</th>
                            <td>What are the different ways to manage a state in a React application?</td>
                            <td>1. We will lose control of the state across all components. <br></br>2.o change a value in the state object<br></br>3.Mutating state directly can lead to odd bugs<br></br>4.State updates in React are asynchronous<br></br>5.

                                Every object with its methods and properties contains an internal and hidden property.</td>

                        </tr>
                        <tr class="active">
                            <th>5</th>
                            <td>What is a unit test? Why should write unit tests?</td>
                            <td>1. Unit tests are typically automated tests written and run by software developers <br></br>2.ensure that a section of an application  meets its design and behaves as intended<br></br>3.The purpose is to validate that each unit of the software code performs as expected<br></br>4. The purpose is to validate that each unit of the software code performs as expected<br></br>5.Unit tests help to fix bugs early in the development cycle and save costs.</td>

                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Blogs;