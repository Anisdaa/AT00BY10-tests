\# AT00BY10 Tests



Tämä repository sisältää yksikkötestit AT00BY10-kirjastolle.



\## Sisältö



\- Yksikkötestit (Vitest)

\- GitHub Actions CI

\- Testikattavuus (Coveralls)



\## Testaus



Testit suoritetaan komennolla:

npm test



kattavuus:

npm run coverage





\## CI



GitHub Actions suorittaa testit automaattisesti jokaisella pushilla.



\## Coveralls



Testikattavuus raportoidaan Coverallsiin.



!\[GitHub Actions](https://github.com/Anisdaa/AT00BY10-tests/actions/workflows/test.yml/badge.svg)

!\[Coveralls](https://coveralls.io/repos/github/Anisdaa/AT00BY10-tests/badge.svg?branch=main)



\## Huomiot



\- `.internal`-kansiota ei testattu tehtävänannon mukaisesti

\- Osa testeistä on merkitty `skip`, koska ne paljastavat kirjastossa olevia virheitä

\- Testikattavuus on noin 79.5 %



\## Johtopäätös



Kirjasto ei ole täysin valmis tuotantokäyttöön, koska useita virheitä löytyi testauksen aikana.

