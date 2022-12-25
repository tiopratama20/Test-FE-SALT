<template>
    <div class="hero-banner">
        <div class="box-container-banner">
            <div class="box-banner-hero">
                <div class="box-laber-banner">
                    <h3>Discover <br />Your Wonder</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam.</p>
                </div>
            </div>
        </div>
        <a href="#card-container" class="box-hero-arrow">
            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.06409 0.22956C1.38258 -0.0765201 1.89894 -0.0765201 2.21743 0.22956L9.7961 7.51303L17.3748 0.22956C17.6933 -0.0765201 18.2096 -0.0765201 18.5281 0.22956C18.8466 0.53564 18.8466 1.03189 18.5281 1.33798L9.7961 9.72986L1.06409 1.33798C0.745604 1.03189 0.745604 0.53564 1.06409 0.22956Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.06409 6.4997C1.38258 6.19362 1.89894 6.19362 2.21743 6.4997L9.7961 13.7832L17.3748 6.4997C17.6933 6.19362 18.2096 6.19362 18.5281 6.4997C18.8466 6.80578 18.8466 7.30204 18.5281 7.60812L9.7961 16L1.06409 7.60812C0.745604 7.30204 0.745604 6.80578 1.06409 6.4997Z" fill="black"/>
            </svg>
        </a>
    </div>
</template>

<script>
// $("html, body").animate({ scrollTop: scroll_height }, 600);
</script>

<style acoped lang="scss">
.hero-banner {
    .box-container-banner {
        .box-banner-hero {
            background-image: url('../src/assets/images/Hero-image.png') !important;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 450px;
            position: relative;
            overflow: hidden;
            
            @media (max-width:768px){
                height: 550px;
                background-position: bottom center;
            }
            &:before {
                content: "";
                width: 0;
                height: 0;
                border-left: 80rem solid transparent;
                border-right: 0 solid transparent;
                border-bottom: 10rem solid #53A7E9;
                position: absolute;
                right: 0;
                bottom: 0;
                @media (max-width:768px) {
                    border-left: 40rem solid transparent;
                    border-bottom: 19rem solid #53A7E9;
                }
            }
            &:after {
                content: "";
                width: 0;
                height: 0;
                border-left: 0 solid transparent;
                border-right: 80rem solid transparent;
                border-bottom: 15rem solid var(--vt-c-text-default);
                position: absolute;
                left: 0;
                bottom: 0;
                @media (max-width:768px) {
                    border-right: 85rem solid transparent;
                    border-bottom: 20rem solid var(--vt-c-text-default);
                }
            }

            .box-laber-banner {
                // width: 30%;
                color: white;
                position: absolute;
                left: 50px;
                bottom: 30px;
                z-index: 2;
                @media (max-width:768px) {
                    left: 0px;
                    padding: 0px 30px;
                }

                h3 {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 36px;
                    line-height: 34px;
                }

                p {
                    margin-bottom: 0;
                    font-size: 16px;
                    @media (min-width:769px) {
                        width: 60%;
                    }
                }
            }
        }
    }
    .box-hero-arrow {
        width: max-content;
        height: max-content;
        margin: auto;
        padding: 5px 12px;
        border-radius: 50%;
        background: white;
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translatex(-50%);
        z-index: 2;
        filter:drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));
        
        &:before {
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            content: '';
            width: 44px;
            height: 44px;
            box-shadow: 0 0 0 0 rgba(255,255,255,.1);
            border-radius: 100%;
            opacity: 0;
            -webkit-animation: sdb03 3s infinite;
            animation: sdb03 3s infinite;
            box-sizing: border-box;
        }

        svg {
            margin-top: 7px;
        }

        
    }
}
</style>
