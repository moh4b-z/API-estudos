package br.senai.sp.jandira.imc

import br.senai.sp.jandira.imc.model.Paciente
import br.senai.sp.jandira.imc.model.Medico
import br.senai.sp.jandira.imc.model.Consulta
import java.time.LocalDate
import java.time.LocalTime

fun main() {
    //Criar um paciente ana maria
    var paciente1 = Paciente()
    paciente1.id = 1
    paciente1.nome = "Ana Maria"
    paciente1.email = "ana@email.com"
    paciente1.altura = 1.67
    paciente1.peso = 59
    paciente1.dataNascimento = LocalDate.of(2001,8,13)
    paciente1.calcularImc()
    paciente1.classificarIMC()
    paciente1.mostraDadosBiometricos()


    //criar o paciente Pedro de Oliveira
    var paciente2 = Paciente()
    paciente2.id = 2
    paciente2.nome = "Mohammad Salim"
    paciente2.email = "mohammad@email.com"
    paciente2.altura = 1.73
    paciente2.peso = 74
    paciente2.dataNascimento = LocalDate.of(2007,8,31)
    paciente2.calcularImc()
    paciente2.classificarIMC()
    paciente2.mostraDadosBiometricos()


    var medico1 = Medico()
    medico1.id = 1
    medico1.nome =  "Roberto"
    medico1.especialidades.add("Nutricionista")
    medico1.especialidades.add("Gastroenterologista")
    medico1.email = "roberto@email.com"
    medico1.mostraDados()

    var medico2 = Medico()
    medico2.id = 2
    medico2.nome =  "Marcos"
    medico2.especialidades.add("Nutricionista")
    medico2.especialidades.add("Gastroenterologista")
    medico2.email = "marcos@email.com"
    medico2.mostraDados()

    var consulta1 = Consulta()
    consulta1.agendarConsulta(
        paciente1,
        medico1,
        LocalDate.of(2025,2,21),
        LocalTime.of(10,30),
        199.99)
    consulta1.mostrarDadosDaConsunlta()
}
