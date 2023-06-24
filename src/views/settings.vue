<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <div class="flex items-center justify-between">
            <ion-img :src="logoFull" class="h-10"/>
            <h1>Settings</h1>
          </div>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Settings</ion-title>
        </ion-toolbar>
      </ion-header>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import logoFull from '@/assets/images/livsarre-logo-full.png'
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
</script>
