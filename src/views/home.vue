<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <div class="flex items-center justify-between">
            <ion-img :src="logoFull" class="h-10"/>
            <h1>Menu</h1>
          </div>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">home</ion-title>
        </ion-toolbar>
      </ion-header>
      <ContentContainer>
        <div></div>
        <div class=" border rounded-[0.625rem] shadow-lg gap-2  flex justify-between p-2 text-xs">
          <div class="h-[200px] bg-gray-300 w-full rounded-lg"></div>
          <div class="space-y-2 relative">
            <div>
              <label class="text-xs"> Quantity </label>

              <div class="flex items-center gap-1">
                <button
                    @click="quantity--"
                    type="button"
                    class="h-6 w-6 grid place-items-center bg-primary text-white  text-gray-600 transition hover:opacity-75"
                >
                  &minus;
                </button>

                <input
                    type="number"
                    v-model="quantity"
                    min="0"
                    class="h-6 w-6 rounded border-gray-200 text-xs"
                />

                <button
                    type="button"
                    @click="quantity++"
                    class="h-6 w-6  p bg-primary text-white  text-gray-600 transition hover:opacity-75"
                >
                  &plus;
                </button>
              </div>
            </div>
            <div>
              <ion-label>Unit Price</ion-label>
              <p class="text-primary">&euro; 0</p>
            </div>
          </div>
        </div>
        <ion-button size="small">ajouter &plus;</ion-button>
        <Select placeholder="filtre par"
                :options="[{label:'filtre par'},{label:'breakfast',value:'breakfast'},{label:'launch',value:'launch'}]"
                class="my-6"/>
        <swiper
            :slides-per-view="1"
            :space-between="50"
        >
          <swiper-slide v-for="i in  20" class="h-32 w-full">Slide 1</swiper-slide>
          ...
        </swiper>
        <div class="grid grid-cols-2 gap-3 my-2 ">
          <div v-for="i in 8"
               class="h-32 flex flex-col gap-1 shadow-lg text-xs p-2 hover:bg-gray-100 hover:border-primary hover:border-opacity-40 border rounded-[0.625rem]">
            <div>
              <h2>Produit: </h2>
            </div>
            <div class="h-full "></div>
          </div>
        </div>

      </ContentContainer>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import logoFull from '@/assets/images/livsarre-logo-full.png'
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
import {navigateCircle} from 'ionicons/icons';
import {Swiper, SwiperSlide} from "swiper/vue";
import ContentContainer from "@/components/ContentContainer.vue";
import Select from "@/components/Select.vue";
import {ref} from "vue";
// Import Swiper styles
import 'swiper/css';


const quantity = ref<boolean>(0)
</script>

