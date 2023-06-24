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
        <div class="h-[200px] border rounded-[0.625rem] shadow-lg  ">
          <h1>quantity</h1>
        </div>
        <Select placeholder="filtre par" :options="[{label:'breakfast',value:'breakfast'},{label:'launch',value:'launch'}]" class="my-6"/>
        <div class="grid grid-cols-2 gap-3 my-2">
          <div v-for="i in 8" class="h-28 shadow-lg border rounded-[0.625rem]"></div>
        </div>
        <div class="mx-auto mt-4">
          <ul class="flex justify-center gap-3">
            <li><a href="" class="h-2 w-2 bg-primary block rounded-full"></a></li>
            <li><a href="" class="h-2 w-2 bg-gray-400 block rounded-full"></a></li>
            <li><a href="" class="h-2 w-2 bg-gray-400 block rounded-full"></a></li>
          </ul>
        </div>
      </ContentContainer>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import logoFull from '@/assets/images/livsarre-logo-full.png'
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
import { navigateCircle } from 'ionicons/icons';
import ContentContainer from "@/components/ContentContainer.vue";
import Select from "@/components/Select.vue";
</script>

