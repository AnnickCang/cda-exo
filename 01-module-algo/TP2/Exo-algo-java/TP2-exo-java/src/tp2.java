import java.util.Locale;
import java.util.Scanner;

public class tp2 {
    public static void exo1() {
        Scanner scanner = new Scanner(System.in);
        scanner.useLocale(Locale.US);

        Boolean continuer = true;
        double nombre1, nombre2, resultat;
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
        scanner.close();
    }

    public static void exo2() {
        Scanner scanner = new Scanner(System.in);
        scanner.useLocale(Locale.US);

        int nombreMystere, nombre;
        int nombreEssais = 0;
        boolean gagne = false;

        // Math.random() * N : génère un nombre décimal aléatoire entre 0 et N-1
        nombreMystere = (int) ((Math.random() * 100) + 1);

        System.out.println("Jeu : plus grand - plus petit");
        System.out.println("Devinez un nombre entre 1 et 100 en un minimum d'essais");

        do {
            nombreEssais++;
            System.out.print("Nombre : ");
            nombre = scanner.nextInt();

            if (nombre < 1 || nombre > 100) {
                System.out.println("Le nombre doit être compris entre 1 et 100 inclus");
                nombreEssais--;
            } else if (nombre == nombreMystere) {
                System.out.println("Bravo ! Trouvé en " + nombreEssais + " essais");
                gagne = true;
            } else if (nombre < nombreMystere) {
                System.out.println("Plus grand !");
            } else {
                System.out.println("Plus petit !");
            }
        } while(!gagne);
        scanner.close();
    }

    static String getFizzbuzzResult(int nombre) {
        String texte = "";

        if ((nombre % 3) == 0) {
            texte += "Fizz";
        }
        if ((nombre % 4) == 0) {
            texte += "Buzz";
        }
        if ((nombre % 7) == 0) {
            texte += "Wazz";
        }
        if (texte == "") {
            texte = String.valueOf(nombre);
        }
        return texte;
    }
    public static void exo3() {
        String texte = "";

        for (int i = 1; i < 22; i++) {
            texte += getFizzbuzzResult(i) + " ";
        }
        System.out.println(texte);
    }

    public static void main(String[] args) {
        int choixExo = 3;

        switch (choixExo) {
            case 1:
                System.out.println("TP2 - Exercice 1 : Calculatrice simple");
                exo1();
                break;
            case 2:
                System.out.println("TP2 - Exercice 2 : Jeu 'Plus grand / Plus petit'");
                exo2();
                break;
            case 3:
                System.out.println("TP2 - Exercice 3 : FizzBuzz amélioré");
                exo3();
                break;
        }
    }
}