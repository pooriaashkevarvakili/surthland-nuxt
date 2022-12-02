<template>
  <div>
    <div class="flex">
      <div class="hidden 2xl:block xl:block lg:hidden w-4/12 ml-5 rounded-xl">
        <img class="w-72 h-screen ml-6" src="logo.png" alt="" />
      </div>
      <div class="w-2/3 flex mt-48 items-center h-36 justify-center">
        <div
          class="
         
            card
            2xl:ml-0
            xl:ml-0
            lg:ml-56
            md:ml-8
            xs:ml-2
            sm:ml-10
            2xl:w-96
            xl:w-96
            lg:w-96
            sm:w-80
            sm:ml-4
            5xl:ml-2
            5xl:w-64
            xs:ml-10
            xs:w-52
            4xl:ml-2
            4xl:w-80
            md:w-80
            w-full
            bg-base-100
            shadow-xl
          "
        >
          <div class="card-body">
            <div class="flex card-title items-center justify-center">logo</div>
            <div
              class="
                flex
                2xl:px-10
                xl:px-10
                lg:px-10
                md:px-2
                px-2
                justify-between
              "
            >
              <div>welcome</div>
            </div>
            <div
              class="
                flex
                2xl:px-10
                xl:px-10
                lg:px-10
                md:px-2
                px-2
                justify-between
              "
            >
              <div>Enter your username to login</div>
            </div>
            <div class="flex flex-col">
              <form @submit.prevent="getLogin">
                <input
                  placeholder="phone"
                  v-model="login.phone"
                  class="
                    border
                    mt-3
                    2xl:ml-10
                    xl:ml-10
                    lg:ml-10
                    md:ml-2
                    xl:w-52
                    lg:w-52
                    md:w-52
                    
                    5xl:w-52
                    4xl:w-52
                    5xl:ml-0
                    xs:w-40
                    2xl:w-52
                    border-black
                    input
                  "
                  type="number"
                />
                <input
                  placeholder="password"
                  type="password"
                  v-model="login.password"
                  class="
                    border
                    2xl:ml-10
                    xl:ml-10
                    lg:ml-10
                    5xl:w-52
                    xs:w-40
                    md:ml-2
                    xs:ml-0
                    sm:w-52
                    4xl:w-52
                    mt-5
                    md:w-52
                    border-black
                    input
                  "
                />
                <div>
                  <nuxt-link
                    class="
                      2xl:ml-10
                      xl:ml-10
                      lg:ml-10
                      md:ml-2
                      ml-2
                      text-blue-200
                    "
                    to="/forgotpassword"
                    >forgotPassword</nuxt-link
                  >
                </div>
                <div
                  class="
                    card-actions
                    2xl:flex
                    xl:flex
                    lg:flex-col
                    md:flex-col
                    flex-col
                  "
                >
                  <button
                    @click="routerChange"
                    class="
                      btn
                      md:w-52
                      sm:w-52
                      2xl:ml-10
                      5xl:w-52
                      4xl:w-52
                      xl:ml-10
                      lg:ml-10
                      md:ml-2
                      
                      btn-primary
                      mt-3
                      xs:w-40
                    "
                  >
                    Login
                  </button>
                  <button
                    class="
                      btn
                      md:w-52
                      sm:w-52
                      2xl:ml-10
                      xl:ml-10
                      4xl:w-52
                      5xl:w-52
                      lg:ml-10
                      md:ml-2
                      xs:w-40
                      btn-primary
                      mt-3
                    "
                  >
                    Signup
                  </button>
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
export default {
  data() {
    return {
      login: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    routerChange() {
      this.$router.push("/header");
    },
    routerChangeOne() {
      this.$router.push("/signup");
    },
    getLogin() {
      this.$store.dispatch("login/loginGet", { data: this.login });
    },
  },
};
</script>
  
  <style>
</style>