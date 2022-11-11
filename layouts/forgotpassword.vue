<template>
  <div>
    <div class="flex">
      <div class="w-1/2">
        <div
          class="
            ml-10
            hidden
            2xl:block
            xl:block
            lg:hidden
            md:hidden
            bg-blue-500
            rounded-xl
            w-64
            h-screen
          "
        ></div>
      </div>
      <div
        class="
          2xl:ml-0
          xl:ml-0
          flex
          h-64
          mt-10
          w-full
          lg:mr-48
          md:mr-48
          mr-12
          items-center
          justify-center
        "
      >
        <div class="card mt-20 w-96 h-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title flex items-center justify-center">logo</h2>
            <div class="flex items-center justify-center">
              the veritification code was sent to the <br />following number
            </div>
            <div class="flex items-center justify-center">
              <div>09187080452</div>
              <div class="ml-10"><a class="link">Edit</a></div>
            </div>
            <div class="flex ml-10">
              <input
                v-model="number"
                type="text"
                class="input border border-black w-10"
              />
              <input
                v-model="number"
                type="text"
                class="input border border-black w-10 ml-3"
              />
              <input
                v-model="number"
                type="text"
                class="input border border-black w-10 ml-3"
              />
              <input
                v-model="number"
                type="text"
                class="input border border-black w-10 ml-3"
              />
            </div>
            <div class="ml-10 text-red-400">{{ validationError }}</div>
            <div class="flex items-center justify-center">
              <a class="link"> ResendCode </a>
            </div>
            <div class="flex items-center justify-center card-actions">
              <button @click="confirmButton" class="btn w-64">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      number: "",
      validationError: "",
    };
  },
  methods: {
    confirmButton() {
      if (this.number == "") {
        this.validationError = "password is wrong";
      } else {
        this.validationError = "";
      }
    },
  },
};
</script>
  
  <style>
</style>