def fizzBuzz(n:int)-> None:
  reste_division_3 = n % 3
  reste_division_5 = n % 5

  if reste_division_3 == 0 and reste_division_5 == 0:
    print("FizzBuzz")
  elif reste_division_5 == 0:
    print("Buzz")
  elif reste_division_3 == 0:
    print("Fizz")
  else:
    print(n)


def isPalindrome(chaine:str) -> bool:
  chaine_normalise = ""
  for c in chaine:
    match c:
      case " ":
        continue
      case "à" | "â":
        chaine_normalise += "a"
      case "é" | "è" | "ê" | "ë":
        chaine_normalise += "e"
      case "i" | "î" | "ï":
        chaine_normalise += "i"
      case "ô" | "ö":
        chaine_normalise += "o"
      case "û" | "ü":
        chaine_normalise += "u"
      case "ç":
        chaine_normalise += "c"
      case _:
        chaine_normalise += c

  taille_chaine = len(chaine_normalise)
  for i in range(taille_chaine//2):
    if chaine_normalise[i] == chaine_normalise[taille_chaine-i-1]:
      continue
    else:
      return False

  return True

if __name__ == "__main__":
  print("\nExercice 3.1 - FizzBuzz")
  liste_nombre = [1, 6, 5, 15, 20]
  for nombre in liste_nombre:
    fizzBuzz(nombre)

  print("\nExercice 3.2 - Palindrome")
  liste_de_chaines = [
    "élu par cette crapule",
    "radar",
    "kayak",
    "coucou"
  ]
  for chaine in liste_de_chaines:
    if isPalindrome(chaine):
      print(f"'{chaine}' est un palindrome")
    else:
      print(f"'{chaine}' n'est pas un palindrome")