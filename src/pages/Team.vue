<template>
  <div class="text-xs-center">
    <v-menu offset-y>
      <v-btn color="primary" dark slot="activator">Dropdown</v-btn>
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" @click="">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>
