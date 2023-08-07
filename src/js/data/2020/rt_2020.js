const rt_2020 = {
  firstTest: [
    {
      text: '0. W popularnym programie telewizyjnym zapytano jednego z uczestników o nazwisko filozofa, który opublikował swoje poglądy na wszystko. Prawidłowa odpowiedź brzmiała, że jest to Leszek Kołakowski. Pytany natomiast odpowiedział, że był to Lech Wałęsa',
      question: 'Z tego tekstu wynika, że uczestnik programu na pytanie:',
      options: [
        'udzielił dobrej odpowiedzi',
        'udzielił złej odpowiedzi',
        'nie udzielił odpowiedzi',
      ]
    }, {
      text: '1. Pomysł wprowadzenia opłat za wjazd do Wenecji pojawił się już dawno. Od tego roku turyści – w zależności od terminu będą musieli zapłacić od 3 do 10 euro. Władze Wenecji planują zniżki dla osób, które przyjadą na imprezy organizowane przez miasto',
      question: 'Z tego tekstu wynika, że opłata za wjazd do Wenecji:',
      correct: 0,
      options: [
        'nie będzie taka sama przez cały rok',
        'obowiązuje już od dawna',
        'będzie wyższa dla uczestników imprez miejskich',
      ]
    }, {
      text: '2. Konkurs teatralny „Więcej niż teatr!” jest zmienioną wersją zeszłorocznego przeglądu teatrów amatorskich. W spektaklach występują aktorzy z całej Polski, zarówno amatorzy, jak i profesjonaliści. W tym roku obejrzymy 10 przedstawień na podstawie znanych tekstów literackich',
      question: 'Z tego tekstu wynika, że:',
      correct: 1,
      options: [
        'konkurs teatralny od lat istnieje w takiej samej formie',
        'w spektaklach mogą wziąć udział zawodowi aktorzy',
        'aktorzy będą prezentować znane wiersze',
      ]
    }, {
      text: '3. Znany dom mody zaprezentował swoje nowe logo, przygotowane na potrzeby kampanii reklamującej modę męską na sezon jesień/zima 2020. Nowy znak wygląda, jakby był pisany przez dziecko, co – według niektórych – ma się łączyć z pozytywnymi emocjami',
      question: 'Z tego tekstu wynika, że nowy znak reklamowy:',
      correct: 2,
      options: [
        'był inspirowany jesienną modą',
        'stworzyły dzieci',
        'ma przywoływać dobry nastrój',
      ]
    }, {
      text: '4. 6 na 10 rodziców w Europie mówi, że ma problemy ze skoncentrowaniem się na drodze w czasie, gdy ich dzieci źle zachowują się w samochodzie. Jeszcze bardziej może martwić sytuacja, że prawie co trzeci dorosły zauważa, że niegrzeczne dzieci w aucie mają negatywny wpływ na bezpieczeństwo jazdy',
      question: 'Ten tekst informuje, że:',
      correct: 0,
      options: [
        'złe zachowanie dzieci w samochodzie powoduje brak uwagi u kierowcy',
        'co trzeci kierowca ma problem z koncentracją na drodze',
        'kierowcy, którzy są rodzicami, nie potrafią ostrożnie jeździć',
      ]
    },
    {
      text: '5. W tym roku bardzo dużo osób chciało wziąć udział w maratonie organizowanym w Łodzi 6 stycznia. Lista startowa Biegu Trzech Króli była zamknięta już 2 stycznia. Kilku zapisanych zawodników się nie pojawiło, więc nieliczne osoby mogły dołączyć do wyścigu w ostatniej chwili',
      question: 'Z tego tekstu wynika, że:',
      correct: 2,
      options: [
        'w maratonie biegło mało zawodników',
        'lista zapisów była otwarta do 6 stycznia',
        'były osoby, które zrezygnowały z biegu',
      ]
    }],

  tableBoolean: {
    content: [
      '„Świat według Kiepskich” jest serialem komediowym.',
      'Pierwszy odcinek serialu był nieudany.',
      'Nagrywanie kolejnych odcinków zależało od zainteresowania widzów.',
      'Bohaterowie serialu należą do najbogatszych ludzi w Polsce.',
      'Sąsiad Ferdynanda zajmuje się handlem.',
      'Serial od początku jest nagrywany w studiu filmowym.',
      'Niektóre przedmioty można zobaczyć w serialu od pierwszych odcinków aż do dziś.',
      'Cały serial jest dostępny w telewizji i w internecie.'],
    correct: [0, 1, 0, 1, 0, 1, 0]
  },

  tableInput: {
    content: [
      ['Pierwszy raz w Polsce', 'Trzeba mieć ukończone 21 lat i średnie wykształcenie. Zarobki powinny być wysokie, szczególnie dla tych, którzy zdadzą dobrze egzaminy.'],
      ['Kary dla kierowców', 'Artysta jeszcze nigdy nie koncertował w naszym kraju. Inspiracją dla niego są rockowe i popowe przeboje.'],
      ['Choroby w okresie zimowym', 'Restauracja „Nowa” ogłosiła zimową promocję. W niedziele (od grudnia do końca lutego) będzie można kupić niektóre dania o 50 % taniej.'],
      ['Za pół ceny', 'Od 1 kwietnia będziemy musieli dzielić śmieci na więcej grup niż do tej pory.W niektórych miastach nowością będą obowiązkowe brązowe kosze na odpady BIO.'],
      ['Opłaty w górę', 'Palenie w domowych piecach to jedna z przyczyn powstawania smogu, dlatego zimą częściej pojawiają się infekcje gardła, kaszel, astma.'],
      ['Praca w straży miejskiej', 'W ostatnich latach więcej płacimy za mięso, masło, jajka i czekoladę. Wzrost cen z roku na rok staje się bardziej odczuwalny.'],
      ['Zakupy coraz droższe', 'Od nowego roku ceny za wywiezienie śmieci będą wyższe, a w centrach nie będzie już koszy tylko jednego rodzaju.Tych, którzy nie będą segregować, czekają kary.'],
      ['Nowe zasady segregacji ', 'Straż miejska wypisuje mandaty wszystkim zmotoryzowanym, którzy nie przestrzegają nowych zasad organizacji ruchu drogowego.']],
    correct: ['h', 'e', 'c', 'g', 'a', 'f', 'd']
  },

  tableLetters: [
    'natomiast teraz także w telewizji',
    'ale powoli stają się pracą i źródłem dochodów',
    'aby zagrać w piłkę nożną',
    'a nawet z mieszkańcami innych kontynentów',
    'w tym także w Polsce',
    'którzy interesują się e - sportem',
    'że oglądają je ludzie z całego świata',
    'w której uczą się przyszli zawodnicy']
}
export default rt_2020
