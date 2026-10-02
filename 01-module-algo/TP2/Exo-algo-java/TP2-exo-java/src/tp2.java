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

    static boolean aLaTailleMinimale(String chaine) {
        return (chaine.length() >= 8);
    }

    static boolean contientMajuscule(String chaine) {
        for (int i = 0; i < chaine.length(); i++) {
            if (Character.isUpperCase(chaine.charAt(i))) {
                return true;
            }
        }
        return false;
    }

    static boolean contientMinuscule(String chaine) {
        for (int i = 0; i < chaine.length(); i++) {
            if (Character.isLowerCase(chaine.charAt(i))) {
                return true;
            }
        }
        return false;
    }

    static boolean contientChiffre(String chaine) {
        for (int i = 0; i < chaine.length(); i++) {
            if (Character.isDigit(chaine.charAt(i))) {
                return true;
            }
        }
        return false;
    }

    public static void exo4() {
        Scanner scanner = new Scanner(System.in);
        boolean valide = true;
        String mdp;

        System.out.print("Mot de passe : ");
        mdp = scanner.next();

        if (aLaTailleMinimale(mdp)) {
            System.out.println("Longueur >= 8 : V");
        } else {
            valide = false;
            System.out.println("Longueur >= 8 : X");
        }
        if (contientMajuscule(mdp)) {
            System.out.println("Majuscule : V");
        } else {
            valide = false;
            System.out.println("Majuscule : X");
        }
        if (contientMinuscule(mdp)) {
            System.out.println("Minuscule : V");
        } else {
            valide = false;
            System.out.println("Minuscule : X");
        }
        if (contientChiffre(mdp)) {
            System.out.println("Chiffre : V");
        } else {
            valide = false;
            System.out.println("Chiffre : X");
        }

        if (valide) {
            System.out.println("Valide ? V");
        } else {
            System.out.println("Valide ? X");
        }
        scanner.close();
    }

    public static void exo4bis() {
    // Avec des opérateurs ternaires
        Scanner scanner = new Scanner(System.in);
        boolean longueurOK, majusculeOK, minusculeOK, chiffreOK;
        String mdp;

        System.out.print("Mot de passe : ");
        mdp = scanner.next();

        longueurOK = aLaTailleMinimale(mdp);
        majusculeOK = contientMajuscule(mdp);
        minusculeOK = contientMinuscule(mdp);
        chiffreOK = contientChiffre(mdp);

        System.out.println("Longueur >= 8 : " + (longueurOK ? "V" : "X"));
        System.out.println("Majuscule : " + (majusculeOK? "V" : "X"));
        System.out.println("Minuscule : " + (minusculeOK? "V" : "X"));
        System.out.println("Chiffre : " + (chiffreOK? "V" : "X"));
        System.out.println("Valide ? " + ((longueurOK && majusculeOK && minusculeOK && chiffreOK)? "V" : "X"));
    }

    public static void exo5() {
        int nbTablesMultiplication = 5;
        String ligneResultats, ligneEntete;
        int largeurCase = ((String) (nbTablesMultiplication ** 2)).length + 1;
        int largeurColonneEntete = ((String) nbTablesMultiplication).length + 2;
        //String.format("%3s", " ")
        ligneEntete = "".format("%" + largeurColonneEntete + "s", " ") + "| ";
        for (int i = 1; i < nbTablesMultiplication + 1; i++) {
            ligneEntete += ((String) i).format("%" + largeurCase + "s", " ");
        }
        System.out.print(ligneEntete);
        System.out.print("-".repeat(ligneEntete.length + 3));
    }
    /*
// Ligne d'entête
ligneEntete = "".padStart(largeurColonneEntete, " ") + "| ";
for (let i = 1; i < nbTablesMultiplication + 1; i++) {
  ligneEntete += i.toString().padStart(largeurCase, " ");
}
console.log(ligneEntete);
console.log("-".repeat(ligneEntete.length + 3));

for (let i = 1; i < nbTablesMultiplication + 1; i++) {
  ligneResultats = (i.toString() + " ").padStart(largeurColonneEntete, " ") + "| ";
  for (let j = 1; j < nbTablesMultiplication + 1; j++) {
    ligneResultats += (i * j).toString().padStart(largeurCase, " ");
  }
  console.log(ligneResultats);
}
     */
    public static void main(String[] args) {
        int choixExo = 5;

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
            case 4:
                System.out.println("TP2 - Exercice 4 : Validation de mot de passe");
                //exo4();
                exo4bis();
                break;
            case 5:
                System.out.println("TP2 - Exercice 5 : Table de multiplication formatée");
                exo5();
                break;
        }
    }
}