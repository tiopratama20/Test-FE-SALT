<template>
    <div class="box-container-card desk-view" id="card-container">
        <div class="box-container">
            <div v-animate-onscroll="{ down: 'animated zoomInUp' }" class="card-desk">
                <div class="card-info">
                    <div class="box-header-card">
                        <h3>Who we are</h3>
                    </div>
                    <div class="box-desc-card">
                        <h4>Technology Company</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
                            laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                            beatae
                            vitae dicta sunt explicabo.</p>
                    </div>
                </div>
            </div>
            <div v-animate-onscroll="{ down: 'animated zoomInUp' }" class="card-desk">
                <div class="card-info">
                    <div class="box-header-card">
                        <h3>What we do</h3>
                    </div>
                    <div class="box-desc-card">
                        <h4>Professional Brand Management</h4>
                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                            voluptatem.</p>
                    </div>
                </div>
            </div>
            <div v-animate-onscroll="{ down: 'animated zoomInUp' }" class="card-desk">
                <div class="card-info">
                    <div class="box-header-card">
                        <h3>How we do</h3>
                    </div>
                    <div class="box-desc-card">
                        <h4>Strategize, Design, Collaborate</h4>
                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                            nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
                            voluptate velit esse sequam nihil molestiae consequatur.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="box-container-card mobile-view">
        <swiper
        :pagination="{
          type: 'fraction',
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
            <div class="card-info">
                <div class="box-header-card">
                    <h3>Who we are</h3>
                </div>
                <div class="box-desc-card">
                    <h4>Technology Company</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
                        laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae
                        vitae dicta sunt explicabo.</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card-info">
            <div class="box-header-card">
                <h3>What we do</h3>
            </div>
            <div class="box-desc-card">
                <h4>Professional Brand Management</h4>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                    aliquam quaerat voluptatem.</p>
            </div>
        </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card-info">
                <div class="box-header-card">
                    <h3>How we do</h3>
                </div>
                <div class="box-desc-card">
                    <h4>Strategize, Design, Collaborate</h4>
                    <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                        nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
                        ea voluptate velit esse sequam nihil molestiae consequatur.</p>
                </div>
            </div>
        </swiper-slide>
      </swiper>

      <div class="box-navigation">
        
      </div>
    </div>

</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFade, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
    navigation: {
    prevEl: '.slidePrev-btn',
    nextEl: '.slideNext-btn'
  }
  },
  setup() {
    return {
      modules: [EffectFade, Pagination, Navigation],
    };
  },
};
</script>

<style lang="scss">
    .box-container-card {
        margin-bottom: 20px;
        background-color: var(--vc-clr-white);
    }

    .box-container-card {
        &.desk-view {
            @media(max-width:768px) {
                display: none;
            }

            .box-container {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-column-gap: 25px;

                .card-desk {
                    padding: 20px;
                    border-radius: 20px;
                    transition: all .4s ease;
                    box-shadow: 0 4px 6px 0px rgba(64, 152, 219, .3);

                    &:hover {
                        transform: scale(1.05);
                        color: white;
                        background: var(--vt-c-text-default);
                        box-shadow: 0 0px 0px 0px rgba(64, 152, 219, 0.1);

                        .box-desc-card {
                            h4 {
                                color: var(--vt-c-text-hover)
                            }

                            p {
                                color: var(--vt-c-text-hover)
                            }
                        }
                    }
                }
            }
        }

        &.mobile-view {
            @media(min-width:769px) {
                display: none;
            }

            .swiper{
                overflow: unset;
                overflow-x: clip;
                .swiper-button-prev{
                    top: 130%;
                    left: auto;
                    right: 80px;
                }
                .swiper-button-next{
                    top: 130%;
                }
                .swiper-pagination-fraction{
                    bottom: -95px;
                    left: 0;
                    width: max-content;
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 38px;
                    color: #C0C0C0;
                }
                .swiper-pagination-current{
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 38px;
                    color: #303030;
                }
                .swiper-pagination-total{
                    font-size: 16px;
                    line-height: 38px;
                }
            }
            .box-navigation{
                height: 100px;
            }
        }

        .box-header-card {
            font-size: 36px;
            line-height: 30px;
            margin-bottom: 12px;
        }

        .box-desc-card {
            h4 {
                font-size: 18px;
                line-height: 38px;
                color: #000000;
            }

            p {
                font-size: 14px;
                line-height: 24px;
                letter-spacing: 0.01em;

                color: #777777;
            }
        }
    }

    .box-container-card.mobile-view{
        padding: 48px 40px;
    }
</style>