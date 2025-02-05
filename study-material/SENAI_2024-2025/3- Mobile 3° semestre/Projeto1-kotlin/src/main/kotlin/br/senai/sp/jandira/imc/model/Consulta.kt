package br.senai.sp.jandira.imc.model

import java.time.LocalDate
import java.time.LocalTime

class Consulta {
    private var paciente: Paciente? = null
    private var medico: Medico? = null
    private var dataConsulta: LocalDate? = null
    private var horaConsulta: LocalTime? = null
    private var valor: Double = 0.0

    fun agendarConsulta(
        paciente: Paciente,
        medico: Medico,
        dataConsulta: LocalDate,
        horaConsulta: LocalTime,
        valor: Double
    ){
        this.paciente = paciente
        this.medico = medico
        this.dataConsulta = dataConsulta
        this.horaConsulta = horaConsulta
        this.valor = valor
    }

    fun mostrarDadosDaConsunlta(){
        println("------------------")
        println("Dados do Consunlta")
        println("------------------")
        println("DATA: ${formatarDataParaBrasil(dataConsulta!!)}")
        println("HORÁRIO: ${horaConsulta}")
        println("VALOR: ${valor}")
        println("PACIENTE: ${paciente!!.nome}")
        println(" -> IMC: ${paciente!!.calcularImc()}")
        println("MÉDICO: ${medico!!.nome}")
        println("------------------")
    }

    private  fun formatarDataParaBrasil(data: LocalDate): String{
        var dia = "${ data.dayOfMonth }"
        var mes = "${data.month.value}"
        var ano = data.year

        if(dia.length <= 1){
            dia = "0$dia"
        }
        if(mes.length <= 1){
            mes = "0$dia"
        }

        return  "$dia/$mes/$ano"
    }
}