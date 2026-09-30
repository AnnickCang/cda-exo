import java.util.Locale;
import java.util.Scanner;

public class tp2 {
    public static void exo1() {
        Scanner scanner = new Scanner(System.in);
        scanner.useLocale(Locale.US);

        Boolean continuer = true;
        int nombre1, nombre2, resultat;
        String operateur, reponseContinuer;

        while (continuer) {
            System.out.print("Entrez le 1er nombre : ");
            nombre1 = scanner.nextInt();
            System.out.print("Entrez le 2nd nombre : ");
            nombre2 = scanner.nextInt();
            System.out.print("Opération (+, -, *, /) : ");
            operateur = scanner.next();

            switch (operateur) {
                case "+":
                    resultat = nombre1 + nombre2;
                    System.out.println(nombre1 + " + " + nombre2 + " = " + resultat);
                    break;
                case "-":
                    resultat = nombre1 - nombre2;
                    System.out.println(nombre1 + " - " + nombre2 + " = " + resultat);
                    break;
                case "*":
                    resultat = nombre1 * nombre2;
                    System.out.println(nombre1 + " * " + nombre2 + " = " + resultat);
                    break;
                case "/":
                    if (nombre2 == 0) {
                        System.out.println("Erreur : division par zéro");
                    } else {
                        resultat = nombre1 / nombre2;
                        System.out.println(nombre1 + " / " + nombre2 + " = " + resultat);
                    }
                    break;
                default:
                    System.out.println("Erreur : opérateur inconnu");
            }

            System.out.print("Continuer (o/autre) ? ");
            reponseContinuer = scanner.next();
            if (!reponseContinuer.equals("o")) {
                continuer = false;
            }
        }
    }

    public static void main(String[] args) {
        int choixExo = 1;

        switch (choixExo) {
            case 1:
                System.out.println("TP2 - Exercice 1 : Calculatrice simple");
                exo1();
                break;
        }
    }
}