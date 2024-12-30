<template>
  <input type="text" name="name" v-model="person.name"><br><br><br>
  <button type="button" @click="addSan">登録</button> <br><br>
  あなたの名前は<strong>{{ person.name }}</strong> <br><br>
</template>

<script language="ts">
import { ref, reactive } from 'vue'

export default {
  setup() {
    const name = ref('')
    const nameWithSan = ref('')

    const person = reactive({
      id: 1,
      name: 'Sato',
      age: 20
    })

    const addSan = function () {
      nameWithSan.value = name.value + 'さん'
    };

    return {
      name,
      nameWithSan,
      person,
      addSan
    }
  }
}
</script>

<style></style>