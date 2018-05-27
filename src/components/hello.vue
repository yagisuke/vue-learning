<template>
  <div>
    <h2>component</h2>
    <p>
      {{ hello }}
    </p>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      hello: 'こんにちわ'
    }
  }
}
</script>

<style scoped>
p {
  text-align: center;
}
</style>
