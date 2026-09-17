def fizzBuzz(n:int):
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
  chaine_normalise

if __name__ == "__main__":
  fizzBuzz(1)
  fizzBuzz(6)
  fizzBuzz(15)
  fizzBuzz(20)