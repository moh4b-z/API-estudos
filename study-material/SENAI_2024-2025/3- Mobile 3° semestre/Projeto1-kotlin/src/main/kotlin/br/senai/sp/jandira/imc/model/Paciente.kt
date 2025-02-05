package br.senai.sp.jandira.imc.model

import java.time.LocalDate
import java.time.Period
import kotlin.math.pow

class Paciente {

    var id:Int = 0
    var nome: String = ""
    var dataNascimento: LocalDate? = null
    var email: String = ""
    var peso: Int = 0
    var altura: Double = 0.0
    var imc: Double= 0.0
    var classificacaoIMC: String = ""

    fun calcularImc(): Double{
        imc = peso / altura.pow(2)
        return imc
    }
    fun mostraDadosBiometricos(){
        println("------------------")
        println("Dados do paciente")
        println("------------------")
        println("NOME: $nome")
        println("IDADE: ${calcularIdade()} ")
        println("PESO: $peso")
        println("ALTURA: $altura")
        println("IMC: $imc")
        println("Classificão do IMC: $classificacaoIMC")
        println("------------------")
    }
    fun classificarIMC(){
        if(imc < 18.5){
            classificacaoIMC = "Abaixo do peso"

        }else if(18.5 < imc && imc < 25){
            classificacaoIMC = "Peso Normal"

        }else if(25 < imc && imc < 30){
            classificacaoIMC = "Acima do peso"

        }else if(30 < imc && imc < 35){
            classificacaoIMC = "Obesidade I"

        }else if(35 < imc && imc < 40){
            classificacaoIMC = "Obesidade II"

        }else if(imc > 40){
            classificacaoIMC = "Obesidade III"
        }
    }
    fun calcularIdade(): Int{
        var idade = Period.between(dataNascimento, LocalDate.now())
        return idade.years
    }
}