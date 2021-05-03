public class Teste {
    public static void main(String[] args) {
        Teste t1 = new Teste(1, "Teste");
    }

    int num;
    String nome;

    public Teste(int num, String nome) {
        this.num = num;
        this.nome = nome;
        System.out.println(num + " " + nome);
    }
}
