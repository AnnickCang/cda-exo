import java.util.Locale;
import java.util.Scanner;

public class tp1 {
    public static void exo1() {
        Scanner scanner = new Scanner(System.in);
        scanner.useLocale(Locale.US);
        double tempCel, tempFahr;

        System.out.print("Entrez une température en degrés : ");
        tempCel = scanner.nextDouble();

        tempFahr = tempCel * 9 / 5 + 32;
        System.out.print("Conversion en Fahrenheit : " + tempFahr);

        scanner.close();
    }

    public static void exo2() {
        Scanner scanner = new Scanner(System.in);
        scanner.useLocale(Locale.US);
        double prixHT, prixTTC, prixFinal;
        double tauxTVA, montantTVA;
        double pourcentageRemise, montantRemise;

        System.out.print("Prix HT de l'article : ");
        prixHT = scanner.nextDouble();
        System.out.print("Taux de TVA en % : ");
        tauxTVA = scanner.nextDouble();
        System.out.print("Pourcentage de remise : ");
        pourcentageRemise = scanner.nextDouble();

        montantTVA = prixHT * tauxTVA /100;
        prixTTC = prixHT + montantTVA;
        montantRemise = prixTTC * pourcentageRemise / 100;
        prixFinal = prixTTC - montantRemise;

        System.out.println();
        System.out.println("Prix HT : " + prixHT);
        System.out.println("TVA (%) : " + tauxTVA);
        System.out.println("Remise (%) : " + pourcentageRemise);
        System.out.println("Montant TVA : " + montantTVA);
        System.out.println("Prix TTC : " + prixTTC);
        System.out.println("Montant remise : " + montantRemise);
        System.out.println("Prix final : " + prixFinal);

        scanner.close();
    }

    public static void exo3() {
        Scanner scanner = new Scanner(System.in);
        scanner.useLocale(Locale.US);
        int a, b, temp;

        System.out.println();
        System.out.println("Partie A : avec une variable temporaire");
        a = 5;
        b = 3;
        System.out.println("a = " + a + " et b = " + b);
        temp = a;
        a = b;
        b = temp;
        System.out.println("Après échange, a = " + a + " et b = " + b);

        System.out.println();
        System.out.println("Partie B : sans variable temporaire");
        a = 5;
        b = 3;
        System.out.println("a = " + a + " et b = " + b);
        b = a + b;
        a = b - a;
        b = b - a;
        System.out.println("Après échange, a = " + a + " et b = " + b);

        scanner.close();
    }

    public static void exo4() {
        Scanner scanner = new Scanner(System.in);
        scanner.useLocale(Locale.US);
        double poids, taille, valeurIMC;
        final double imcInsuffisant, imcNormal, imcSurpoids;

        imcInsuffisant = 18.5;
        imcNormal = 24.9;
        imcSurpoids = 29.9;

        System.out.print("Votre poids : ");
        poids = scanner.nextDouble();
        System.out.print("Votre taille : ");
        taille = scanner.nextDouble();

        valeurIMC = (poids / (taille * taille));
        System.out.printf("Votre IMC : %.1f", Math.floor(valeurIMC));
        System.out.println();

        if (valeurIMC < imcInsuffisant) {
            System.out.println("Vous êtes en insuffisance pondérale");
        } else if (valeurIMC < imcNormal) {
            System.out.println("Vous êtes dans la norme");
        } else if (valeurIMC < imcSurpoids) {
            System.out.println("Vous êtes en surpods");
        } else {
            System.out.println("Vous êtes obèse");
        }

        scanner.close();
    }

    public static void exo5() {
        Scanner scanner = new Scanner(System.in);
        scanner.useLocale(Locale.US);

        double longueur, largeur, hauteur;
        double surfaceBrute, surfaceNette, prixTotal, moduloPots;
        int nbPotsPeinture;
        final double prixPotPeinture, surfaceCouverte, pourcentagePortesFenetres;

        prixPotPeinture = 29.90;
        surfaceCouverte = 10;
        pourcentagePortesFenetres = 0.2;

        System.out.print("Longueur de la surface : ");
        longueur = scanner.nextDouble();
        System.out.print("Largeur de la surface : ");
        largeur = scanner.nextDouble();
        System.out.print("Hauteur des murs : ");
        hauteur = scanner.nextDouble();

        surfaceBrute = (longueur * 2 + largeur * 2) * hauteur;
        surfaceNette = surfaceBrute * (1 - pourcentagePortesFenetres);

        nbPotsPeinture = (int) Math.ceil(surfaceNette / surfaceCouverte);
        prixTotal = nbPotsPeinture * prixPotPeinture;

        System.out.println();
        System.out.printf("Surface nette : %.2f\n", Math.floor(surfaceNette));
        System.out.println("Nombre de pots de peinture : " + nbPotsPeinture);
        System.out.printf("Prix total : %.2f €", prixTotal);

        scanner.close();
    }

    public static void exo6() {
        Scanner scanner = new Scanner(System.in);
        scanner.useLocale(Locale.US);

        int nbSecondesDepart, nbSecondesRestant;
        int nbSecondes, nbMinutes, nbHeures;

        System.out.print("Entrez le nombre de secondes : ");
        nbSecondesDepart = scanner.nextInt();

        nbHeures = nbSecondesDepart / 3600;
        nbSecondesRestant = nbSecondesDepart % 3600;
        nbMinutes = nbSecondesRestant / 60;
        nbSecondes = nbSecondesRestant % 60;

        System.out.println();
        System.out.println("Cela fait : " + nbHeures + "H " + nbMinutes + "mmin " + nbSecondes + "sec");

        scanner.close();
    }

    public static void main(String[] args) {
        int choixExo;

        choixExo = 6;

        switch (choixExo) {
            case 1:
                System.out.print("TP1 - Exercice 1 : Conversion de températures");
                System.out.println();
                exo1();
                break;
            case 2:
                System.out.print("TP1 - Exercice 2 : Calcul de prix TTC avec remise");
                System.out.println();
                exo2();
                break;
            case 3:
                System.out.print("TP1 - Exercice 3 : Echange de variables");
                System.out.println();
                exo3();
            case 4:
                System.out.print("TP1 - Exercice 4 : Calcul d'IMC avec interprétation");
                System.out.println();
                exo4();
            case 5:
                System.out.print("TP1 - Exercice 5 : Devis peinture");
                System.out.println();
                exo5();
            case 6:
                System.out.print("TP1 - Exercice 6 : Convertisseur de temps");
                System.out.println();
                exo6();
        }
    }
}