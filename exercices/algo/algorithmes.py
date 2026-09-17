def fizzBuzz(n:int) -> None:
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


def _IgnorerEspaceEtCasse(chaine:str) -> str:
  chaine_normalise = ""
  for c in chaine.lower():
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

  return chaine_normalise

def isPalindrome(chaine:str) -> bool:
  chaine_normalise = _IgnorerEspaceEtCasse(chaine)
  taille_chaine = len(chaine_normalise)

  for i in range(taille_chaine//2):
    if chaine_normalise[i] == chaine_normalise[taille_chaine-i-1]:
      continue
    else:
      return False

  return True


def areAnagrams(str1:str, str2:str) -> bool:
  str1_normalise = _IgnorerEspaceEtCasse(str1)
  str2_normalise = _IgnorerEspaceEtCasse(str2)

  dict_lettres_str1 = dict()
  dict_lettres_str2 = dict()
  for lettre in "abcdefghijklmnopqrstuvwxyz":
    dict_lettres_str1.setdefault(lettre, 0)
    dict_lettres_str2.setdefault(lettre, 0)

  for lettre in str1_normalise:
    dict_lettres_str1[lettre] += 1
  for lettre in str2_normalise:
    dict_lettres_str2[lettre] += 1

  return dict_lettres_str1 == dict_lettres_str2


def fibonacci(n:int)-> int:
  if n == 0:
    return 0
  elif n == 1:
    return 1
  else:
    dernier_nombre = fibonacci(n-1) + fibonacci(n-2)
    return dernier_nombre


def fibonacciIterative(n:int) -> int:
  if n == 0:
    return 0
  elif n == 1:
    return 1
  else:
    fibo_n_moins_1 = 1
    fibo_n_moins_2 = 0
    for i in range(2, n+1):
      dernier_nombre = fibo_n_moins_1 + fibo_n_moins_2
      fibo_n_moins_2 = fibo_n_moins_1
      fibo_n_moins_1 = dernier_nombre
    return dernier_nombre



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
    "hello"
  ]
  for chaine in liste_de_chaines:
    if isPalindrome(chaine):
      print(f"'{chaine}' est un palindrome")
    else:
      print(f"'{chaine}' n'est pas un palindrome")

  print("\nExercice 3.3 - Anagrammes")
  liste_anagrammes = [
    ("listen", "silent"),
    ("hello", "world"),
    ("Astronomer", "Moon starer"),
  ]
  for str1, str2 in liste_anagrammes:
    if areAnagrams(str1, str2):
      print(f"{str1} et {str2} sont des anangrammes")
    else:
      print(f"{str1} et {str2} ne sont pas des anangrammes")

  print("\nExercice 3.4 - Suite de Fibonacci")
  liste_nb_fibo = [0, 1, 6, 10]
  print("- Avec la fonction récursive :")
  for n in liste_nb_fibo:
    print(
      f"Enième nombre de la suite de Fibonacci pour n = {n} : "
      f"{fibonacci(n)}"
    )
  print("- Avec la fonction itérative :")
  for n in liste_nb_fibo:
    print(
      f"Enième nombre de la suite de Fibonacci pour n = {n} : "
      f"{fibonacciIterative(n)}"
    )