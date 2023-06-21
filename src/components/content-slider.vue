<template>
  <div class="content-slider-container" v-bind:class="rootClassName">
    <div class="content-slider-container01">
      <div class="content-slider-container02">
        <div class="content-slider-container03">
          <span class="content-slider-text">{{ text }}</span>
        </div>
      </div>
      <h1 class="content-slider-text1">{{ heading }}</h1>
      <div class="content-slider-container04">
        <div class="content-slider-container05">
          <img :alt="image_alt" :src="image_src" class="content-slider-image" />
          <span class="content-slider-text2">{{ text1 }}</span>
        </div>
        <div class="content-slider-container06">
          <img
            :alt="image_alt1"
            :src="image_src1"
            class="content-slider-image1"
          />
          <span class="content-slider-text3">{{ text11 }}</span>
        </div>
        <div class="content-slider-container07">
          <span class="content-slider-text4">{{ text111 }}</span>
        </div>
      </div>
      <div class="content-slider-container08">
        <div class="content-slider-container09">
          <span class="content-slider-text5">{{ text12 }}</span>
        </div>
        <div class="content-slider-container10">
          <span class="content-slider-text6">{{ text1111 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentSlider',
  props: {
    image_alt2: {
      type: String,
      default: 'image',
    },
    image_src12: {
      type: String,
      default: '40c688ca-7aac-486d-a4e8-68c6b44c4b1e',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    image_alt11: {
      type: String,
      default: 'image',
    },
    image_src11: {
      type: String,
      default: '40c688ca-7aac-486d-a4e8-68c6b44c4b1e',
    },
    text11: {
      type: String,
      default: '3974',
    },
    text111: {
      type: String,
      default: 'Читать›',
    },
    image_src2: {
      type: String,
      default: '2f4bc892-0949-4097-bb2e-4beae0876c22',
    },
    image_src1: {
      type: String,
      default: '/icons/heart.svg',
    },
    image_src: {
      type: String,
      default: '/icons/eye.svg',
    },
    image_alt12: {
      type: String,
      default: 'image',
    },
    rootClassName: String,
    text12: {
      type: String,
      default: 'Пред.',
    },
    text112: {
      type: String,
      default: '3974',
    },
    text1111: {
      type: String,
      default: 'Следующая›',
    },
    heading: {
      type: String,
      default: 'Бизнес-встреча в Дубаи',
    },
    text1: {
      type: String,
      default: '18k',
    },
    text: {
      type: String,
      default: '06 Дек. 16:24',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.content-slider-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.content-slider-container01 {
  flex: 0 0 auto;
  width: 27.97vw;
  height: auto;
  display: flex;
  align-items: flex-start;
  border-color: #CECFDB;
  border-style: solid;
  border-width: 0.05vw;
  border-radius: 0.21vw;
  flex-direction: column;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.content-slider-container02 {
  flex: 0 0 auto;
  width: 100%;
  height: 15.73vw;
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.25vw;
  background-size: cover;
  background-image: url("/external/mj-tangonan-58qenowu0j4-unsplash.svg");
}
.content-slider-container03 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  margin-top: 1.20vw;
  align-items: flex-start;
  margin-left: 1.20vw;
  padding-top: 0.42vw;
  padding-left: 0.63vw;
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: 0.63vw;
  padding-bottom: 0.42vw;
  background-color: rgba(0, 0, 2, 0.16);
}
.content-slider-text {
  color: #CECFDB;
  font-size: 2.08vw;
  font-style: normal;
  font-weight: 500;
}
.content-slider-text1 {
  color: #CECFDB;
  font-size: 2.5vw;
  text-align: left;
  margin-left: 1.25vw;
  margin-bottom: 6.88vw;
}
.content-slider-container04 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-self: center;
  align-items: center;
  border-color: #8C8EA5;
  border-width: 0.10vw;
  padding-bottom: 1.25vw;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.content-slider-container05 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  margin-right: 1.25vw;
}
.content-slider-image {
  width: 2.08vw;
  object-fit: cover;
  margin-right: 0.42vw;
}
.content-slider-text2 {
  color: #CECFDB;
  font-size: 2.08vw;
  font-style: normal;
  font-weight: 500;
}
.content-slider-container06 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  margin-right: 0.83vw;
}
.content-slider-image1 {
  width: 2.08vw;
  object-fit: cover;
  margin-right: 0.42vw;
}
.content-slider-text3 {
  color: #CECFDB;
  font-size: 2.08vw;
  font-style: normal;
  font-weight: 500;
}
.content-slider-container07 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  margin-right: 0.83vw;
}
.content-slider-text4 {
  color: #CECFDB;
  font-size: 2.5vw;
  font-style: normal;
  font-weight: 700;
}
.content-slider-container08 {
  flex: 0 0 auto;
  width: 26.35vw;
  display: flex;
  align-self: center;
  align-items: center;
  padding-top: 1.25vw;
  padding-bottom: 1.25vw;
}
.content-slider-container09 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  border-color: #8C8EA5;
  border-width: 2px;
  margin-right: 3.59vw;
  padding-right: 3.59vw;
  border-top-width: 0px;
  border-left-width: 0px;
  border-bottom-width: 0px;
}
.content-slider-text5 {
  color: #CECFDB;
  font-size: 2.08vw;
  font-style: normal;
  font-weight: 500;
}
.content-slider-container10 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  margin-right: var(--dl-space-space-unit);
}
.content-slider-text6 {
  color: #CECFDB;
  font-size: 2.08vw;
  font-style: normal;
  font-weight: 500;
}
.content-slider-root-class-name {
  top: 0px;
  left: 0px;
  position: static;
}
</style>
