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
    }

    public static void main(String[] args) {
        System.out.print("TP1 - Exercice 1 : Conversion de températures");
        System.out.println();
        exo1();

        System.out.println();
        System.out.println();
        System.out.print("TP1 - Exercice 2 : Calcul de prix TTC avec remise");
        System.out.println();
        exo2();
    }
}