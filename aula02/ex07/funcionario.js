export class funcionario{
    novoSal;
    bonus = 0.1
    constructor(_nome,_salario){
        this.nome = _nome
        this.salario  = _salario
    }
    calcularBonus(){
        this.novoSal = this.salario +  (this.salario * this.bonus ) 
        return this.novoSal
    }
    mostrarNovoSal(){
        console.log(`Novo salário do funcionário com 10% de aumento R$${this.novoSal},00`)
    }
}

export class gerente extends funcionario{ 
    bonus = 0.2
    novoSal;
    calcularBonus(){
        this.novoSal = this.salario +  (this.salario * this.bonus ) 
        return this.novoSal
    }
    mostrarNovoSal(){
        console.log(`Novo salário do gerente com 20% de aumento R$${this.novoSal},00`)
    }
} 

export class dev extends funcionario{ 
    bonus = 0.3
    novoSal;
    calcularBonus(){
        this.novoSal = this.salario +  (this.salario * this.bonus ) 
        return this.novoSal
    }
    mostrarNovoSal(){
        console.log(`Novo salário do Dev com 30% de aumento R$${this.novoSal},00`)
    }
}     
