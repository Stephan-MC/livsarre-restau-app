<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Order</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Order</ion-title>
        </ion-toolbar>
      </ion-header>
      <ContentContainer>
        <div class="h-[200px] border rounded-[0.625rem] shadow-lg "></div>
        <form action="" class="text-sm mt-3">
          <div class="flex gap-2">
            <div class="bg-red-500 flex-1">Box 1</div>
            <div class="bg-red-500 flex-1">Box 2</div>
          </div>
          <div class="flex gap-2 ">
            <Input type="text" class="flex-1" :classes="{ input: 'max-w-full'}">
              <template #leftIcon>
                <ion-icon :icon="text" />
              </template>
            </Input>
            <Input type="text" class="flex-1" :classes="{ input: 'max-w-full'}"/>

          </div>
          <div>
            <ion-input type="text" placeholder="adress"/>
          </div>
          <div>
            <ion-input placeholder="+1 (xxx) xxx-xxxx"></ion-input>
          </div>
          <div>
            <ion-input type="number" placeholder="somme a regle"/>
          </div>
          <div>
            <ion-input type="number" placeholder="instruction de livraison"/>
          </div>
          <div class="border-b">
            <ion-input type="number" placeholder="method de paiement"/>
          </div>
          <ion-button type="submit">envoyer la commande</ion-button>
        </form>
      </ContentContainer>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
import ContentContainer from "@/components/ContentContainer.vue";
import Input from "@/components/Input.vue";
import { text } from 'ionicons/icons'

</script>
<style scoped>


ion-button {
  @apply my-8
}
</style>