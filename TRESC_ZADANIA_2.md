# Zadanie 2: Walidator adresów e-mail

## Cel zadania

Stwórz walidator adresów e-mail używając metod obiektu String do manipulacji i analizy tekstu.

## Wymagania funkcjonalne

Aplikacja powinna umożliwiać użytkownikowi wprowadzenie adresu e-mail, a następnie wykonać następujące operacje:

1. **Usunięcie białych znaków** - wyświetlić tekst po usunięciu białych znaków na początku i końcu
2. **Sprawdzenie znaku @** - sprawdzić czy adres zawiera znak @ i wyświetlić "TAK" lub "NIE"
3. **Sprawdzenie pierwszej litery** - sprawdzić czy adres zaczyna się od litery (a-z lub A-Z) i wyświetlić "TAK" lub "NIE"
4. **Sprawdzenie końcówki** - sprawdzić czy adres kończy się na ".pl" lub ".com" i wyświetlić "TAK" lub "NIE"
5. **Podział na części** - wyświetlić część adresu przed znakiem @ oraz część po znaku @ (domena)
6. **Zamiana kropek** - w części domenowej zamienić wszystkie kropki na myślniki

## Metody do wykorzystania

W rozwiązaniu należy użyć następujących metod obiektu String:

- `trim()`
- `replace()`
- `split()`
- `includes()`
- `startsWith()`
- `endsWith()`
- `charAt()` (opcjonalnie, do sprawdzenia pierwszej litery)
- `join()` (metoda tablicy, do łączenia po zamianie kropek)

**Manipulacja DOM:**

- `getElementById()`
- `addEventListener()` (do obsługi zdarzeń)
- Atrybut `defer` w tagu `<script>` (opóźnia wykonanie skryptu do momentu załadowania DOM)

## Uwagi

- Należy obsłużyć przypadek, gdy użytkownik nie wprowadzi adresu
- Należy obsłużyć przypadek, gdy adres nie zawiera znaku @
- Metoda `replace()` zamienia tylko pierwsze wystąpienie - należy znaleźć sposób na zamianę wszystkich wystąpień
- Do sprawdzenia czy pierwszy znak to litera można użyć porównania znaków: sprawdź czy znak jest w zakresie 'a'-'z' lub 'A'-'Z' używając operatorów porównania (np. `char >= 'a' && char <= 'z'`)
- Interfejs użytkownika jest już przygotowany - należy uzupełnić funkcję `validateEmail()` w pliku `zadanie_2.js`
- Należy dodać event listenery do przycisków używając `addEventListener()` (przyciski mają ID: `validateBtn` i `clearBtn`)
- Skrypt ma atrybut `defer`, więc można od razu używać `getElementById()` bez `DOMContentLoaded` - skrypt wykonuje się po załadowaniu DOM

## Przykładowe dane testowe

- Wejście: " jan.kowalski@example.pl "
- Oczekiwane wyniki:
  - Tekst po usunięciu białych znaków: "jan.kowalski@example.pl"
  - Zawiera znak @: "TAK"
  - Zaczyna się od litery: "TAK"
  - Kończy się na .pl lub .com: "TAK"
  - Część przed @: "jan.kowalski"
  - Część po @: "example.pl"
  - Domena z zamienionymi kropkami: "example-pl"
