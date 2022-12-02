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
            sm:w-full
            4xl:w-full
            5xl:w-full
            xs:w-full
           
            mt-32
            card-compact
            bg-base-100
            shadow-xl
            2xl:ml-0
            xl:ml-0
            lg:ml-0
            md:ml-52
            sm:ml-36
            4xl:ml-36
            5xl:ml-36
            xs:ml-36
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
                    4xl:ml-2
                    2xl:ml-16
                    xl:ml-16
                    lg:ml-8
                    5xl:ml-4
                    md:ml-8
                    sm:ml-4
                    border-gray-300
                    md:w-72
                      sm:w-72
                      4xl:w-72
                      5xl:w-60
                      xs:w-52
                    mt-5
                  "
                />
                <input
                      class="
                        2xl:ml-16
                        xl:ml-16
                        lg:ml-0
                        md:ml-8
                        xs:ml-1
                        5xl:ml-4
                        input
                        md:w-72
                      sm:w-72
                      4xl:w-72
                      5xl:w-60
                      xs:w-52
                        border-gray-300
                        py-4
                        border
                        mt-5
                        4xl:ml-3
                        focus:border-blue-500 focus:shadow-outline
                        outline-none
                      "
                      type="number"
                      v-model="login.phone"
                      placeholder="phone"
                    />

                <div>
                  <div class="flex flex-col mt-5">
                   
                    <input
                      class="
                      4xl:ml-2
                      xs:ml-1
                        2xl:ml-16
                        xl:ml-16
                        lg:ml-16
                        md:ml-8
                        5xl:ml-4
                        input
                        md:w-72
                      sm:w-72
                      4xl:w-72
                      5xl:w-60
                      xs:w-52
                        xs:ml-3
                        border-gray-300
                        py-4
                        border
                        
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
                      4xl:ml-2
                      lg:ml-10
                      5xl:ml-4
                      border border-gray-300
                      md:w-72
                      sm:w-72
                      4xl:w-72
                      5xl:w-60
                      xs:w-52

                     
                      md:ml-8
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
                      md:ml-8
                      5xl:ml-4
                      md:w-72
                      sm:w-72
                      4xl:w-72
                      5xl:w-60
                      xs:w-52
                      border-none
                      mt-5
                      bg-purple-500
                    "
                  >
                    signup
                  </button>
                  <nuxt-link to="/login">
                    <button
                      class="
                      2xl:ml-16
                      xl:ml-16
                      lg:ml-16
                        btn
                        md:w-72
                      sm:w-72
                      4xl:w-72
                      5xl:w-60
                      xs:w-52
                        ml-0
                        md:ml-8
                        5xl:ml-4
                        md:w-72
                        mt-5
                        border-none
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