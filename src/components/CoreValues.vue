<template>
    <div class="CoreValues" id="CoreValues">
        <div class="box-container">
            <div class="box-header-core">
                <h3 class="header-title">Our Core Values</h3>
                <p>Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.
                    <br>&nbsp;<br>
                    In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.</p>
            </div>
            <div class="box-core-desc">
                <div class="item-core">
                    <div class="head-item">Dedication</div>
                    <div class="body-item">
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.
                    </div>
                </div>
                <div class="item-core">
                    <div class="head-item">Intellectual Honesty</div>
                    <div class="body-item">
                        Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.
                    </div>
                </div>
                <div class="item-core">
                    <div class="head-item">Curiosity</div>
                    <div class="body-item">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.
                    </div>
                </div>
            </div>
            <img v-animate-onscroll="{ down: 'animated zoomInUp' }" src="../assets/images/Core-Values-Illustration.png" class="core-ilustration">
        </div>
    </div>
</template>
<style lang="scss">
.CoreValues{
    overflow: hidden;
    background: #F5F5F5;
    padding-top: 3rem;
    .box-container{
        position: relative;
        @media (max-width:768px) {
            padding: 0 30px;
        }
        .core-ilustration{
            @media (min-width:768px) {
                position: absolute;
                bottom: 4rem;
                right: 0;
            }
            margin-top: 46px;
            max-height: 250px;
            right: -40px;
        }
        .box-header-core{
            margin-bottom: 24px;
            .header-title{
                font-weight: 500;
                font-size: 36px;
                line-height: 30px;
                margin-bottom: 24px;
                @media(max-width:768px){
                    text-align: center;
                }
            }
            p{
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0.01em;
                color: #777777;

            }
        }
        .box-core-desc{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 25px;
            grid-row-gap: 25px;
            @media(min-width:769px){
                width: 60%; 
            }
            @media(max-width:768px){
                grid-template-columns: repeat(1, 1fr);
            }
            
            .item-core{
                .head-item{
                    position: relative;
                    font-size: 24px;
                    line-height: 38px;
                    display: flex;
                    align-items: center;
                    color: #000000;

                    &:before{
                        content: '';
                        background: #747474;
                        display: block;
                        height: 2px;
                        width: 26px;
                        margin-right: 18px;
                    }
                }
                .body-item{
                    font-size: 16px;
                    line-height: 24px;
                    color: #777777;
                    @media (max-width:768px) {
                        padding-left: 44px;
                    }
                }
            }
        }
    }
}
</style>