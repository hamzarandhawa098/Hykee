  <template>
  <div class="text-white space-y-20  max-w-[340px] mb-[150px] lg:max-w-4xl mx-auto">
    <h2 class="text-titleSecondary font-bold text-center lg:text-start font-sans w-full lg:w-1/3 mb-12" v-html="titleMobileSteps"></h2>
    <div
      v-for="(step, index) in steps"
      :key="index"
      :class="[
        'flex items-start space-y-4 gap-x-5',
        index % 2 === 1 ? 'flex-row-reverse' : 'flex-row',
      ]"
    >
      <div class="flex flex-col items-start py-7 max-w-[174px]">
        <div
          :class="[
            'flex items-center gap-5',
            index % 2 === 1 ? 'flex-row-reverse' : 'flex-row',
          ]"
        >
          <h1 class="outline-text tracking-widest text-5xl font-bold">{{ step.number }}</h1>
          <hr class="w-10 border-2 border-primary-color" />
        </div>
        <br />
        <p class="text-[13px] lg:text-sm font-normal font-monorope leading-[23px]" v-html="step.description">
        </p>
      </div>
      <img
        :src="step.image"
        :alt="`Step ${step.number} Preview`"
        class="w-[160px] auto lg:w-44 rounded-lg shadow-lg"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  titleMobileSteps: String,
  LeftMobile: String,
  RightMobile: String,
  steps: Array
})
</script>

<style>
.outline-text {
  font-family: "Coolvetica", sans-serif;
  color: transparent;
  -webkit-text-stroke: 1px #00cd78;
  text-align: center;
}
</style>
