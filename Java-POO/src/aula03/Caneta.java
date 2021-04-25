package aula03;

public class Caneta {
    public String modelo;
    public String cor;
    private float ponta;
    int carga;
    boolean tampada;

    void status() {
        System.out.println("Modelo : " + this.modelo);
        System.out.println("Caneta: " + this.cor);
        System.out.println("Ponta: " + this.ponta);
        System.out.println("Carga: " + this.carga);
        System.out.println("Está tampada?: " + this.tampada);
    }

    void rabiscar() {
        if (tampada == true) {
            System.out.println("ERRO! Não posso rabiscar.");
        } else {
            System.out.println("Estou rabiscando!");
        }

    }

    void tampar() {
        this.tampada = true;
    }

    void destampar() {
        this.tampada = false;
    }
}
