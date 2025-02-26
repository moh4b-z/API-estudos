package br.senai.sp.jandira.imc.model

class Medico {
    var id: Int = 0
    var nome: String = ""
    var especialidades: ArrayList<String> = ArrayList<String>()
    var email: String = ""

    fun mostraDados(){
        println("------------------")
        println("Dados do Medico")
        println("------------------")
        println("NOME: $nome")
        println("EMAIL: $email")
        println("ESPECIALIDADES:")
        for(especialidade in especialidades){
            println(" -> $especialidade")
        }
        println("------------------")
    }
}