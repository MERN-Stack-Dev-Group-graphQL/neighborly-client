import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import StarCount from '../../shared/components/reviews/StarCount';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import './Testimonials.scss';

const mockTestimonials = [
  {
    _id: 1,
    author: 'Andrea Davidson',
    stars: 4,
    count: 185,
    comment:
      'Iste delectus laborum soluta dolorum quasi magni architecto consequuntur adipisci ducimus fuga debitis eligendi modi facilis dolor totam.',
  },
  {
    _id: 2,
    author: 'Mathew Marsh',
    stars: 3,
    count: 105,
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    _id: 3,
    author: 'Robert Moyston',
    stars: 4,
    count: 224,
    comment:
      'Accusantium nihil rerum dignissimos autem asperiores quisquam reprehenderit ea, commodi cum magni perferendis, veniam corporis, suscipit ipsa recusandae!',
  },
  {
    _id: 4,
    author: 'Kelon Taylor',
    stars: 4,
    count: 312,
    comment: 'Numquam dolorem tenetur recusandae unde.',
  },
  {
    _id: 5,
    author: 'Samatha Richards',
    stars: 3,
    count: 98,
    comment:
      'Voluptas exercitationem debitis, ducimus mollitia, molestias ex ipsam ad ipsa consequuntur voluptates magni odit commodi culpa omnis.',
  },
  {
    _id: 6,
    author: 'Tara Sinclair',
    stars: 4,
    count: 222,
    comment: 'Incidunt itaque saepe error optio doloribus iusto, similique, eveniet magni unde ducimus voluptatum dolore laborum.',
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <div className='container'>
        <h2 className='heading-2 text-center mb-4'>See what our members are saying</h2>
        <div className='testimonials--wrapper'>
          <OwlCarousel className='owl-theme' items='4' autoplay nav={false} dots={false} loop margin={10}>
            {mockTestimonials.map((testimonial) => (
              <div className='item tns-item' key={testimonial._id}>
                <div className='author'>{testimonial.author}</div>
                <div className='star-ratings'>
                  <StarCount starCount={testimonial.stars} rateCount={testimonial.count} />
                </div>
                <div className='comment'>{testimonial.comment}</div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
