<template>
  <div class="home-container">
    <div
      :style="{ backgroundImage: 'url(' + backgroundImageUrls[currentBackgroundIndex] + ')' }"
      class="home-container01"
    >
      <header data-thq="thq-navbar" class="home-navbar-interactive">
        <img alt="logo" src="/external/frame%20374.svg" class="home-image" />
        <div data-thq="thq-navbar-nav" class="home-desktop-menu">
          <nav class="home-links">
            <span class="home-text">Главная страница</span>
            <span class="home-text01">Автор</span>
            <span class="home-text02">Кабинет инвестора</span>
            <span class="home-text03">RU</span>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" class="home-burger-menu">
          <svg viewBox="0 0 1024 1024" class="home-icon">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" class="home-mobile-menu">
          <div class="home-nav">
            <div class="home-top">
              <img
                alt="image"
                src="/external/frame%20374.svg"
                class="home-logo"
              />
              <div data-thq="thq-close-menu" class="home-close-menu">
                <svg viewBox="0 0 1024 1024" class="home-icon2">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="home-links1">
              <span class="home-text04">Главная страница</span>
              <span class="home-text05">Автор</span>
              <span class="home-text06">Кабинет инвестора</span>
              <span class="home-text07">RU</span>
            </nav>
          </div>
        </div>
      </header>
      <div class="home-container02">
        <div class="home-container03">
          <content-slider
            rootClassName="content-slider-root-class-name"
          ></content-slider>
        </div>
        <div class="home-container04">
          <h1 class="home-text08">W.E.T.E.R</h1>
          <span class="home-text09">
            <span>Wind Energy Technology</span>
            <br />
            <span>Era Renewable</span>
          </span>
          <div class="home-container05"></div>
          <span class="home-text13">
            <span>Здание, способное обеспечить</span>
            <br />
            <span>себя электрической энергией с</span>
            <br />
            <span>помощью ветра</span>
          </span>
          <div class="home-container06">
            <img
              alt="image"
              src="/icons/group%203184793.svg"
              class="home-image1"
            />
            <div class="home-container07">
              <h1 class="home-text19">Видео-презентация проекта</h1>
              <span class="home-text20">09:12</span>
            </div>
          </div>
        </div>
        <div class="home-container08">
          <img
            alt="image"
            src="/icons/telegram%20-%20negative.svg"
            class="home-image2"
          />
          <img
            alt="image"
            src="/icons/instagram%20-%20negative.svg"
            class="home-image3"
          />
        </div>
      </div>
    </div>
    <div class="home-container09">
      <h1 class="home-text21">Технология и инновации</h1>
      <div class="home-container10">
        <img alt="image" src="/external/frame%20372.svg" class="home-image4" />
      </div>
      <div class="home-container11">
        <span class="home-text22">Моделирование воздушного потока</span>
        <span class="home-text23">Трехмерная визуализация</span>
      </div>
      <div class="home-container12">
        <img
          alt="image"
          src="/external/group%203185681.svg"
          class="home-image5"
        />
      </div>
      <div class="home-container13">
        <div class="home-container14">
          <img alt="image" src="/external/illustration.svg" class="home-image6" />
          <span class="home-text24">
            Аэродинамические щиты избавляют возвращающуюся лопатку от
            сопротивления
          </span>
        </div>
        <div class="home-container15">
          <img
            alt="image"
            src="/external/illustration1.svg"
            class="home-image7"
          />
          <span class="home-text25">Здания концентрируют воздушный поток</span>
        </div>
        <div class="home-container16">
          <img
            alt="image"
            src="/external/illustration2.svg"
            class="home-image8"
          />
          <span class="home-text26">
            На статичной оси расположены независимые модули
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentSlider from '../components/content-slider'

export default {
  name: 'Home',
  components: {
    ContentSlider,
  },
  data() {
    return {
      backgroundImageUrls: [
        '/external/bgslide1.svg',
        '/external/bgslide2.svg',
      ],
      currentBackgroundIndex: 0,
    };
  },
  metaInfo: {
    title: 'W.E.T.E.R.',
    meta: [
      {
        property: 'og:title',
        content: 'W.E.T.E.R.',
      },
    ],
  },
  mounted() {
    setInterval(() => {
      this.currentBackgroundIndex = (this.currentBackgroundIndex + 1) % this.backgroundImageUrls.length;
    }, 7000);
  },

}

</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--dl-color-gray-black);
}
.home-container01 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-image: url("/external/bgslide1.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-image 0.5s ease-in-out;
}

.home-navbar-interactive {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 1.04vw;
  padding-left: 5vw;
  padding-right: 5vw;
  padding-bottom: 1.04vw;
  justify-content: space-between;
}
.home-image {
  height: 3.75vw;
}
.home-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.home-links {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.home-text {
  color: rgb(206, 207, 219);
  font-size: 2.08vw;
  font-style: normal;
  font-weight: 500;
}
.home-text01 {
  color: rgb(206, 207, 219);
  font-size: 2.08vw;
  font-style: normal;
  font-weight: 500;
  margin-left: 2.08vw;
}
.home-text02 {
  color: rgb(206, 207, 219);
  font-size: 2.08vw;
  font-style: normal;
  font-weight: 500;
  margin-left: 2.08vw;
}
.home-text03 {
  color: rgb(206, 207, 219);
  font-size: 2.08vw;
  font-style: normal;
  font-weight: 500;
  margin-left: 2.08vw;
}
.home-burger-menu {
  display: none;
}
.home-icon {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.home-mobile-menu {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
.home-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.home-logo {
  height: 2rem;
}
.home-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-icon2 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.home-links1 {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.home-text04 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text05 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text06 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text07 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-container02 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  padding-left: 3.75vw;
  padding-right: 3.75vw;
  justify-content: flex-end;
}
.home-container03 {
  flex: 0 0 auto;
  width: 28.07vw;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  margin-right: 3.18vw;
  flex-direction: column;
}
.home-container04 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  margin-top: 2.50vw;
  align-items: flex-start;
  margin-right: 13.02vw;
  flex-direction: column;
}
.home-text08 {
  color: #CECFDB;
  font-size: 3.75vw;
  text-align: left;
  line-height: 4.17vw;
  margin-bottom: var(--dl-space-space-unit);
  letter-spacing: -5%;
}
.home-text09 {
  color: #CECFDB;
  font-size: 2.92vw;
  font-style: normal;
  text-align: left;
  font-weight: 500;
  line-height: 3.33vw;
  letter-spacing: -5%;
}
.home-container05 {
  flex: 0 0 auto;
  width: 95%;
  height: auto;
  display: flex;
  margin-top: 2.08vw;
  align-items: flex-start;
  margin-left: 0px;
  border-color: #CECFDB;
  border-style: solid;
  border-width: 1px;
  margin-right: 0px;
  margin-bottom: 2.08vw;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.home-text13 {
  color: #CECFDB;
  font-size: 2.5vw;
  font-style: normal;
  text-align: left;
  font-weight: 700;
  line-height: 2.92vw;
  margin-bottom: 4.69vw;
  letter-spacing: 5%;
}
.home-container06 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.home-image1 {
  width: 6.67vw;
  object-fit: cover;
}
.home-container07 {
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  margin-left: 1.25vw;
  flex-direction: column;
}
.home-text19 {
  color: #CECFDB;
  font-size: 2.5vw;
  text-align: left;
  margin-bottom: 4px;
}
.home-text20 {
  color: #CECFDB;
  font-size: 2.08vw;
  font-style: normal;
  margin-top: 4px;
  font-weight: 500;
}
.home-container08 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  margin-top: 7.50vw;
  align-items: flex-start;
  flex-direction: column;
}
.home-image2 {
  width: 4.17vw;
  object-fit: cover;
  margin-bottom: 2.08vw;
}
.home-image3 {
  width: 4.17vw;
  object-fit: cover;
}
.home-container09 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 9.17vw;
  align-items: flex-start;
  flex-direction: column;
}
.home-text21 {
  color: rgb(206, 207, 219);
  font-size: 4.58vw;
  align-self: center;
  font-style: normal;
  text-align: center;
  font-weight: 500;
  margin-bottom: 5vw;
}
.home-container10 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.61vw;
  justify-content: center;
}
.home-image4 {
  width: auto;
  height: 29.64vw;
  object-fit: cover;
}
.home-container11 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: 5.42vw;
  justify-content: center;
}
.home-text22 {
  color: #CECFDB;
  font-size: 2.5vw;
  font-style: normal;
  font-weight: 700;
  margin-right: 5.21vw;
}
.home-text23 {
  color: #CECFDB;
  font-size: 2.5vw;
  font-style: normal;
  font-weight: 700;
  margin-left: 5.21vw;
}
.home-container12 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 5vw;
  justify-content: center;
}
.home-image5 {
  width: auto;
  height: 6.20vw;
  object-fit: cover;
}
.home-container13 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 10.10vw;
  justify-content: space-around;
}
.home-container14 {
  flex: 0 0 auto;
  width: 31vw;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-image6 {
  width: 12.50vw;
  object-fit: cover;
  margin-bottom: 1.67vw;
}
.home-text24 {
  color: rgb(206, 207, 219);
  font-size: 2vw;
  font-style: normal;
  text-align: center;
  font-weight: 500;
}
.home-container15 {
  flex: 0 0 auto;
  width: 31vw;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-image7 {
  width: 12.50vw;
  object-fit: cover;
  margin-bottom: 1.67vw;
}
.home-text25 {
  color: rgb(206, 207, 219);
  font-size: 2vw;
  font-style: normal;
  text-align: center;
  font-weight: 500;
}
.home-container16 {
  flex: 0 0 auto;
  width: 31vw;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-image8 {
  width: 12.50vw;
  object-fit: cover;
  margin-bottom: 1.67vw;
}
.home-text26 {
  color: rgb(206, 207, 219);
  font-size: 2vw;
  font-style: normal;
  text-align: center;
  font-weight: 500;
}
@media(max-width: 767px) {
  .home-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-desktop-menu {
    display: none;
  }
  .home-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .home-icon {
    fill: #CECFDB;
    width: 4.17vw;
    height: 4.17vw;
  }
  .home-mobile-menu {
    padding-top: 0px;
    background-color: var(--dl-color-gray-black);
  }
  .home-logo {
    height: 9.39vw;
  }
  .home-icon2 {
    fill: #CECFDB;
    width: 4.17vw;
    height: 4.17vw;
  }
  .home-text04 {
    color: #CECFDB;
    font-size: 5.22vw;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text05 {
    color: #CECFDB;
    font-size: 5.22vw;
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text06 {
    color: #CECFDB;
    font-size: 5.22vw;
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text07 {
    color: #CECFDB;
    font-size: 5.22vw;
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text08 {
    font-style: normal;
    font-weight: 700;
  }
  .home-text19 {
    font-style: normal;
    font-weight: 700;
  }
}
@media(max-width: 479px) {
  .home-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .home-mobile-menu {
    padding: 16px;
  }
}
</style>
