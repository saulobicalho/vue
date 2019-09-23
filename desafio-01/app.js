new Vue({
  el: '#desafio',
  data: {
    nome: 'Saulo',
    idade: 33,
    imagem: 'images.jpg'
  },
  methods: {
    aleatorio(){
      return Math.random()
    }
  }
})
