<template>
  <!-- Start: Info -->
  <div class="flex justify-start items-start" v-if="user">
  <div class="container mx-auto p-8">
    <div class="text-left">
      <div class="font-bold text-2xl text-blue-600 mt-3">
        Your full name: {{ user.displayName }}
      </div>
      <p class="font-semibold text-gray-500 mt-1">
        Your full email: {{ user.email }}
      </p>
    </div>
  </div>
</div>

  <!-- Start: Menu -->
  <div class="row">
  <div class="container mx-auto px-8">
    <div class="grid grid-cols-1">
      <div class="col-span-1">
        <ul>
          <li v-if="profileOptions.length > 0">
            <router-link
              class="flex justify-between items-center py-3"
              :to="profileOptions[profileOptions.length - 1].route"
            >
              <div
                class="flex items-center text-left text-red"
              >
                <i
                  class="t2ico text-2xl"
                  :class="profileOptions[profileOptions.length - 1].icon"
                ></i>
                <h5 class="font-semibold ml-3">
                  {{ profileOptions[profileOptions.length - 1].name }}
                </h5>
              </div>
              <div class="text-right">
                <i class="t2ico"></i>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

</template>
<script>
import { reactive } from "vue";
import { PROFILE_OPTIONS } from "@/constants";
import { useUser } from "@/composables/userUser";
export default {
  setup() {
    const profileOptions = reactive(PROFILE_OPTIONS);
    const { getUser } = useUser();
    const { user } = getUser();

    return {
      profileOptions,
      user,
    };
  },
};
</script>
