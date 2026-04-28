import { Swiper } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

/**
 * Initialize the testimonial slider for the home page.
 */
const initTestimonialSlider = () => {
  const sliderEl = document.querySelector('.swiper');
  
  if (!sliderEl) return;

  new Swiper(sliderEl as HTMLElement, {
    modules: [Navigation, Pagination],
    loop: true,
    speed: 800,
    spaceBetween: 30,
    navigation: {
      nextEl: '.control-arrow-next',
      prevEl: '.control-arrow-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
};

// Start initialization
initTestimonialSlider();
