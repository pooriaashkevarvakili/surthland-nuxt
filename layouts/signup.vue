<template>
  <div>
    <div class="flex">
      <div class="w-1/2 hidden 2xl:block xl:block lg:block md:hidden">
        <img src="logo.png" class="w-72 ml-6 h-screen" alt="" />
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
                md:ml-0
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
                2xl:ml-0
                xl:ml-0
                card-title
                2xl:px-16
                xl:px-16
                lg:px-6
                md:px-8
                px-2
                flex
                justify-between
              "
            >
              welcome
            </div>
            <div
              class="
                2xl:ml-0
                xl:ml-0
                card-title
                2xl:px-16
                xl:px-16
                lg:px-6
                md:px-8
                px-2
                flex
                justify-between
              "
            >
              enter your username to signup
            </div>
            <div class="card-title flex flex-col">
              <form @submit.prevent="getApi">
                <input
                  v-model="login.email"
                  type="text"
                  placeholder="email"
                  class="
                    input
                    border
                    2xl:ml-16
                    xl:ml-16
                    lg:ml-8
                    md:ml-10
                    ml-2
                    border-gray-300
                    2xl:w-72
                    xl:w-72
                    lg:w-72
                    md:w-72
                    w-64
                    mt-5
                  "
                />
                <div>
                  <div class="flex mt-5">
                    <input
                      type="number"
                      v-model="login.phone"
                      class="
                        input
                        border
                        2xl:ml-16
                        xl:ml-16
                        lg:ml-8
                        md:ml-10
                        border-gray-300
                        2xl:w-72
                        xl:w-72
                        lg:w-72
                        md:w-72
                        w-64
                        ml-3
                      "
                      placeholder="phone"
                    />
                  </div>
                  <div
                    class="
                      relative
                      2xl:ml-12
                      xl:ml-12
                      lg:ml-10
                      md:ml-2
                      ml-2
                      mt-3
                    "
                  >
                    <div
                      class="
                        absolute
                        2xl:left-64
                        xl:left-64
                        lg:left-60
                        md:left-64
                        left-52
                        inset-y-0
                        pl-3
                        flex
                        items-center
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>

                    <input
                      class="
                        2xl:ml-6
                        xl:ml-6
                        lg:ml-0
                        md:ml-10
                        ml-2
                        input
                        2xl:w-72
                        xl:w-72
                        lg:w-72
                        md:w-72
                        w-64
                        border-gray-300
                        py-4
                        border
                        rounded-full
                        focus:border-blue-500 focus:shadow-outline
                        outline-none
                      "
                      type="password"
                      v-model="login.password"
                      placeholder="password"
                    />
                  </div>
                  <input
                    type="password"
                    placeholder="confirmPassword"
                    v-model="login.password_confirmation"
                    class="
                      input
                      2xl:ml-16
                      xl:ml-16
                      lg:ml-10
                      border border-gray-300
                      2xl:w-72
                      xl:w-72
                      lg:w-72
                      md:w-72
                      w-64
                      md:ml-12
                      mt-5
                    "
                  />

                  <button
                    class="
                      btn
                      2xl:w-72
                      xl:w-72
                      2xl:ml-16
                      xl:ml-16
                      lg:ml-10 lg:w-72
                      ml-0
                      md:ml-10
                      w-64
                      md:w-72
                      mt-5
                      bg-purple-500
                    "
                  >
                    signup
                  </button>
                  <nuxt-link to="/login">
                    <button
                      class="
                        btn
                        2xl:w-72
                        xl:w-72
                        2xl:ml-16
                        xl:ml-16
                        lg:ml-10 lg:w-72
                        ml-0
                        md:ml-12
                        w-64
                        md:w-72
                        mt-5
                        bg-purple-500
                      "
                    >
                      login
                    </button>
                  </nuxt-link>
                </div>
              </form>
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
  data() {
    return {
      login: {
        phone: "",
        email: "",
        password: "",
        password_confirmation: "",
        error: "",
        errors: "",
      },
    };
  },
  methods: {
    getApi() {
      this.$store.dispatch("signup/getUsers", { data: this.login });
    },
  },
};
</script>

<style>
</style>