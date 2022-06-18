/**
 * @typedef SwiperAutoPlay
 * @property {number=} delay 슬라이딩 되고 해당 슬라이딩 아이템에서 머무르는 시간 값
 * @property {boolean=} disableOnInteraction 사용자에 의해 슬라이딩 된 후 자동 슬라이딩을 비활성화 할지 말지에 대한 값입니다. false 로 설정하면 사용자에 의해 슬라이딩이 되도 자동 슬라이딩이 유지됩니다.
 */

/**
 * @description swiper 라이브러리를 쉽게 사용하기 위해 제작한 클래스 입니다.
 */
// https://swiperjs.com/types/interfaces/types_swiper_options.swiperoptions
class SwiperCustom {
  /**
   * @description swiper 기능을 적용할 element 가 저장되는 변수입니다.
   */
  targetElement;

  /**
   * @description swiper 객체가 저장되는 변수입니다.
   */
  swiper;

  /**
   * @description swiper 관련 옵션이 저장되는 변수입니다.
   */
  options;

  /**
   * @type {string}
   * @description swiper 기능이 적용될 요소의 selector 가 저장되는 변수입니다.
   */
  selector;

  /**
   * @type {boolean}
   * @description 슬라이딩 가능 여부 값이 저장되는 변수입니다. (해당 값이 true 이면 슬라이딩이 가능한 상태고, 해당 값이 false 이면 슬라이딩이 불가능한 상태가 됩니다.)
   */
  slidingPossible = true;

  constructor(selector) {
    this.selector = selector;
    this.targetElement = document.querySelector(selector);
    this.options = this.getInitOptions();
  }

  /**
   * @description 최초 기본 설정 값으로 할당된 옵션을 반환하는 함수입니다.
   */
  getInitOptions() {
    const t = this;

    return {
      direction: 'horizontal',
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 300,
      loopPreventsSlide: true,
      on: {
        slideChange: function () {
          if (t.swiper === undefined) {
            return;
          }
          const index = t.swiper.realIndex;
          // const currentSlide = t.swiper.slides[index]; 
          t.setActivePaginationItemElementIndex(index);
        },
      },
    };
  }

  /**
   * @description 현재 swiper 관련 옵션을 반환하는 함수입니다.
   */
  getOptions() {
    return this.options;
  }

  /**
   * @description 필요한 함수르 호출하는 등 초기화 함수입니다. (이 함수는 최초 한번만 호출되는 함수입니다.)
   */
  init() {
    this.setSwiper(this.selector);
    this.generatePaginationItems();
    this.setActivePaginationItemElementIndex(0);
  }

  /**
   * @description 현재 슬라이딩 가능 여부 값을 지정하는 함수입니다.
   */
  setSlidingPossible(value) {
    this.slidingPossible = value;
  }

  /**
   * @description 현재 슬라이딩 가능 여부 값을 반환하는 함수입니다.
   */
  getSlidingPossible() {
    return this.slidingPossible;
  }

  /**
   * @description swiper 옵션중 direction (슬라이딩 방향 (수직, 수평)) 값을 변경하는 함수입니다. (init 함수가 호출되기 전에 사용해야 합니다.)
   * @param {'vertical' | 'horizontal'} direction 슬라이딩 방향 (수직, 수평) 값 입니다.
   */
  setDirection(direction) {
    if (!['vertical', 'horizontal'].includes(direction)) {
      console.error('vertical, horizontal 둘 중 하나여야 합니다.');
      return;
    }

    this.options.direction = direction;
  }

  /**
   * @description swiper 옵션중 autoplay (자동 슬라이딩) 값을 변경하는 함수입니다. (init 함수가 호출되기 전에 사용해야 합니다.)
   * @param {SwiperAutoPlay | boolean} value autoplay 값입니다.
   */
  setAutoplay(value) {
    if (typeof value !== 'object' && typeof value !== 'boolean') {
      console.error('object 이거나 boolean 이어야 합니다.');
      return;
    }

    this.options.autoplay = value;
  }

  /**
   * @description swiper 옵션중 speed (슬라이딩 되는 속도) 값을 변경하는 함수입니다. (init 함수가 호출되기 전에 사용해야 합니다.)
   * @param {number} value 
   */
  setSpeed(value) {
    if (typeof value !== 'number') {
      console.error('number 형식이어야 이어야 합니다.');
      return;
    }

    this.options.speed = value;
  }

  /**
   * @description siwper 옵션중 loop (무한 슬라이딩) 값을 변경하는 함수입니다. (init 함수가 호출되기 전에 사용해야 합니다.)
   * @param {boolean} value 
   */
  setLoop(value) {
    if (typeof value !== 'boolean') {
      console.error('boolean 형식이어야 이어야 합니다.');
      return;
    }

    this.options.loop = value;
  }

  /**
   * @description selector 와 swiper 관련 옵션을 사용해 Swiper 객체를 초기화하는 함수입니다.
   * @param {string} selector selector
   */
  setSwiper(selector) {
    this.swiper = new Swiper(selector, this.options);
  }

  /**
   * @description 특정 인덱스 아이템으로 슬라이딩 하는 함수입니다.
   * @param {number} value item index
   */
  slideToIndex(value) {
    this.swiper.slideTo(value + 1);
  }

  /**
   * @description 이전 또는 다음으로 슬라이딩 하는 함수입니다.
   * @param {'prev' | 'next'} type 이전인지 또는 다음인지에 대한 종류값입니다.
   */
  sliding(type) {
    const t = this;

    // console.log('...?', this.getSlidingPossible());
    if (this.getSlidingPossible() !== true) {
      return;
    }

    this.setSlidingPossible(false);
    if (type === 'prev') {
      this.swiper.slidePrev();
    } else {
      this.swiper.slideNext();
    }

    setTimeout(function() {
      t.setSlidingPossible(true);
    }, this.getOptions().speed + 30);
  }

  /**
   * @description 현재 슬라이딩 아이템 총 갯수를 반환하는 함수입니다.
   */
  getSlideItemCount() {
    if (this.options.loop === true) {
      return this.swiper.slides.length - 2;
    } else {
      return this.swiper.slides.length;
    }
  }

  /**
   * @description swiper pagination item list 에 해당하는 element 를 반환하는 함수입니다.
   */
  getSwiperPaginationItemListElement() {
    return this.targetElement.querySelector('.swiper-pagination-item-list');
  }

  /**
   * @description siwper pagination item element 를 슬라이딩 아이템 갯수만큼 dom 에 그리는 함수입니다.
   */
  generatePaginationItems() {
    const swiperPaginationItemListElement = this.getSwiperPaginationItemListElement();
    // console.log('swiperPaginationItemListElement', swiperPaginationItemListElement);
    const firstLiElement = swiperPaginationItemListElement.querySelector('li');
    // console.log('firstLiElement', firstLiElement);
    this.removeAllChild(swiperPaginationItemListElement);
    for (let i = 0; i < this.getSlideItemCount(); i++) {
      const copyLiElement = firstLiElement.cloneNode(true);
      swiperPaginationItemListElement.appendChild(copyLiElement);
    }
  }

  /**
   * @description target element 의 자식 요소를 모두 dom 에서 제거하는 함수입니다.
   */
  removeAllChild(target) {
    while (target.hasChildNodes()) {
      target.removeChild(target.firstChild);
    }
  }

  /**
   * @description 특정 index 에 해당하는 pagination item 에 active 효과를 주는 함수입니다.
   */
  setActivePaginationItemElementIndex(index) {
    const swiperPaginationItemListElement = this.getSwiperPaginationItemListElement();
    const liElements = swiperPaginationItemListElement.children;
    let countIndex = 0;
    for (const li of liElements) {
      if (countIndex === index) {
        li.classList.add('active');
      } else {
        li.classList.remove('active');
      }
      countIndex++;
    }
  }
}
