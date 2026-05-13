import './CategorySection.css'
import Card from './Card'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

function CategorySection({ activeCategory }) {
  return (
    <div className="category-section">
      <div className="section-header">
        <h1>{activeCategory.sectionTitle}</h1>
        <p>{activeCategory.sectionSubtitle}</p>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={true}
        slidesPerView={2.2}
        spaceBetween={30}
        className="card-container"
      >
        {activeCategory.items.map((item) => {
          return (
            <SwiperSlide key={item.name}>
              <Card item={item} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default CategorySection
