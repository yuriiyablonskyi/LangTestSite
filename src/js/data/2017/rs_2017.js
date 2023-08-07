const rs_2017 = {
  firstTest: [
    {
      question: '0. Ta wypowiedź jest typowa',
      options: [
        'na dworcu autobusowym',
        'na dworcu kolejowym',
        'w kolejce górskiej',
      ]
    }, {
      question: '1. Ta wypowiedź jest typowa',
      correct: 0,
      options: [
        'w tramwaju',
        'w kinie',
        'w muzeum',
      ]
    }, {
      question: '2. Ta wypowiedź jest typowa',
      correct: 2,
      options: [
        'w sklepie',
        'u dentysty',
        'w aptece',
      ]
    }, {
      question: '3. Ta wypowiedź jest typowa',
      correct: 2,
      options: [
        'w salonie Bingo',
        'w punkcie LOTTO',
        'w szatni',
      ]
    }, {
      question: '4. Ta wypowiedź jest typowa',
      correct: 1,
      options: [
        'w autobusie',
        'w taksówce',
        'w pociągu',
      ]
    }, {
      question: '5. Ta wypowiedź jest typowa podczas',
      correct: 1,
      options: [
        'zakupów',
        'posiłku',
        'zebrania',
      ]
    }, {
      question: '6. Ta wypowiedź oznacza',
      correct: 0,
      options: [
        'Tak!',
        'Nie!',
        'Nigdy!',
      ]
    }, {
      question: '7. Ta wypowiedź oznacza, że',
      correct: 2,
      options: [
        'mam jutro czas',
        'spotkamy się jutro',
        'muszę to zrobić do jutra',
      ]
    }, {
      question: '8. Ta wypowiedź oznacza',
      correct: 1,
      options: [
        'Nie wiem, dokąd idziesz',
        'Nie rozumiem',
        'Chodź ze mną',
      ]
    }, {
      question: '9. Ta wypowiedź oznacza, że',
      correct: 1,
      options: [
        'nic nie wiem na ten temat',
        'nie chcę o tym mówić',
        'nie rozumiem tego tematu',
      ]
    }, {
      question: '10. Ta wypowiedź oznacza, że',
      correct: 1,
      options: [
        'rozmawiam z dyrektorem',
        'proszę o rozmowę z dyrektorem',
        'wołam dyrektora',
      ]
    }, {
      question: '11. Ta wypowiedź oznacza, że kupuję bilet',
      correct: 0,
      options: [
        'w obie strony',
        'tylko powrotny',
        'w jedną stronę',
      ]
    }, {
      question: '12. Ta wypowiedź oznacza',
      correct: 0,
      options: [
        'Dokąd idziesz?',
        'Co wybrałeś?',
        'Jakie są wyniki wyborów?',
      ]
    },
    {
      question: '13. Ta wypowiedź to',
      correct: 1,
      options: [
        'odmowa',
        'zaproszenie',
        'zawiadomienie',
      ]
    }, {
      question: '14. Tę wypowiedź można najczęściej usłyszeć',
      correct: 0,
      options: [
        'w sklepie',
        'przy stole',
        'nad morzem',
      ]
    }],

  secondTest: [
    {
      question: '0. Ten tekst mówi o podróży',
      options: [
        'balonem',
        'samolotem',
        'statkiem',
      ]
    }, {
      question: '1. W podróży uczestniczyły',
      correct: 1,
      options: [
        'dwie studentki',
        'starsze panie',
        'chińskie uczennice',
      ]
    }, {
      question: '2. Podróż została zorganizowana przez ',
      correct: 2,
      options: [
        'firmę transportową',
        'jedną ze stacji telewizyjnych',
        'producenta herbaty',
      ]
    }, {
      question: '3. Kobiety są w dobrej kondycji fizycznej, bo',
      correct: 1,
      options: [
        'uprawiają sport',
        'piją herbatę',
        'jedzą zdrowo',
      ]
    }, {
      question: '4. Lot trwał',
      correct: 0,
      options: [
        '30 minut',
        '50 minut',
        'godzinę',
      ]
    }, {
      question: '5. Kobiety całe życie',
      correct: 1,
      options: [
        'wiele podróżowały',
        'ciężko pracowały',
        'latały samolotem',
      ]
    }],

  tableBoolean: {
    content: [
      'To już ostatnie wydanie konkursu radiowego',
      'Konkurs mogą wygrać dwie osoby',
      'Nagrodą w konkursie jest wyjazd do Sosnowca',
      'Wycieczka będzie trwać kilka dni',
      'Współorganizatorem konkursu jest Telewizja Polska',
      'Pytania dotyczą Unii Europejskiej',
      'Według redaktora pytania konkursowe są dość trudne'],
    correct: [0, 0, 1, 0, 1, 1]
  },

  tableInput: {
    content: [
      ['opłata paszportowa w wysokości 140 zł', 'paszport dla emerytów i rencistów'],
      ['opłata paszportowa w wysokości 30 zł', 'paszport tymczasowy dla dorosłych'],
      ['opłata paszportowa w wysokości 60 zł', 'paszport dla osób, które mają więcej niż 70 lat'],
      ['opłata paszportowa w wysokości 45 zł', 'paszport dla dzieci w wieku do 7 lat'],
      ['paszport bez opłaty', 'paszport dla dorosłych na 10 lat'],
      ['50% ulgi w opłacie paszportowej', 'paszport dla dzieci, które nie mają jeszcze 13 lat']],
    correct: ['d', 'f', 'b', 'c', 'a']
  }
}
export default rs_2017
