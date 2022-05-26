import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-5 lg:mx-12 text-left'>
            <h2 className='text-3xl text-secondary font-bold text-center my-5'>React Concepts</h2>
            <div className='my-5'>
                <h3 className='text-primary font-bold text-xl mb-3'>How will you improve the performance of a React Application?</h3>
                <p>There many things to improve the performance of a react application. Don't import too many images manually. Try to upload the image in a site and then use them. Don't use any unnecessary props in the components.</p>
            </div>

            <div className='my-8'>
                <h3 className='text-primary font-bold text-xl mb-3'>What are the different ways to manage a state in a React application?</h3>
                <p>There are four main types of state. These are local, state, global state, server state,url state. Normally we use local state when we need to use data in one or two component. And we use global state when we need to share data in multiple components.And we use server and url state when we need to load data from outside.</p>
            </div>
            <div className='my-8'>
                <h3 className='text-primary font-bold text-xl mb-3'>How does prototypical inheritance work?</h3>
                <p> Javascript is an object oriented programming language.Prototypical inheritance is feature of javascript.Prototypical inheritance refers to the ability to access object properties from another object. It allows an object to add method and properties in object. </p>
            </div>
            <div className='my-8'>
                <h3 className='text-primary font-bold text-xl mb-3'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
                <p>useState is a react hook. React hook is a useful method of React js. If any If any changes happened in the project it instantly check that changes. Using useSate we can easily assign value to a variable.</p>
            </div>
            <div className='my-8'>
                <h3 className='text-primary font-bold text-xl mb-3'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                <p>We can search an element in an array object by filter method.
                    Ex. products.filter(product=(arrowRight sign)product.name==='name')
                </p>
            </div>
        </div>
    );
};

export default Blogs;