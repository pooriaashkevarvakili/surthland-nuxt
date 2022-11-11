<template>
  <div>
    <div class="flex">
      <div class="w-1/2 hidden 2xl:block xl:block lg:block md:hidden">
        <div class="ml-10 bg-blue-500 rounded-xl w-64 h-screen"></div>
      </div>
      <div class="w-2/3 flex items-center justify-center -mt-20">
        <div
          class="
            card
            2xl:w-7/12
            xl:w-7/12
            lg:w-7/12
            md:w-full
            w-full
            mt-32
            card-compact
            bg-base-100
            shadow-xl
            2xl:ml-0
            xl:ml-0
            lg:ml-0
            md:ml-32
            ml-32
          "
        >
          <div class="card-body">
            <div
              class="
                card-title
                2xl:ml-0
                xl:ml-0
                lg:ml-0
                md:ml-16
                ml-6
                mt-3
                flex
                items-center
                justify-center
              "
            >
              Logo
            </div>
            <div
              class="
                card-title
                2xl:px-20
                xl:px-20
                lg:px-20
                md:px-2
                px-2
                flex
                justify-between
              "
            >
              welcome

              <nuxt-link
                class="2xl:block xl:block lg:block md:hidden hidden"
                to="/login"
                >login</nuxt-link
              >
            </div>
            <div class="card-title flex flex-col">
              <span
                class="
                  2xl:w-72 2xl:ml-0
                  xl:ml-0
                  lg:ml-10
                  md:-ml-24
                  ml-2
                  xl:w-72
                  lg:w-72
                  md:w-72
                  w-72
                "
                >enter your username to signup</span
              >

              <input
                type="text"
                placeholder="username"
                class="
                  input
                  border
                  2xl:ml-0
                  xl:ml-0
                  lg:ml-0
                  md:ml-2
                  ml-2
                  border-gray-300
                  2xl:w-72
                  xl:w-72
                  lg:w-72
                  md:w-full
                  w-64
                  mt-5
                "
              />
              <signup-one />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignupOne from "./signupOne.vue";
export default {
  components: { SignupOne },
};
</script>

<style>
</style>