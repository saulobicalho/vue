new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
      alerta(){
        alert("Estou aqui")
      },
      armazena(e){
        this.valor= e.target.value
      }
    }
})
