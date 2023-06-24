<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/home">
          <ion-icon aria-hidden="true" :icon="homeOutline" />
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/order">
          <ion-icon aria-hidden="true" :icon="cartOutline " />
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/settings">
          <ion-icon aria-hidden="true" :icon="settingsOutline" />
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/profile">
          <ion-icon aria-hidden="true" :icon="personOutline"/>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { homeOutline, cartOutline, settingsOutline,personOutline  } from 'ionicons/icons';
</script>
