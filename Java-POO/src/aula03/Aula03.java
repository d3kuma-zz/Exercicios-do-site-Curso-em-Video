package aula03;

public class Aula03 {
    public static void main(String[] args) {
//        Instanciando objeto
        Caneta c1 = new Caneta();

//        Inserindo atributos da classe Caneta a este objeto
        c1.modelo = "BIC Cristal";
        c1.cor = "Azul";
        c1.carga = 80;
        c1.tampada = false;


//        Chamando os métodos da classe Caneta para este objeto
        c1.rabiscar();
        c1.status();
    }
}
