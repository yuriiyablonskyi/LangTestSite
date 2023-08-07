const rs_2020 = {
  firstTest: [{
    question: '0. Ta wypowiedź to pytanie o',
    options: [
      'czas',
      'drogę',
      'kierunek',
    ]
  }, {
    question: '1. Ta wypowiedź jest typowa',
    correct: 1,
    options: [
      'na stacji benzynowej',
      'w sklepie z meblami',
      'w kinie przy kasie',
    ]
  }, {
    question: '2. Ta wypowiedź jest typowa w',
    correct: 2,
    options: [
      'siłowni',
      'restauracji',
      'hotelu',
    ]
  }, {
    question: '3. Ta wypowiedź jest typowa w',
    correct: 2,
    options: [
      'samolocie',
      'taksówce',
      'autobusie',
    ]
  }, {
    question: '4. Ta wypowiedź jest typowa',
    correct: 0,
    options: [
      'w aptece',
      'u dentysty',
      'w sekretariacie',
    ]
  }, {
    question: '5. Ta wypowiedź to fragment',
    correct: 1,
    options: [
      'komunikatu na dworcu',
      'reklamy radiowej',
      'instrukcji obsługi',
    ]
  }, {
    question: '6. Ta wypowiedź to fragment rozmowy',
    correct: 1,
    options: [
      'w dziekanacie',
      'przez telefon',
      ') dwóch koleżanek',
    ]
  }, {
    question: '7. Ta wypowiedź to pytanie o',
    correct: 2,
    options: [
      'czas',
      'miejsce',
      'środek transportu',
    ]
  }, {
    question: '8. Ta wypowiedź oznacza, że ta osoba',
    correct: 1,
    options: [
      'planuje wizytę u lekarza',
      'dawno nie leczyła zębów',
      'często odwiedza dentystę',
    ]
  }, {
    question: '9. Ta wypowiedź oznacza',
    correct: 0,
    options: [
      'krytykę',
      'życzenie',
      'akceptację',
    ]
  }, {
    question: '10. Ta wypowiedź oznacza',
    correct: 0,
    options: [
      'niepokój',
      'radość',
      'satysfakcję',
    ]
  }, {
    question: '11. Ta wypowiedź oznacza, że',
    correct: 2,
    options: [
      'mamy dużo czasu',
      'będziemy punktualnie.',
      'spóźnimy się',
    ]
  }, {
    question: '12. Ta wypowiedź oznacza, że trzeba',
    correct: 0,
    options: [
      'włączyć światło',
      'zamknąć okno',
      'zgasić światło',
    ]
  }],
  secondTest: [{
    question: '0. Z tego dialogu dowiadujemy się, że mężczyzna',
    options: [
      'rozmawia z doktor Lisiecką',
      'właśnie wyszedł od doktor Lisieckiej',
      'szuka gabinetu doktor Lisieckiej',
    ]
  }, {
    question: '1. Z tego dialogu dowiadujemy się, że mężczyzna',
    correct: 2,
    options: [
      'idzie do hotelu',
      'zatrzymuje taksówkę',
      'jedzie w złym kierunku',
    ]
  }, {
    question: '2. Z tego dialogu dowiadujemy się, że',
    correct: 0,
    options: [
      'kobieta studiuje i zajmuje się domem',
      'mąż robi wszystko w domu',
      'kobiecie nikt nie pomaga',
    ]
  }, {
    question: '3. Z tego dialogu dowiadujemy się, że mężczyzna',
    correct: 2,
    options: [
      'jest autorem projektu',
      'krytykuje projekt',
      'nie mówi, co myśli',
    ]
  }, {
    question: '4. Z tego dialogu dowiadujemy się, że mężczyzna',
    correct: 1,
    options: [
      'chce wydać nową płytę',
      'jest za stary na kolejną płytę',
      'komponuje muzykę do nowej płyty',
    ]
  }, {
    question: '5. Z tego dialogu dowiadujemy się, że mężczyzna',
    correct: 2,
    options: [
      'jeździ na rowerze z dzieckiem',
      'dostał rower od dziecka',
      'jeździł na rowerze już w dzieciństwie',
    ]
  }, {
    question: '6. Z tego dialogu dowiadujemy się, że uczestnicy kursu',
    correct: 1,
    options: [
      'są pracownikami urzędu miasta',
      'biorą w nim udział bezpłatnie',
      'muszą zapłacić za zajęcia',
    ]
  }, {
    question: '7. Z tego dialogu dowiadujemy się, że w sobotę kobieta i mężczyzna',
    correct: 0,
    options: [
      'mają inne plany na wieczór',
      'spędzą razem wieczór',
      'idą wieczorem na mecz',
    ]
  }],

  tableBoolean: {
    content: [
      'prowadzi międzynarodową firmę turystyczną',
      'w dzieciństwie podróżowała po Europie',
      'w szkole średniej wyjeżdżała z rodzicami do Anglii',
      'obecnie podróżuje z grupą przyjaciół',
      'wybiera środek transportu w zależności od miejsca, w którym jest',
      'boi się kłopotów z powodu braku znajomości języków obcych'],
    correct: [1, 0, 0, 1, 0]
  },

  tableInput: {
    content: [
      ['Hokej', 'sport, który nie wymagał specjalnego stroju'],
      ['Łyżwy', 'dyscyplina, w której Polacy odnosili sukcesy'],
      ['Sporty wodne', 'sport tak samo popularny jak jazda na nartach'],
      ['Jazda konna', 'aktywność związana też z turystyką'],
      ['Tenis', 'sport stosunkowo niedrogi'],
      ['Gra w siatkówkę', 'dyscyplina związana z modą sportową']],
    correct: ['e', 'd', 'b', 'f', 'a']
  },

  tableNumber: {
    content: [
      'skarży się na brak czasu i przyjaciół',
      'narzeka na hałaśliwych sąsiadów',
      'wymienia miejsca, gdzie można spędzić wolny czas',
      'mówi, że życie w mieście jest drogie',
      'zwraca uwagę na zanieczyszczenie',
      'nie lubi osób za bardzo ciekawych tego, jak żyją inni'],
    correct: [3, [1, 4], [2, 4], 4, 2]
  }
}
export default rs_2020
