<template>
  <div
    class="
      card
      2xl:w-5/12
      xl:w-5/12
      lg:w-5/12
      w-11/12
      md:w-7/12
      py-10
      bg-base-100
      shadow-xl
      mt-5
    "
  >
    <div class="flex px-6 mt-5 justify-between">
      <div>
        <div class="flex">Education</div>
      </div>
    </div>
    <div class="">
      <app-tabs class="w-11/12 lg:w-full md:w-full mb-16" :tabList="tabList">
        <template v-slot:tabPanel-1>
          <div class="flex justify-between">
            <label for="my-modal-4" class="cursor-pointer"
              >+AddNewEducation</label
            >

            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
            <div class="modal">
              <div class="modal-box relative">
                <label
                  for="my-modal-4"
                  class="btn btn-sm btn-circle absolute right-2 top-2"
                  >✕</label
                >
                <div class="flex items-center justify-center font-bold">
                  AddEducation
                </div>
                <div class="flex ml-12 flex-col">
                  <input
                    type="text"
                    placeholder="name"
                    class="border input border-gray-300 mt-10 w-80 py-4"
                  />
                  <input
                    type="number"
                    placeholder="number"
                    class="border input border-gray-300 mt-3 w-80 py-4"
                  />
                </div>
                <div class="flex space-x-3 items-center justify-center mt-5">
                  <div>
                    <button class="btn btn-outline btn-primary">Return</button>
                  </div>
                  <div>
                    <button class="btn btn-outline btn-primary">Sumbit</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 text-red-400 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 text-red-400 ml-3 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
          </div>
          <div
            v-for="item in education"
            :key="item.id"
            class="flex justify-between"
          >
            <div>
              {{ item.name }}
            </div>

            <div>
              <div class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 text-red-400 cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
                <button>
                  <svg
                    @click="deleteTask(item.id)"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 text-red-400 ml-3 cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </template>
      </app-tabs>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppTabs from "./AppTabs.vue";
export default {
  components: {
    AppTabs,
  },
  data() {
    return {
      tabList: ["+AddNewEducation"],
    };
  },
  computed: {
    ...mapState({
      education: (state) => state.education,
    }),
  },
  methods: {
    deleteTask(id) {
      this.$store.dispatch("delete", id);
    },
  },
};
</script>

<style>
</style>