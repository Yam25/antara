import { useRef } from 'react'
import './CategorySection.css'
import Card from './Card'

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

function CategorySection({ activeCategory }) {
  const swiperRef = useRef(null)
  const total = activeCategory.items.length

  return (
    <div className="category-section">
      <div className="section-header">
        <div className="section-header__left">
          <h1>{activeCategory.sectionTitle}</h1>
          <p>{activeCategory.sectionSubtitle}</p>
        </div>
        <div className="section-header__right">
          <span className="section-count">
            Showing {total} {activeCategory.sectionTitle.toLowerCase()}
          </span>
          <button
            className="nav-btn nav-btn--header"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            ‹
          </button>
          <button
            className="nav-btn nav-btn--header"
            onClick={() => swiperRef.current?.slideNext()}
          >
            ›
          </button>
        </div>
      </div>

      <Swiper
        modules={[Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{ clickable: true }}
        slidesPerView={2.2}
        centeredSlides={true}
        spaceBetween={20}
        grabCursor={true}
        loop={total > 2}
        className="card-swiper"
      >
        {activeCategory.items.map((item) => (
          <SwiperSlide key={item.name}>
            {({ isActive }) => <Card item={item} isActive={isActive} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CategorySection
