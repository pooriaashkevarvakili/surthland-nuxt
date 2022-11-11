<template>
  <div class="bg-gray-300">
    <div class="flex flex-col items-center justify-center">
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
        <div class="flex px-6 justify-between">
          <div
            class="
              2xl:flex-row
              xl:flex-row
              lg:flex-col
              md:flex md:flex-col
              flex-col
            "
          >
            <img
              class="2xl:ml-0 rounded-xl xl:ml-0 lg:ml-32 md:ml-20 ml-32"
              src="user.png"
              alt=""
            />
            <div class="flex flex-col 2xl:ml-0 xl:ml-0 lg:ml-32 md:ml-20 ml-32">
              <div>Micheal mishel</div>
              <div>Graphic Designer</div>
            </div>
          </div>

          <div>
            <label for="my-modal-3" class="btn">
              <div class="flex">
                <span>Edit</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </div>
            </label>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
              <div class="modal-box relative">
                <label
                  for="my-modal-3"
                  class="btn btn-sm btn-circle absolute right-2 top-2"
                  >✕</label
                >
                <h3 class="text-lg flex items-center justify-center font-bold">
                  Edit conformation
                </h3>
                <div class="flex items-center justify-center">
                  <input
                    type="file"
                    @change="previewImage"
                    accept="image/*"
                    id="img"
                    style="display: none"
                  />
                  <label for="img">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5 cursor-pointer relative left-28 bottom-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                      />
                    </svg>
                  </label>
                  <div v-if="imageData.length > 0">
                    <img class="w-28 h-28" :src="imageData" />
                  </div>
                </div>
                <div class="flex items-center justify-center flex-col">
                  <input
                    placeholder="Name"
                    type="text"
                    class="input w-72 mt-3 border-gray-300"
                  />
                  <input
                    placeholder="Family"
                    type="text"
                    class="input w-72 mt-3 border-gray-300"
                  />

                  <button class="btn btn-primary w-72 mt-3">Sumbit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <education />
      <experience />
      <skills />
    </div>
  </div>
</template>
<script>
import Education from "./Education.vue";
import Experience from "./Experience.vue";
import Skills from "./Skills.vue";
export default {
  components: { Education, Experience, Skills },
  data() {
    return {
      imageData: "user.png",
    };
  },
  methods: {
    previewImage: function (event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
};
</script>

<style>
</style>