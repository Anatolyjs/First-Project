'use strict';

document.body.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
        event.preventDefault();
    }
})
const accordionWedo = () => {
    const wedoAccordion = document.querySelector('.wedo__accordion');

    wedoAccordion.addEventListener('click', (event) => {
        const accordionCart = document.querySelectorAll('.accordion__cart'),
            accordionHeader = document.querySelectorAll('.accordion__header');

        let target = event.target;
        target = target.closest('.accordion__header');

        if (target) {
            target.parentNode.classList.toggle('active');
            accordionHeader.forEach((item) => {
                if (target !== item) {
                    item.parentNode.classList.remove('active');
                }
            })
        }
    })
};
accordionWedo();

const headerMenu = () => {
    const headerBtn = document.querySelector('.header-btn'),
        headerRow = document.querySelector('.header__row');
    
    headerBtn.addEventListener('click', () => {
        headerRow.classList.toggle('active');
    });
}
headerMenu();

const scrollTo = () => {
    const menuItem = document.querySelectorAll('.menu a'),
        menu = document.querySelector('.menu');

    const scroll = (clickedItem) => {
        const anchor = document.getElementById(clickedItem.textContent);

        anchor.scrollIntoView({behavior: "smooth", block: "start"});
    };
    menu.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;
        if (!target.matches('a')) {
            return
        }
        else {
            scroll(target);
            target.classList.add('active');
            menuItem.forEach((item) => {
                if (target === item) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            })
        }
    });
}
scrollTo();

const menuPosition = () => {
    const intro = document.querySelector('.intro'),
        header = document.querySelector('.header');

    const checkingHeight = () => {
        if (window.pageYOffset >= intro.offsetHeight) {
            header.classList.add('header--fixed');
        } else {
            header.classList.remove('header--fixed');
        }
    }
    checkingHeight();

    document.addEventListener('scroll', checkingHeight);
};
menuPosition();

const sliderIntro = () => {
    const intro = document.getElementById('intro'),
        work = document.getElementById('work'),
        about = document.getElementById('about'),
        contacts = document.getElementById('contact'),
        slider = document.querySelector('.slider'),
        sliderItems = document.querySelectorAll('.slider__item');

    const elements = [intro, work, about, contacts];

    const scrollTo = (target, sliderItems, arr) => {
        sliderItems.forEach((item, index) => {
            if (target === item) {
                arr[index].scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        });
    }

    const toggleClass = (target, collection) => {
        collection.forEach((item) => {
            if (target === item) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    slider.addEventListener('click', (event) => {
        let target = event.target;
            target = target.closest('.slider__item')
        if (target) {
            toggleClass(target, sliderItems);
            scrollTo(target, sliderItems, elements);
        }
    });
};
sliderIntro();

const reviewsSlider = () => {
    const firstReviewsItem = document.querySelector('.reviews__first .reviews__item'),
        firstReviewsRow = document.querySelectorAll('.reviews__first .reviews__row'),
        secondReviewsItem = document.querySelector('.reviews__second .reviews__item'),
        secondReviewsRow = document.querySelectorAll('.reviews__second .reviews__row');

    const nextSlide = (elements) => {
        let counter = 0;
        elements.forEach((item, index) => {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                counter = index;
            }
        })
        if (counter === elements.length - 1) {
            elements[0].classList.add('active');
        } else {
            elements[counter+1].classList.add('active');
        }    
    };

    const prevSlide = (elements) => {
        let counter = 0;
        elements.forEach((item, index) => {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                counter = index;
            }
        })
        if (counter === 0) {
            elements[elements.length - 1].classList.add('active');
        } else {
            elements[counter-1].classList.add('active');
        }   
    }
    
    const listeneerItem = (element, row) => {
        element.addEventListener('click', (event) => {
            let target = event.target;
    
            if (target.matches('.next')) {
                nextSlide(row);
            }
            if (target.matches('.prev')) {
                prevSlide(row);
            }
        })
    }
    listeneerItem(firstReviewsItem, firstReviewsRow);
    listeneerItem(secondReviewsItem, secondReviewsRow);
};
reviewsSlider();