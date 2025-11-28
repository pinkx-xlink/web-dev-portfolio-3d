import React from 'react'
import TitleHeader from '../components/TitleHeader.jsx'
import { testimonials } from '../constants/index.js'

const Testimonials = () => {
  return (
    <section id="testimonials" className='flex-center 
section-padding'>
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader title="What People Say about Me?"
                sub="⭐ Client Feedback Highlights"
            />

            <div className='lg:columns-3 md:columns-2 columns-1 mt-16'>
                {testimonials.map((testimonial) => (
                    <p>{testimonial.review}</p>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonials