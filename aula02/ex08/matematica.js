export default class matematica{
    static somar(a,b){
        return a + b;
    }
    static subtrair(a,b){
        return a - b;
    }
    static fatorial(a){
        return a * (a-1)
    }
    apresentar(){
        console.log(`
            Soma dos numeros ${this.a} + ${this.b} = ${somar(a,b)}
            `)
    }
}