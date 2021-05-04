package aula05;

import java.util.Scanner;

public class ContaBanco {
    public int numConta;
    protected String tipo;
    private String dono;
    private float saldo;
    private boolean status;

    public ContaBanco(int numConta, String dono) {
        this.numConta = numConta;
        this.dono = dono;
        this.saldo = 0;
        this.status = false;
    }

    public int getNumConta() {
        return numConta;
    }

    public String getTipo() {
        return tipo;
    }

    public String getDono() {
        return dono;
    }

    public float getSaldo() {
        return saldo;
    }

    public boolean isStatus() {
        return status;
    }

    public void setNumConta(int numConta) {
        this.numConta = numConta;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public void setDono(String dono) {
        this.dono = dono;
    }

    public void setSaldo(float saldo) {
        this.saldo = saldo;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public void abrirConta(String c) {
        if (isStatus()) {
            System.out.println("Conta já está aberta");
        } else {
            if (c.equals("CC")) {
                saldo = 50;
                setTipo(c);
            } else if (c.equals("CP")) {
                saldo = 150;
                setTipo(c);
            }
            System.out.println("Conta de " + getDono() + " aberta com sucesso!");
            System.out.println("Número da conta: " + getNumConta() + "\nTipo da conta: " + getTipo() + "\nSaldo: " + getSaldo());
        }
    }

    public void fecharConta() {
        if (getSaldo() > 0) {
            System.out.println("Não é possível fechar conta com dinheiro");
        } else {
            System.out.println("Conta fechada");
        }
    }

    public void depositar(float v) {
        setSaldo(getSaldo() + v);
        System.out.println("Saldo atual na conta: " + getSaldo());
    }

    public void sacar(float v) {
        setSaldo(getSaldo() - v);
        System.out.println("Saldo atual na conta: " + getSaldo());
    }

    public void pagarMensal() {
        if (getSaldo() > 0) {
            if (getTipo() == "CC") {
                setSaldo(getSaldo() - 12);
            } else if (getTipo() == "CP") {
                setSaldo(getSaldo() - 20);
            }
        } else {
            System.out.println("Saldo insuficiente");
        }
    }

}
