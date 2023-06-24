<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
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
        </div>
        <Select placeholder="filtre par"  />
        <div class="grid grid-cols-2 gap-3 my-2">
          <div v-for="i in 8" class="h-28 shadow-lg border rounded-[0.625rem]"></div>
        </div>
      </ContentContainer>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ContentContainer from "@/components/ContentContainer.vue";
import Select from "@/components/Select.vue";
</script>

