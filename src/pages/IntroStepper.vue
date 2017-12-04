<template>

    <v-stepper v-model="e1" dark>
      <v-stepper-header>
        <v-stepper-step step="1" :complete="e1 > 1">Team selection</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2" :complete="e1 > 2">Challenges</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Selection</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card>
            <v-card-media src="https://vuetifyjs.com/static/doc-images/cards/desert.jpg" height="300"></v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Lorem ipsum</h3>
                <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
              </div>
            </v-card-title>
          </v-card>

          <div class="text-xs-right">
            <v-btn flat dark @click.native="stepOver">Cancel</v-btn>
            <v-btn color="primary" @click.native="e1 = 2">Continue</v-btn>
          </div>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card>
            <v-card-media src="https://vuetifyjs.com/static/doc-images/cards/desert.jpg" height="300"></v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit ex illo libero minus ...</p>
              </div>
            </v-card-title>
          </v-card>

          <div class="text-xs-right">
            <v-btn flat dark @click.native="stepOver">Cancel</v-btn>
            <v-btn color="primary" @click.native="e1 = 3">Continue</v-btn>
          </div>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card>
            <v-card-media src="https://vuetifyjs.com/static/doc-images/cards/desert.jpg" height="300"></v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Lorem ipsum dolor</h3>
                <div>Lorem ipsum dolor sit amet, fuga illum quas sapiente veritatis ...</div>
              </div>
            </v-card-title>
          </v-card>
          <div class="text-xs-right">
            <v-btn flat dark @click.native="stepOver">Cancel</v-btn>
            <v-btn color="primary">OK</v-btn>
          </div>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>

</template>

<script>
  export default {
    data() {
      return {
        e1: 0
      }
    },
    methods: {
      stepOver() {
        this.$router.go('/team')
      }
    }
  }
</script>
