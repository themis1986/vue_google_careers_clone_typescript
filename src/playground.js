const { ref, reactive, computed } = require("vue");

const person = reactive({
  name: "Boris",
});

const title = computed(() => person.value.name + " the Great");
console.log(title.value);

person.value.name = "Peter";
console.log(title.value);
