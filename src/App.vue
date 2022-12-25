<script setup>
import NavMenu from './components/Navigation.vue';
import HeroBanner from './components/Hero-Banner.vue';
import SliderInfo from './components/SlideInfo.vue';
import CoreValues from './components/CoreValues.vue';
import OurSpeciality from './components/OurSpeciality.vue';
</script>

<template>
  <header>
    <img alt="Company logo" class="logo" src="./assets/logo.svg"/>
    <NavMenu></NavMenu>
  </header>

  <main id="page-wrap">
    <HeroBanner></HeroBanner>
    <SliderInfo></SliderInfo>
    <CoreValues></CoreValues>
    <OurSpeciality></OurSpeciality>
  </main>

  <footer>
    <img alt="Company logo" class="logo" src="./assets/images/company-logo-white.png"/>
    <div class="box-footer">
      <div class="location">
        <div class="header-loct">TECHNOLOGY DEPARTMENT</div>
        <p>Jl. Lembong No 8
          Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat</p>
      </div>
      <div class="footer-menu">
        <ul>
          <li><a href="#card-container">Who We Are</a></li>
          <li><a href="#CoreValues">Our Values</a></li>
          <li><a href="#OurSpeciality">The Perks</a></li>
      </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik');

header {
  line-height: 1.5;
  padding: 1rem 4rem;
  font-family: 'Rubik';
  display: flex;
  place-items: center;
  background: var(--vt-c-white);
  padding-right: calc(var(--section-gap) / 2);
  z-index: 999;
  @media (max-width:768px) {
    padding: 1rem 30px;
  }
}

main{
  font-family: 'Rubik';
}

.logo {
  height: 50px;
  width: auto;
  @media (max-width:768px) {
    width: 160px;
    height: 31.58px;
  }
}

.box-container{
  @media (min-width:769px) {
    margin: 0 4rem;
    padding: 4rem 0;
  }
}

footer{
  background: #07477A;
  padding: 2rem;
  overflow-x: hidden;
  .logo{
    width: 228.02px;
    height: 45px;
  }

  .box-footer{
    @media (min-width:768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 25px;
      z-index: 2;
    }
  }

  .location{
    padding: 2rem;
    margin: 20px 0;
    background: white;
    .header-loct{
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      color: #00537C;
      margin-bottom: 47px;
    }
    p{
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.02em;
      color: #25A0D8;
      width: 80%;
    }
  }

  .footer-menu{
    ul{
      list-style: none;
      padding: 0;
      li a{
        font-size: 16px;
        line-height: 48px;
        color: #FFFFFF;
      }
    }
  }

  @media (max-width:768px) {
    height: 654px;
  }

  &:after {
    content: "";
    width: 0;
    height: 0;
    border-left: 80rem solid transparent;
    border-right: 0 solid transparent;
    border-bottom: 10rem solid #14619D;
    position: absolute;
    right: 0;
    bottom: 0;
    @media (max-width:768px) {
        border-left: 40rem solid transparent;
        border-bottom: 19rem solid #14619D;
    }
  }
  &:before {
      content: "";
      width: 0;
      height: 0;
      border-left: 0 solid transparent;
      border-right: 80rem solid transparent;
      border-bottom: 15rem solid #08385F;
      position: absolute;
      left: 0;
      bottom: 0;
      @media (max-width:768px) {
          border-right: 30rem solid transparent;
          border-bottom: 20rem solid #08385F;
      }
  }
}

@-webkit-keyframes sdb03 {
  0% {
      opacity: 0;
  }
  30% {
      opacity: 1;
  }
  60% {
      box-shadow: 0 0 0 30px rgba(105,104,104,0.1);
      opacity: 0;
  }
  100% {
      opacity: 0;
  }
}
@keyframes sdb03 {
  0% {
      opacity: 0;
  }
  30% {
      opacity: 1;
  }
  60% {
      box-shadow: 0 0 0 30px rgba(105,104,104,0.1);
      opacity: 0;
  }
  100% {
      opacity: 0;
  }
}
</style>
