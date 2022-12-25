<template>
    <div class="OurSpeciality" id="OurSpeciality">
        <div class="box-container">
            <div class="box-iner-special">
                <div class="box-header-special">
                    <h3>OUR SPECIALITY</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in
                        venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>
                </div>
                <div class="box-slider-special">
                    <swiper :pagination="true" :navigation="true" :slidesPerView="3" :spaceBetween="30" :centeredSlides="true" :loop="true"
                        :modules="modules" class="mySwiper">
                        <swiper-slide>
                            <div class="card-info">
                                <div class="box-header-card">
                                    <img src="../assets/images/Speed.svg">
                                    <span>Speed Inprovement</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="card-info">
                                <div class="box-header-card">
                                    <img src="../assets/images/accessoris.svg">
                                    <span>Speed Inprovement</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="card-info">
                                <div class="box-header-card">
                                    <img src="../assets/images/exhausted.svg">
                                    <span>Speed Inprovement</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                    <div class="box-desc-card">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor,
                            in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
    // Import Swiper Vue.js components
    import {
        Swiper,
        SwiperSlide
    } from "swiper/vue";

    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/effect-fade";
    import "swiper/css/pagination";
    import "swiper/css/navigation";

    // import required modules
    import {
        EffectFade,
        Pagination,
        Navigation
    } from "swiper";

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
    @import '../../node_modules/vue3-carousel/dist/carousel.css';

    .OurSpeciality {
        background: #509FDD;
        padding: 44px 25px;

        .box-iner-special {
            background-color: white;
            padding: 45px 25px;
            .box-header-special{
                margin-bottom: 30px;
                h3{
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 28px;
                    text-transform: uppercase;
                    color: #029FE4;
                    margin-bottom: 20px;
                }
                p{
                    font-weight: 300;
                    font-size: 14px;
                    line-height: 24px;
                    color: #303030;
                }
            }
        }

        .box-slider-special {
            padding-bottom: 60px;
            .swiper{
                overflow: unset;
                overflow-x: clip;

                &:before{
                    content: "";
                    height: 126px;
                    width: 42px;
                    position: absolute;
                    filter: blur(5px);
                    background: rgba(255, 255, 255, 0.37);
                    border-radius: 16px;
                    box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
                    backdrop-filter: blur(1px);
                    -webkit-backdrop-filter: blur(11.7px);
                    border: 1px solid rgba(255, 255, 255, 0.53);
                    z-index: 2;
                }

                &:after{
                    content: "";
                    height: 126px;
                    width: 42px;
                    position: absolute;
                    top: 0;
                    right: 0;
                    filter: blur(5px);
                    background: rgba(255, 255, 255, 0.37);
                    border-radius: 16px;
                    box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
                    backdrop-filter: blur(1px);
                    -webkit-backdrop-filter: blur(11.7px);
                    border: 1px solid rgba(255, 255, 255, 0.53);
                    z-index: 2;
                }

                .swiper-slide{
                    .card-info{
                        .box-header-card{
                            img{
                                height: 121px;
                                width: 100%;
                            }
                            span{
                                display: none;
                                font-size: 14px;
                                line-height: 18px;
                                text-align: center;
                                color: #303030;
                            }
                        }
                    }

                    &.swiper-slide-active{
                        .card-info{
                            .box-header-card{
                                span{
                                    display: block;
                                }
                            }
                        }
                    }
                }

                .swiper-button-prev, .swiper-button-next, .swiper-pagination{
                    bottom: -160px;
                    top: unset;
                    @media (min-width:768px) {
                        bottom: -100px;
                    }
                }

                .swiper-pagination{
                    .swiper-pagination-bullet{
                        background: #DAF3FC;
                    }
                    .swiper-pagination-bullet-active{
                        border: 2px solid #3D46A2;
                    }
                }
            }

            .box-desc-card{
                font-weight: 300;
                font-size: 14px;
                line-height: 24px;
                text-align: center; 
                color: #A7A7A7;
            }
        }
    }
</style>