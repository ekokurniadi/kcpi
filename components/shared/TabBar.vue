<template>
  <div>
    <label :class="className" for="cat.category">
      {{ items }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  props: {
    items: String,
    className: String,
  },
}
</script>
