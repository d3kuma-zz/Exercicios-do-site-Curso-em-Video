package aula04;

public class Aula04 {

    public static void main(String[] args) {
//        Para este construtor, devemos inserir os atributos
        Caneta c1 = new Caneta("NIC", 0.4f, "Amarela");
        c1.status();
        Caneta c2 = new Caneta("KKK", 1.5f, "Laranja");
        c2.status();
    }
}
