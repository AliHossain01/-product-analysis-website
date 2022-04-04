import React from 'react';

const Blogs = () => {
    return (
        <section className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2 bg-gray-200'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className=' font-mono text-xl text-center md:text-4xl '>
                    Question Answer?
                </h1>

                <h1 className=' font-mono mt-10 text-xl text-center md:text-2xl '>
                    1. What is Context API?
                </h1>
                <p className=' font-mono mt-2 mb-3 font-semibold text-gray-900'>

                    Answer: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent. React.createContext() is used for create the Context. It returns a consumer and a provider. Provider is a component that provides the state to its children. It will hold the state and be the parent of all the components that might need that state. Consumer as it so happens is a component that consumes and uses the state. </p>

                <h1 className=' font-mono mt-10 text-xl text-center md:text-2xl '>
                    2. What is Semantic Tag?
                </h1>
                <p className=' font-mono mt-2 mb-3 font-semibold text-gray-900'>

                    Answer:A semantic element clearly describes its meaning to both the browser and the developer. Some non-semantic elements like div,span tells nothing about it's content. But the semantic element like nav,header,article,footer clearly defines the meaning of it's content. By using semantic elements, we are helping the browser to understand the meaning of the content instead of just displaying it. By providing this extra level of clarity, HTML5 semantic elements also help search engines to read the page and find the required information faster.

                </p>



            </div>
        </section>
    );
};

export default Blogs;