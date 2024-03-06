import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Pagination],
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  });