<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <div class="flex items-center justify-between">
            <ion-img :src="logoFull" class="h-10"/>
            <h1>Order</h1>
          </div>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <div class="flex items-center justify-between">
            <ion-img :src="logoFull" class="h-10"/>
            <ion-title>Order</ion-title>
          </div>
        </ion-toolbar>
      </ion-header>
      <ContentContainer>
        <div class="h-[200px] border rounded-[0.625rem] shadow-lg "></div>
        <form action="" class="text-sm my-6 space-y-5">
          <div class="flex gap-2 ">
            <Input type="text" placeholder="Nom">
              <template #rightIcon>
                <ion-icon :icon="personOutline"/>
              </template>
            </Input>
            <Input type="text" placeholder="Prenom">
              <template #rightIcon>
                <ion-icon :icon="personOutline"/>
              </template>
            </Input>
          </div>

          <div>
            <Input type="text" placeholder="Adresse">
              <template #rightIcon>
                <ion-icon :icon="locationOutline"/>
              </template>
            </Input>
          </div>
          <div>
          </div>
          <div>
            <Input type="tel" placeholder="+33 XXXX XXXX">
              <template #rightIcon>
                <ion-icon :icon="callOutline"/>
              </template>
            </Input>
          </div>
          <div>
            <Input type="number" placeholder="Nombre de colis">
              <template #rightIcon>
                <ion-icon :icon="cubeOutline"/>
              </template>
            </Input>
          </div>
          <div>
            <Input type="text" placeholder="Instruction de livraison">
              <template #rightIcon>
                <ion-icon :icon="handRightOutline" />
              </template>
            </Input>
          </div>
          <div>
            <Input type="text" placeholder="La somme a regle par le client">
              <template #rightIcon>
                <ion-icon :icon="logoEuro" />
              </template>
            </Input>
          </div>
          <div class="border-b">
            <Input type="text" placeholder="Methode de paiement">
              <template #rightIcon>
                <ion-icon :icon="logoPaypal" />
              </template>
            </Input>
          </div>
          <ion-button type="submit">envoyer la commande</ion-button>
        </form>
      </ContentContainer>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import logoFull from '@/assets/images/livsarre-logo-full.png'
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon} from '@ionic/vue';
import {personOutline, locationOutline,callOutline,cubeOutline,logoEuro,handRightOutline,logoPaypal} from "ionicons/icons"
import ContentContainer from "@/components/ContentContainer.vue";
import Input from "@/components/Input.vue";

</script>
<style scoped>


ion-button {
  @apply my-8
}
</style>