//*Template:
//correctPlayer: "",
//player1: "",
//player1Image: "",
//player2: "",
//player2Image:,
//player3: "",
//player3Image: "",
//player4: "",
//player4Image: "",
//Add correct player to correctPlayers array at the same index the object is at in the playerSets array

//testing

export const playerSets = [
  {
    correctPlayer: "Ronaldo",
    player1: "Ramos",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/25557-1640014004.jpg?lm=1",
    player1Team: "Real Madrid",
    player2: "Varane",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/164770-1598301905.jpg?lm=1",
    player2Team: "Real Madrid",
    player3: "Rooney",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/header/3332-1551295290.jpg?lm=1",
    player3Team: "Manchester United",
    player4: "Pique",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/18944-1454670060.jpg?lm=1",
    player4Team: "Manchester United",
  },
  {
    correctPlayer: "Messi",
    player1: "Sanchez",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/40433-1660118147.jpg?lm=1",
    player1Team: "Barcelona",
    player2: "Mbappé",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/342229-1632686046.jpg?lm=1",
    player2Team: "PSG",
    player3: "Icardi",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/68863-1591599151.jpg?lm=1",
    player3Team: "Manchester United",
    player4: "Alba",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/69751-1653039085.jpg?lm=1",
    player4Team: "Barcelona",
  },
  {
    correctPlayer: "Pogba",
    player1: "Dybala",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/206050-1641810495.jpg?lm=1",
    player1Team: "Juventus",
    player2: "Matic",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/header/74683-1655212906.jpg?lm=1",
    player2Team: "Manchester United",
    player3: "Ibrahimovic",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/3455-1579506060.jpg?lm=1",
    player3Team: "Manchester United",
    player4: "Vidal",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/37666-1502276644.jpg?lm=1",
    player4Team: "Juventus",
  },
  {
    correctPlayer: "Neymar",
    player1: "Sanchez",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/40433-1660118147.jpg?lm=1",
    player1Team: "Barcelona",
    player2: "Cavani",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/48280-1619791055.jpg?lm=1",
    player2Team: "PSG",
    player3: "Suarez",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/44352-1453896733.jpg?lm=1",
    player3Team: "Barcelona",
    player4: "Thiago Silva",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/29241-1661856081.jpg?lm=1",
    player4Team: "PSG",
  },
  {
    correctPlayer: "Ramos",
    player1: "Jesus Navas",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/15956-1647595718.jpg?lm=1",
    player1Team: "Sevilla",
    player2: "Marquinhos",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/181767-1639581124.jpg?lm=1",
    player2Team: "PSG",
    player3: "Arjen Robben",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/4360-1540568808.jpg?lm=1",
    player3Team: "Real Madrid",
    player4: "Karim Benzema",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/18922-1653042225.jpg?lm=1",
    player4Team: "PSG",
  },
  {
    correctPlayer: "Di Maria",
    player1: "Ronaldo",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/8198-1631656078.jpg?lm=1",
    player1Team: "Real Madrid",
    player2: "Ozil",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/35664-1622641562.jpg?lm=1",
    player2Team: "Real Madrid",
    player3: "Smalling",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/103427-1661351602.jpg?lm=1",
    player3Team: "Manchester United",
    player4: "Neymar",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/68290-1632687616.jpg?lm=1",
    player4Team: "PSG",
  },
  {
    correctPlayer: "Higuain",
    player1: "Eden Hazard",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/50202-1665067742.jpg?lm=1",
    player1Team: "Chelsea",
    player2: "Aaron Ramsey",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/50057-1518795716.jpg?lm=1",
    player2Team: "Juventus",
    player3: "José Callejon",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/61253-1602070711.jpg?lm=1",
    player3Team: "Napoli",
    player4: "Cristiano Ronaldo",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/8198-1631656078.jpg?lm=1",
    player4Team: "Real Madrid",
  },
  {
    correctPlayer: "Kovacic",
    player1: "Luka Modrić",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/27992-1661426133.jpg?lm=1",
    player1Team: "Real Madrid",
    player2: "Jorginho",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/102017-1599988179.jpg?lm=1",
    player2Team: "Chelsea",
    player3: "Kiko Casilla",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/27486-1669365568.jpg?lm=1",
    player3Team: "Real Madrid",
    player4: "Pedro",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/65278-1602077251.jpg?lm=1",
    player4Team: "Chelsea",
  },
  {
    correctPlayer: "Bale",
    player1: "Kane",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/132098-1623778520.jpg?lm=1",
    player1Team: "Spurs",
    player2: "Di Maria",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/header/45320-1663576797.jpg?lm=1",
    player2Team: "Real Madrid",
    player3: "Ødegaard",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/header/316264-1510232173.jpg?lm=1",
    player3Team: "Manchester United",
    player4: "Chiellini",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/header/29260-1657271985.jpg?lm=1",
    player4Team: "LAFC",
  },
  {
    correctPlayer: "Lewandowski",
    player1: "Pedri",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/683840-1620304992.jpg?lm=1",
    player1Team: "Barcelona",
    player2: "Coman",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/243714-1540568692.jpg?lm=1",
    player2Team: "Bayern Munich",
    player3: "Pierre-Emile Højbjerg",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/167799-1629882773.jpg?lm=1",
    player3Team: "Bayern Munich",
    player4: "Perišić",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/42460-1570373091.jpg?lm=1",
    player4Team: "Dortmund",
  },
  {
    correctPlayer: "Hazard",
    player1: "Digne",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/126664-1663014267.jpg?lm=1",
    player1Team: "Lille",
    player2: "Zouma",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/157509-1647595996.jpg?lm=1",
    player2Team: "Chelsea",
    player3: "Bale",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/39381-1658665343.jpg?lm=1",
    player3Team: "Real Madrid",
    player4: "Pierre-Emerick Aubameyang",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/58864-1665516602.jpg?lm=1",
    player4Team: "Lille",
  },
  {
    correctPlayer: "De Bruyne",
    player1: "Arnautovic",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/41384-1661268772.jpg?lm=1",
    player1Team: "Werder Bremen",
    player2: "Benteke",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/50201-1576743159.jpg?lm=1",
    player2Team: "Genk",
    player3: "Perišić",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/42460-1570373091.jpg?lm=1",
    player3Team: "Wolfsburg",
    player4: "Leroy Sané",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/192565-1655064190.jpg?lm=1",
    player4Team: "Manchester City",
  },
  {
    correctPlayer: "Thiago",
    player1: "Alexis Sanchez",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/40433-1660118147.jpg?lm=1",
    player1Team: "Barcelona",
    player2: "Xherdan Shaqiri",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/86792-1645958643.jpg?lm=1",
    player2Team: "Chelsea",
    player3: "Wijnaldum",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/49499-1469085417.jpg?lm=1",
    player3Team: "Real Madrid",
    player4: "Jordi Alba",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/69751-1653039085.jpg?lm=1",
    player4Team: "Barcelona",
  },
  {
    correctPlayer: "Mane",
    player1: "Kevin Kampl",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/53418-1613997732.jpg?lm=1",
    player1Team: "RB Salzburg",
    player2: "Dušan Tadić",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/36139-1661978004.jpg?lm=1",
    player2Team: "Southampton",
    player3: "Dejan Lovren",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/37838-1602270734.png?lm=1",
    player3Team: "Liverpool",
    player4: "Ryan Gravenberch",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/478573-1661804381.jpg?lm=1",
    player4Team: "Bayern Munich",
  },
  {
    correctPlayer: "Pjanic",
    player1: "Mohamed Salah",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/148455-1546611604.jpg?lm=1",
    player1Team: "Roma",
    player2: "Hugo Lloris",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/17965-1465213375.jpg?lm=1",
    player2Team: "Lyon",
    player3: "Karim Benzema",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/18922-1653042225.jpg?lm=1",
    player3Team: "Lyon",
    player4: "Dani Alves",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/15951-1635327520.jpg?lm=1",
    player4Team: "Barcelona",
  },
  {
    correctPlayer: "Eriksen",
    player1: "Luis Suarez",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/44352-1453896733.jpg?lm=1",
    player1Team: "Ajax",
    player2: "Achraf Hakimi",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/398073-1633679363.jpg?lm=1",
    player2Team: "Inter Milan",
    player3: "Kyle Walker",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/95424-1583400627.jpg?lm=1",
    player3Team: "Tottenham",
    player4: "Raphaël Varane",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/164770-1598301905.jpg?lm=1 ",
    player4Team: "Manchester United",
  },
  {
    correctPlayer: "Torres",
    player1: "Andreas Pereira",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/203394-1659355525.jpg?lm=1",
    player1Team: "Valencia",
    player2: "Raheem Sterling",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/134425-1577051521.jpg?lm=1",
    player2Team: "Manchester City",
    player3: "Robert Lewandowski",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/38253-1642434304.jpg?lm=1",
    player3Team: "Barcelona",
    player4: "Alessandro Florenzi",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/130365-1663574873.jpg?lm=1",
    player4Team: "Valencia",
  },
  {
    correctPlayer: "Falcao",
    player1: "David De Gea",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/59377-1667548362.jpg?lm=1",
    player1Team: "Manchester United",
    player2: "Youri Tielemans",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/249565-1626861318.jpg?lm=1",
    player2Team: "Monaco",
    player3: "Eden Hazard",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/50202-1665067742.jpg?lm=1",
    player3Team: "Chelsea",
    player4: "Diego Godin",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/54928-1547721268.jpg?lm=1",
    player4Team: "Atletico Madrid",
  },
  {
    correctPlayer: "Hakimi",
    player1: "Cristiano Ronaldo",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/8198-1631656078.jpg?lm=1",
    player1Team: "Real Madrid",
    player2: "Lionel Messi",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/header/28003-1631171950.jpg?lm=1",
    player2Team: "PSG",
    player3: "Jadon Sancho",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/401173-1632686361.jpg?lm=1 ",
    player3Team: "Borussia Dortmund",
    player4: "Romelu Lukaku",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/96341-1661780981.jpg?lm=1",
    player4Team: "Inter Milan",
  },
  {
    correctPlayer: "Coman",
    player1: "Lucas Moura",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/77100-1654164113.jpg?lm=1",
    player1Team: "PSG",
    player2: "Paul Pogba",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/122153-1582114937.jpg?lm=1",
    player2Team: "Juventus",
    player3: "James Rodríguez",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/88103-1540568385.jpg?lm=1",
    player3Team: "Bayern Munich",
    player4: "Sadio Mané",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/200512-1559901727.jpg?lm=1",
    player4Team: "Bayern Munich",
  },
  {
    correctPlayer: "Lukaku",
    player1: "Alexis Sánchez",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/40433-1660118147.jpg?lm=1",
    player1Team: "Inter Milan",
    player2: "Ben Foster",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/13572-1580388679.jpg?lm=1",
    player2Team: "West Brom",
    player3: "John Stones",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/186590-1583400326.jpg?lm=1",
    player3Team: "Everton",
    player4: "Saul Ñíguez",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/148928-1648555027.jpg?lm=1",
    player4Team: "Chelsea",
  },
  {
    correctPlayer: "Salah",
    player1: "Antonio Rudiger",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/86202-1624448001.jpg?lm=1",
    player1Team: "Chelsea",
    player2: "Phillipe Coutinho",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/80444-1640621762.jpg?lm=1",
    player2Team: "Liverpool",
    player3: "Mohamed Elneny",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/160438-1646147218.jpg?lm=1",
    player3Team: "Basel",
    player4: "Nemanja Matic",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/74683-1655212906.jpg?lm=1",
    player4Team: "Chelsea",
  },
  {
    correctPlayer: "Gnabry",
    player1: "Salomón Rondón",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/80197-1613387915.png?lm=1",
    player1Team: "West Brom",
    player2: "Thomas Delaney",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/91849-1668183672.jpg?lm=1",
    player2Team: "Werder Bremen",
    player3: "Santi Cazorla",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/15799-1518795463.jpg?lm=1",
    player3Team: "Arsenal",
    player4: "Ryan Gravenberch",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/478573-1661804381.jpg?lm=1",
    player4Team: "Bayern Munich",
  },
  {
    correctPlayer: "Cavani",
    player1: "Gabriel Paulista",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/149498-1475828105.jpg?lm=1",
    player1Team: "Valencia",
    player2: "Lavezzi",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/50570-1595579124.jpg?lm=1",
    player2Team: "Napoli",
    player3: "Dean Henderson",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/258919-1580389388.jpg?lm=1",
    player3Team: "Manchester United",
    player4: "Digne",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/126664-1663014267.jpg?lm=1",
    player4Team: "PSG",
  },
  {
    correctPlayer: "Perisic",
    player1: "Bentancur",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/354362-1596001806.jpg?lm=1",
    player1Team: "Spurs",
    player2: "Darmian",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/54906-1604409712.jpg?lm=1",
    player2Team: "Inter Milan",
    player3: "Tolisso",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/190393-1540568459.jpg?lm=1",
    player3Team: "Manchester United",
    player4: "Nainggolan",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/41982-1666894874.jpg?lm=1",
    player4Team: "Inter Milan",
  },
  {
    correctPlayer: "Alaba",
    player1: "Firmino",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/131789-1520605270.jpg?lm=1",
    player1Team: "Hoffenheim",
    player2: "Toni Kroos",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/31909-1661426083.jpg?lm=1",
    player2Team: "Bayern Munich",
    player3: "Rüdiger",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/86202-1624448001.jpg?lm=1",
    player3Team: "Real Madrid",
    player4: "Leroy Sane",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/192565-1655064190.jpg?lm=1",
    player4Team: "Bayern Munich",
  },
  {
    correctPlayer: "Pepe",
    player1: "Gareth Bale",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/39381-1658665343.jpg?lm=1",
    player1Team: "Real Madrid",
    player2: "Gary Medel",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/60889-1630574292.jpg?lm=1",
    player2Team: "Besiktas",
    player3: "José Bosingwa",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/9813-1454172829.jpg?lm=1",
    player3Team: "Porto",
    player4: "Arjen Robben",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/4360-1540568808.jpg?lm=1",
    player4Team: "Real Madrid",
  },
  {
    correctPlayer: "Boateng",
    player1: "Ruud van Nistelrooy",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/3407-1590495209.jpg?lm=1",
    player1Team: "Hamburger",
    player2: "Mario Balotelli",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/45146-1663830086.jpg?lm=1",
    player2Team: "Manchester City",
    player3: "Alexandre Lacazette",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/93720-1594110895.jpg?lm=1",
    player3Team: "Lyon",
    player4: "Toni Kroos",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/31909-1661426083.jpg?lm=1",
    player4Team: "Bayern Munich",
  },
  {
    correctPlayer: "Rabiot",
    player1: "Neymar",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/68290-1632687616.jpg?lm=1",
    player1Team: "PSG",
    player2: "Wissam Ben Yedder",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/146854-1614089939.jpg?lm=1",
    player2Team: "Toulouse",
    player3: "Rodrigo Bentancur",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/354362-1596001806.jpg?lm=1",
    player3Team: "Juventus",
    player4: "Lucas Digne",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/126664-1663014267.jpg?lm=1",
    player4Team: "PSG",
  },
  {
    correctPlayer: "Alderweireld",
    player1: "Luis Suarez",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/44352-1668156555.jpg?lm=1",
    player1Team: "Ajax",
    player2: "Thibaut Courtois",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/108390-1665067957.jpg?lm=1",
    player2Team: "Atletico Madrid",
    player3: "Sadio Mané",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/200512-1667830279.jpg?lm=1",
    player3Team: "Southampton",
    player4: "Kyle Walker",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/95424-1668090663.jpg?lm=1",
    player4Team: "Tottenham",
  },
  {
    correctPlayer: "Casemiro",
    player1: "Donny van de Beek",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/288255-1642174403.jpg?lm=1",
    player1Team: "Manchester United",
    player2: "Willian José",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/122155-1665056373.jpg?lm=1",
    player2Team: "São Paulo",
    player3: "Ruben Neves",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/225161-1661855284.jpg?lm=1",
    player3Team: "Porto",
    player4: "Sergio Reguilón",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/282429-1559807731.png?lm=1",
    player4Team: "Real Madrid",
  },
  {
    correctPlayer: "Alex Sandro",
    player1: "Alvaro Morata",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/128223-1644496732.jpg?lm=1",
    player1Team: "Juventus",
    player2: "Bruno Martins Indi",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/112052-1629443870.jpg?lm=1",
    player2Team: "Porto",
    player3: "Neymar",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/68290-1669394812.jpg?lm=1",
    player3Team: "Santos",
    player4: "Dejan Kulusevski",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/431755-1624534430.jpg?lm=1",
    player4Team: "Juventus",
  },
  {
    correctPlayer: "Meunier",
    player1: "José Izquierdo",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/147094-1486755753.jpg?lm=1",
    player1Team: "Club Brugge",
    player2: "Jadon Sancho",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/401173-1632686361.jpg?lm=1",
    player2Team: "Borussia Dortmund",
    player3: "Donyell Malen",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/326029-1632685847.jpg?lm=1",
    player3Team: "Borussia Dortmund",
    player4: "Edinson Cavani",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/48280-1619791055.jpg?lm=1",
    player4Team: "PSG",
  },
  {
    correctPlayer: "Fofana",
    player1: "Saliba",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/495666-1665127395.jpg?lm=1",
    player1Team: "Saint-Étienne",
    player2: "Kasper Schmeichel",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/16911-1659600543.jpg?lm=1",
    player2Team: "Leicester",
    player3: "Cabaye",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/29434-1566978070.jpg?lm=1",
    player3Team: "Saint-Étienne",
    player4: "Pierre-Emerick Aubameyang",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/58864-1665516602.jpg?lm=1",
    player4Team: "Chelsea",
  },
  {
    correctPlayer: "Alonso",
    player1: "Cristiano Ronaldo",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/8198-1631656078.jpg?lm=1",
    player1Team: "Real Madrid",
    player2: "Matías Vecino",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/143812-1596003367.jpg?lm=1",
    player2Team: "Fiorentina",
    player3: "Nathan Aké",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/177476-1666733797.jpg?lm=1",
    player3Team: "Chelsea",
    player4: "Raphinha",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/411295-1665127690.jpg?lm=1",
    player4Team: "Barcelona",
  },
  {
    correctPlayer: "Giroud",
    player1: "Tammy Abraham",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/331726-1661352750.jpg?lm=1",
    player1Team: "Chelsea",
    player2: "Origi",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/148368-1661510925.jpg?lm=1",
    player2Team: "AC Milan",
    player3: "Gnabry",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/159471-1664180592.jpg?lm=1",
    player3Team: "Arsenal",
    player4: "Petr Čech",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/5658-1464946835.jpg?lm=1",
    player4Team: "Arsenal",
  },
  {
    correctPlayer: "Raphinha",
    player1: "Bruno Fernandes",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/240306-1636537174.jpg?lm=1",
    player1Team: "Sporting Lisbon",
    player2: "Camavinga",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/640428-1582629458.jpg?lm=1",
    player2Team: "Rennes",
    player3: "Rodrigo",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/357565-1556022958.jpg?lm=1",
    player3Team: "Leeds",
    player4: "Ferran Torres",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/398184-1620308050.jpg?lm=1",
    player4Team: "Barcelona",
  },
  {
    correctPlayer: "Paredes",
    player1: "Adrian Rabiot",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/header/182913-1568120243.jpg?lm=1",
    player1Team: "Juventus",
    player2: "Lionel Messi",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/header/28003-1631171950.jpg?lm=1",
    player2Team: "PSG",
    player3: "Branislav Ivanovic",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/header/36827-1572532635.png?lm=1",
    player3Team: "Zenit St Petersburg",
    player4: "Eden Dzeko",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/28396-1661268909.jpg?lm=1",
    player4Team: "Roma",
  },
  {
    correctPlayer: "Digne",
    player1: "Tyrone Mings",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/header/253677-1593437372.jpg?lm=1",
    player1Team: "Aston Villa",
    player2: "Richarlison",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/header/378710-1665608231.jpg?lm=1",
    player2Team: "Everton",
    player3: "Luis Suarez",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/header/44352-1453896733.jpg?lm=1",
    player3Team: "Barcelona",
    player4: "Zlatan Ibrahimovic",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/header/3455-1579506060.jpg?lm=1",
    player4Team: "PSG",
  },
  {
    correctPlayer: "Payet",
    player1: "Pierre-Emerick Aubameyang",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/58864-1665516602.jpg?lm=1",
    player1Team: "Saint-Etienne",
    player2: "Joe Cole",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/3876-1524234241.jpg?lm=1",
    player2Team: "Lille",
    player3: "Victor Moses",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/59866-1632577912.png?lm=1",
    player3Team: "West Ham",
    player4: "Kostas Mitroglou",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/34944-1554904582.jpg?lm=1",
    player4Team: "Marseille",
  },
  {
    correctPlayer: "Isak",
    player1: "Reus",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/35207-1661413169.jpg?lm=1",
    player1Team: "Dortmund",
    player2: "Kieran Trippier",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/95810-1517913986.jpg?lm=1",
    player2Team: "Newcastle",
    player3: "Ødegaard",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/header/316264-1510232173.jpg?lm=1",
    player3Team: "Real Sociedad",
    player4: "Pierre-Emerick Aubameyang",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/58864-1665516602.jpg?lm=1",
    player4Team: "Dortmund",
  },
  {
    correctPlayer: "Osimhen",
    player1: "Gabriel Magalhães",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/435338-1484828988.jpg?lm=1",
    player1Team: "Lille",
    player2: "Divock Origi",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/148368-1661510925.jpg?lm=1 ",
    player2Team: "Wolfsburg",
    player3: "Kalidou Koulibaly",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/93128-1448528991.jpg?lm=1 ",
    player3Team: "Napoli",
    player4: "Tiémoué Bakayoko",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/182618-1661350547.jpg?lm=1 ",
    player4Team: "Napoli",
  },
  {
    correctPlayer: "Welbeck",
    player1: "Bissouma",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/410425-1665607355.jpg?lm=1",
    player1Team: "Brighton",
    player2: "Ronaldo",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/8198-1631656078.jpg?lm=1",
    player2Team: "Manchester United",
    player3: "Coquelin",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/74869-1515684724.jpg?lm=1",
    player3Team: "Arsenal",
    player4: "Ander Herrera",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/99343-1602849051.jpg?lm=1",
    player4Team: "Manchester United",
  },
  {
    correctPlayer: "Cucurella",
    player1: "Gerard Pique",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/header/18944-1454670060.jpg?lm=1",
    player1Team: "Barcelona",
    player2: "Djené",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/header/221150-1476113729.jpg?lm=1",
    player2Team: "Getafe",
    player3: "Yves Bissouma",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/header/410425-1665607355.jpg?lm=1",
    player3Team: "Brighton",
    player4: "Conor Gallagher",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/header/488362-1566809147.jpg?lm=1",
    player4Team: "Chelsea",
  },
  {
    correctPlayer: "Tielemans",
    player1: "Fabinho",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/225693-1580133493.jpg?lm=1",
    player1Team: "Monaco",
    player2: "Maguire",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/header/177907-1663841733.jpg?lm=1",
    player2Team: "Leicester",
    player3: "Dendoncker",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/168157-1662059450.jpg?lm=1",
    player3Team: "Anderlecht",
    player4: "Mbappé",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/342229-1632686046.jpg?lm=1",
    player4Team: "Monaco",
  },
  {
    correctPlayer: "Richarlison",
    player1: "Abdoulaye Doucouré",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/127187-1448382341.png?lm=1",
    player1Team: "Watford",
    player2: "Kurt Zouma",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/157509-1647595996.jpg?lm=1",
    player2Team: "Everton",
    player3: "Clément Lenglet",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/182904-1599988301.jpg?lm=1",
    player3Team: "Tottenham",
    player4: "James Rodríguez",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/88103-1540568385.jpg?lm=1",
    player4Team: "Everton",
  },
  {
    correctPlayer: "Lovren",
    player1: "Phillipe Coutinho",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/80444-1640621762.jpg?lm=1",
    player1Team: "Liverpool",
    player2: "Samuel Umtiti",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/126540-1598302607.jpg?lm=1",
    player2Team: "Lyon",
    player3: "Luka Modríc",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/27992-1661426133.jpg?lm=1",
    player3Team: "Dinamo Zagreb",
    player4: "Malcom",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/323704-1602271074.png?lm=1",
    player4Team: "Zenit St Petersburg",
  },
  {
    correctPlayer: "Ake",
    player1: "Stones",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/186590-1583400326.jpg?lm=1",
    player1Team: "Manchester City",
    player2: "Batshuayi",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/179184-1665590459.png?lm=1",
    player2Team: "Chelsea",
    player3: "Ryan Fraser",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/146795-1481812691.jpg?lm=1",
    player3Team: "Bournemouth",
    player4: "Deeney",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/65477-1467382766.jpg?lm=1",
    player4Team: "Watford",
  },
  {
    correctPlayer: "Can",
    player1: "Coutinho",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/80444-1640621762.jpg?lm=1",
    player1Team: "Liverpool",
    player2: "de Ligt",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/326031-1641810286.jpg?lm=1",
    player2Team: "Juventus",
    player3: "Son Heung-min",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/91845-1599987413.jpg?lm=1",
    player3Team: "Bayer Leverkusen",
    player4: "Haaland",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/418560-1656179352.jpg?lm=1",
    player4Team: "Dortmund",
  },
  {
    correctPlayer: "Milik",
    player1: "Son Heung-min",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/91845-1669336455.jpg?lm=1",
    player1Team: "Bayer Leverkusen",
    player2: "Jaïro Riedewald",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/241481-1614864924.jpg?lm=1",
    player2Team: "Ajax",
    player3: "Pepe Reina",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/7825-1448528367.jpg?lm=1",
    player3Team: "Napoli",
    player4: "William Saliba",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/495666-1665127395.jpg?lm=1",
    player4Team: "Marseille",
  },
  {
    correctPlayer: "Cuadrado",
    player1: "Muriel",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/119228-1596182523.jpg?lm=1",
    player1Team: "Lecce",
    player2: "Dani Alves",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/15951-1635327520.jpg?lm=1",
    player2Team: "Juventus",
    player3: "Alexis Sanchez",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/40433-1660118147.jpg?lm=1",
    player3Team: "Udinese",
    player4: "Falcao",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/39152-1622801006.jpg?lm=1",
    player4Team: "Chelsea",
  },
  {
    correctPlayer: "Dzeko",
    player1: "Nzonzi",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/73734-1572952277.jpg?lm=1",
    player1Team: "Roma",
    player2: "Vidal",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/37666-1502276644.jpg?lm=1",
    player2Team: "Inter Milan",
    player3: "Jesus Navas",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/15956-1647595718.jpg?lm=1",
    player3Team: "Manchester City",
    player4: "Barzagli",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/7109-1416219029.jpg?lm=1",
    player4Team: "Wolfsburg",
  },
  {
    correctPlayer: "Wijnaldum",
    player1: "Dybala",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/206050-1641810495.jpg?lm=1",
    player1Team: "Roma",
    player2: "Shaqiri",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/86792-1645958643.jpg?lm=1",
    player2Team: "Liverpool",
    player3: "Juan Bernat",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/126719-1502276028.jpg?lm=1",
    player3Team: "PSG",
    player4: "Mitrovic",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/51152-1628697659.jpg?lm=1",
    player4Team: "Newcastle",
  },
  {
    correctPlayer: "Matic",
    player1: "Wilfred Bony",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/81808-1476887603.jpg?lm=1 ",
    player1Team: "Vitesse",
    player2: "Georginio Wijnaldum",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/49499-1469085417.jpg?lm=1 ",
    player2Team: "Roma",
    player3: "Jan Oblak",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/121483-1599986864.jpg?lm=1 ",
    player3Team: "Benfica",
    player4: "Kurt Zouma",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/157509-1647595996.jpg?lm=1 ",
    player4Team: "Chelsea",
  },
  {
    correctPlayer: "Otamendi",
    player1: "Rodrigo De Paul",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/255901-1623838716.jpg?lm=1",
    player1Team: "Valencia",
    player2: "Alex Sandro",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/79960-1661351746.jpg?lm=1",
    player2Team: "Porto",
    player3: "Leroy Sané",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/192565-1655064190.jpg?lm=1",
    player3Team: "Manchester City",
    player4: "Darwin Nuñez",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/546543-1657810806.jpg?lm=1",
    player4Team: "Benfica",
  },
  {
    correctPlayer: "Tavares",
    player1: "Rúben Dias",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/header/258004-1661442106.jpg?lm=1",
    player1Team: "Benfica",
    player2: "Nicolas Pépé",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/343052-1539166309.jpg?lm=1",
    player2Team: "Arsenal",
    player3: "Alexis Sanchez",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/40433-1660118147.jpg?lm=1",
    player3Team: "Marseille",
    player4: "Eric Bailly",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/286384-1641995676.jpg?lm=1",
    player4Team: "Marseille",
  },
  {
    correctPlayer: "Martinez",
    player1: "Matt Doherty",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/171679-1536063364.jpg?lm=1",
    player1Team: "Porto",
    player2: "Serge Gnabry",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/header/159471-1664180592.jpg?lm=1",
    player2Team: "Arsenal",
    player3: "Loïc Remy",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/header/45121-1650206918.png?lm=1",
    player3Team: "Getafe",
    player4: "Jack Grealish",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/header/203460-1581417066.jpg?lm=1",
    player4Team: "Aston Villa",
  },
  {
    correctPlayer: "Bernardo Silva",
    player1: "Jonas",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/50143-1474545960.jpg?lm=1",
    player1Team: "Benfica",
    player2: "Gabriel Jesus",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/363205-1669711141.jpg?lm=1",
    player2Team: "Manchester City",
    player3: "Victor Lindelof",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/184573-1569853055.png?lm=1",
    player3Team: "Benfica",
    player4: "João Moutinho",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/29364-1464083394.PNG?lm=1",
    player4Team: "Monaco",
  },
  {
    correctPlayer: "Adama Traore",
    player1: "Aubameyang",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/58864-1665516602.jpg?lm=1",
    player1Team: "Barcelona",
    player2: "Bamford",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/183334-1612870768.jpg?lm=1",
    player2Team: "Middlesbrough",
    player3: "Jordan Ayew",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/108354-1525790825.jpg?lm=1",
    player3Team: "Aston Villa",
    player4: "Marçal",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/137745-1474546360.jpg?lm=1",
    player4Team: "Wolverhampton",
  },
  {
    correctPlayer: "Hamsik",
    player1: "Cavani",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/48280-1619791055.jpg?lm=1",
    player1Team: "Napoli",
    player2: "Yannick Carrasco",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/140776-1664969500.jpg?lm=1",
    player2Team: "Dalian Yifang",
    player3: "Bartra",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/99922-1502448072.jpg?lm=1",
    player3Team: "Trabzonspor",
    player4: "Jorginho",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/102017-1599988179.jpg?lm=1",
    player4Team: "Napoli",
  },
  {
    correctPlayer: "Andre Silva",
    player1: "Angeliño",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/277179-1616422961.jpg?lm=1",
    player1Team: "RB Leipzig",
    player2: "Ben Yedder",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/146854-1614089939.jpg?lm=1",
    player2Team: "Sevilla",
    player3: "Kessie",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/294808-1594276547.jpg?lm=1",
    player3Team: "AC Milan",
    player4: "Diogo Jota",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/340950-1633340107.jpg?lm=1",
    player4Team: "Porto",
  },
  {
    correctPlayer: "Matuidi",
    player1: "Kevin Mirallas",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/33639-1605139873.jpeg?lm=1",
    player1Team: "Saint-Etienne",
    player2: "Alphonse Areola",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/120629-1663243036.jpg?lm=1",
    player2Team: "PSG",
    player3: "Merih Demiral",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/340879-1655706148.jpg?lm=1",
    player3Team: "Juventus",
    player4: "Kieran Gibbs",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/44792-1647705303.jpg?lm=1",
    player4Team: "Inter Miami",
  },
  {
    correctPlayer: "Emerson Royal",
    player1: "Ndombele",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/48280-1619791055.jpg?lm=1",
    player1Team: "Spurs",
    player2: "Pau Lopez",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/140776-1664969500.jpg?lm=1",
    player2Team: "Real Betis",
    player3: "Jese Rodríguez",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/99922-1502448072.jpg?lm=1",
    player3Team: "Real Betis",
    player4: "Braithwaite",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/102017-1599988179.jpg?lm=1",
    player4Team: "Barcelona",
  },
  {
    correctPlayer: "Ben Yedder",
    player1: "Clément Lenglet",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/48280-1619791055.jpg?lm=1",
    player1Team: "Sevilla",
    player2: "Issa Diop",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/272622-1660565295.jpg?lm=1",
    player2Team: "Toulouse",
    player3: "Takumi Minamino",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/165793-1565700962.jpg?lm=1",
    player3Team: "Monaco",
    player4: "Simon Kjær",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/48859-1661514194.jpg?lm=1",
    player4Team: "Sevilla",
  },
  {
    correctPlayer: "Andersen",
    player1: "Nathaniel Clyne",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/85177-1459244656.jpg?lm=1",
    player1Team: "Crystal Palace",
    player2: "Lucas Torreira",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/318077-1660050345.jpg?lm=1",
    player2Team: "Sampdoria",
    player3: "Ruben Loftus-Cheek",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/202886-1518793502.jpg?lm=1",
    player3Team: "Fulham",
    player4: "Memphis Depay",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/167850-1668167349.jpg?lm=1",
    player4Team: "Lyon",
  },
  {
    correctPlayer: "Danilo",
    player1: "Steven Defour",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/33866-1616956729.jpg?lm=1",
    player1Team: "Porto",
    player2: "Neymar",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/68290-1632687616.jpg?lm=1",
    player2Team: "Santos",
    player3: "Cuadrado",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/91970-1663576912.jpg?lm=1",
    player3Team: "Juventus",
    player4: "Gündogan",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/53622-1666733465.jpg?lm=1",
    player4Team: "Manchester City",
  },
  {
    correctPlayer: "Dolberg",
    player1: "Lamela",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/111630-1601318627.jpg?lm=1",
    player1Team: "Sevilla",
    player2: "Walter Benitez",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/296802-1523610168.jpg?lm=1",
    player2Team: "Nice",
    player3: "Veltman",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/111195-1524562477.jpg?lm=1",
    player3Team: "Ajax",
    player4: "Huntelaar",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/4357-1471339801.jpg?lm=1",
    player4Team: "Ajax",
  },
  {
    correctPlayer: "Cheryshev",
    player1: "Gabriel Paulista",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/149498-1475828105.jpg?lm=1",
    player1Team: "Valencia",
    player2: "Aaron Connolly",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/434207-1614851750.jpg?lm=1",
    player2Team: "Venezia",
    player3: "Alvaro Morata",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/128223-1644496732.jpg?lm=1",
    player3Team: "Real Madrid",
    player4: "Ivan Rakitic",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/32467-1568021662.jpg?lm=1",
    player4Team: "Sevilla",
  },
  {
    correctPlayer: "Aurier",
    player1: "Thiago Silva",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/header/29241-1661856081.jpg?lm=1",
    player1Team: "PSG",
    player2: "Renan Lodi",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/header/476352-1554733508.jpg?lm=1",
    player2Team: "Atletico Madrid",
    player3: "Cristian Eriksen",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/header/69633-1668184209.jpg?lm=1",
    player3Team: "Tottenham",
    player4: "Adrien Rabiot",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/header/182913-1568120243.jpg?lm=1",
    player4Team: "Toulouse",
  },
  {
    correctPlayer: "Arnautovic",
    player1: "Declan Rice",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/357662-1624883831.jpg?lm=1 ",
    player1Team: "West Ham",
    player2: "Oscar",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/85314-1563435929.jpg?lm=1 ",
    player2Team: "Dalian Yifang",
    player3: "Takehiro Tomiyasu",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/331560-1516724308.jpg?lm=1",
    player3Team: "Bologna",
    player4: "Xherdan Shaqiri",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/86792-1645958643.jpg?lm=1",
    player4Team: "Stoke",
  },
  {
    correctPlayer: "Mandanda",
    player1: "Joe Rodon",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/297212-1666698393.jpg?lm=1",
    player1Team: "Rennes",
    player2: "Balotelli",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/45146-1663830086.jpg?lm=1",
    player2Team: "Marseille",
    player3: "Benteke",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/50201-1576743159.jpg?lm=1",
    player3Team: "Crystal Palace",
    player4: "Payet",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/37647-1617979644.jpg?lm=1",
    player4Team: "Marseille",
  },
  {
    correctPlayer: "Foster",
    player1: "Ronaldo",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/8198-1631656078.jpg?lm=1",
    player1Team: "Manchester United",
    player2: "Gerard Deulofeu",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/129476-1630653606.jpg?lm=1",
    player2Team: "Watford",
    player3: "Chris Brunt",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/36814-1469705754.jpg?lm=1",
    player3Team: "West Brom",
    player4: "Alexander Hleb",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/597-1565344980.png?lm=1",
    player4Team: "Birmingham",
  },
  {
    correctPlayer: "Maitland-Niles",
    player1: "Joe Aribo",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/468198-1656428996.png?lm=1",
    player1Team: "Southampton",
    player2: "Rui Patricio",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/45026-1661350448.jpg?lm=1",
    player2Team: "Roma",
    player3: "Willian",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/52769-1575041246.jpg?lm=1",
    player3Team: "Arsenal",
    player4: "Conor Gallagher",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/488362-1566809147.jpg?lm=1",
    player4Team: "West Brom",
  },
  {
    correctPlayer: "Minamino",
    player1: "Malang Sarr",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/344596-1606395203.png?lm=1",
    player1Team: "Monaco",
    player2: "Patson Daka",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/365172-1638810490.jpg?lm=1",
    player2Team: "Red Bull Salzburg",
    player3: "Vestergaard",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/99331-1624804320.jpg?lm=1",
    player3Team: "Southampton",
    player4: "Adrian",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/71271-1462526865.jpg?lm=1",
    player4Team: "Liverpool",
  },
  {
    correctPlayer: "Wanyama",
    player1: "Bojan",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/44675-1583613429.jpg?lm=1",
    player1Team: "CF Montreal",
    player2: "Kyle Walker",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/95424-1668090663.jpg?lm=1",
    player2Team: "Tottenham",
    player3: "Sadio Mané",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/200512-1667830279.jpg?lm=1",
    player3Team: "Southampton",
    player4: "Virgil van Dijk",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/139208-1620651710.jpg?lm=1",
    player4Team: "Southampton",
  },
  {
    correctPlayer: "Trippier",
    player1: "Ings",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/134294-1562056403.jpg?lm=1",
    player1Team: "Burnley",
    player2: "Sissoko",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/46001-1465213722.jpg?lm=1",
    player2Team: "Tottenham",
    player3: "Torreira",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/46001-1465213722.jpg?lm=1",
    player3Team: "Atletico Madrid",
    player4: "Matt Targett",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/250478-1643653374.jpg?lm=1",
    player4Team: "Newcastle",
  },
  {
    correctPlayer: "Jovetic",
    player1: "Clichy",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/7449-1583152655.jpg?lm=1",
    player1Team: "Manchester City",
    player2: "Fabregas",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/8806-1614090062.jpg?lm=1",
    player2Team: "Monaco",
    player3: "Icardi",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/68863-1591599151.jpg?lm=1",
    player3Team: "Inter Milan",
    player4: "Pablo Sarabia",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/74230-1602692460.jpg?lm=1",
    player4Team: "Sevilla",
  },
  {
    correctPlayer: "Yedlin",
    player1: "Joelinton",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/333241-1532693216.jpg?lm=1",
    player1Team: "Newcastle",
    player2: "Van Aanholt",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/52119-1627491031.jpg?lm=1",
    player2Team: "Galatasaray",
    player3: "Pickford",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/130164-1488971129.jpg?lm=1",
    player3Team: "Sunderland",
    player4: "Higuain",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/39153-1647683336.jpg?lm=1",
    player4Team: "Inter Miami",
  },
  {
    correctPlayer: "Lucas Perez",
    player1: "Olivier Giroud",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/82442-1661514565.jpg?lm=1 ",
    player1Team: "Arsenal",
    player2: "Felipe Anderson",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/159372-1606396538.png?lm=1",
    player2Team: "West Ham",
    player3: "Javier Pastore",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/55215-1596030059.jpg?lm=1",
    player3Team: "Elche",
    player4: "Florian Lejeune",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/127108-1647530844.jpg?lm=1",
    player4Team: "Alavés",
  },
  {
    correctPlayer: "Targett",
    player1: "José Fonte",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/33829-1666690457.jpg?lm=1",
    player1Team: "Southampton",
    player2: "Pepe Reina",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/7825-1448528367.jpg?lm=1",
    player2Team: "Aston Villa",
    player3: "Loris Karius",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/85864-1615890800.jpg?lm=1",
    player3Team: "Newcastle",
    player4: "Jack Grealish",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/203460-1581417066.jpg?lm=1",
    player4Team: "Aston Villa",
  },
  {
    correctPlayer: "Sarr",
    player1: "Benoît Assou-Ekotto",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/18310-1448352691.jpg?lm=1",
    player1Team: "Metz",
    player2: "James Garner",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/505219-1662067244.jpg?lm=1",
    player2Team: "Watford",
    player3: "Hatem Ben Arfa",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/18900-1598304636.jpg?lm=1",
    player3Team: "Rennes",
    player4: "Mario Gaspar",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/73250-1447255212.jpg?lm=1",
    player4Team: "Watford",
  },
  {
    correctPlayer: "Maupay",
    player1: "David Ospina",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/73396-1496216427.jpg?lm=1",
    player1Team: "Nice",
    player2: "Martín Montoya",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/68645-1664974468.jpg?lm=1",
    player2Team: "Brighton",
    player3: "Ollie Watkins",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/324358-1538466436.jpg?lm=1",
    player3Team: "Brentford",
    player4: "Conor Coady",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/128901-1668090438.jpg?lm=1",
    player4Team: "Everton",
  },
  {
    correctPlayer: "El Ghazi",
    player1: "Marco Van Ginkel",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/147034-1613232156.jpg?lm=1",
    player1Team: "PSV",
    player2: "Grealish",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/203460-1581417066.jpg?lm=1",
    player2Team: "Aston Villa",
    player3: "Van de Beek",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/288255-1642174403.jpg?lm=1",
    player3Team: "Everton",
    player4: "Nicolas Pepe",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/343052-1539166309.jpg?lm=1",
    player4Team: "Lille",
  },
  {
    correctPlayer: "Gallagher",
    player1: "Brewster",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/406560-1601638409.jpg?lm=1",
    player1Team: "Swansea",
    player2: "Livermore",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/61832-1490364126.jpg?lm=1",
    player2Team: "West Brom",
    player3: "Olise",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/566723-1596804107.jpg?lm=1",
    player3Team: "Crystal Palace",
    player4: "Trevor Chalobah",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/346314-1520605508.jpg?lm=1",
    player4Team: "Chelsea",
  },
  {
    correctPlayer: "Saiss",
    player1: "Diogo Jota",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/340950-1633340107.jpg?lm=1",
    player1Team: "Wolverhampton",
    player2: "Riyad Mahrez",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/171424-1461578220.jpg?lm=1 ",
    player2Team: "Le Havre",
    player3: "Adama Traore",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/204103-1570000875.jpg?lm=1 ",
    player3Team: "Wolverhampton",
    player4: "Dele Alli",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/207929-1665670825.png?lm=1 ",
    player4Team: "Besiktas",
  },
  {
    correctPlayer: "Denis Suarez",
    player1: "Alphonse Areola",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/120629-1663243036.jpg?lm=1",
    player1Team: "Villareal",
    player2: "Luis Suarez",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/44352-1668156555.jpg?lm=1",
    player2Team: "Barcelona",
    player3: "Bernd Leno",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/72476-1642711733.jpg?lm=1",
    player3Team: "Arsenal",
    player4: "Stanislav Lobotka",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/192735-1661509021.jpg?lm=1",
    player4Team: "Celta Vigo",
  },
  {
    correctPlayer: "Musa",
    player1: "Igor Akinfeev",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/15570-1629034528.png?lm=1",
    player1Team: "CSKA Moscow",
    player2: "Riyad Mahrez",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/171424-1461578220.jpg?lm=1",
    player2Team: "Leicester",
    player3: "Maya Yoshida",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/81789-1657108603.jpg?lm=1",
    player3Team: "VVV-Venlo",
    player4: "Seydou Doumbia",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/75287-1510680050.jpg?lm=1",
    player4Team: "CSKA Moscow",
  },
  {
    correctPlayer: "Cambiasso",
    player1: "Iker Casillas",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/3979-1542105569.png?lm=1",
    player1Team: "Real Madrid",
    player2: "Mario Balotelli",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/45146-1663830086.jpg?lm=1",
    player2Team: "Inter Milan",
    player3: "Riyad Mahrez",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/171424-1461578220.jpg?lm=1",
    player3Team: "Leicester",
    player4: "Luka Milivojević",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/74300-1479730704.jpg?lm=1",
    player4Team: "Olympiakos",
  },
  {
    correctPlayer: "Amad",
    player1: "John Lundstram",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/156941-1600681782.jpg?lm=1",
    player1Team: "Rangers",
    player2: "Ruslan Malinovskyi",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/207877-1663583019.jpg?lm=1",
    player2Team: "Atalanta",
    player3: "Jack Clarke",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/559794-1551183854.jpg?lm=1",
    player3Team: "Sunderland",
    player4: "Edinson Cavani",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/48280-1619791055.jpg?lm=1",
    player4Team: "Manchester United",
  },
  {
    correctPlayer: "Modeste",
    player1: "Alexander Pato",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/37579-1647201883.jpg?lm=1",
    player1Team: "Tianjin Tianhai",
    player2: "Debuchy",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/27306-1458293735.jpg?lm=1",
    player2Team: "Saint-Étienne",
    player3: "Can",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/header/119296-1661413226.jpg?lm=1",
    player3Team: "Dortmund",
    player4: "Timo Horn",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/84938-1657109580.jpg?lm=1",
    player4Team: "FC Köln",
  },
  {
    correctPlayer: "Boufal",
    player1: "Stanislav Lobotka",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/192735-1661509021.jpg?lm=1",
    player1Team: "Celta Vigo",
    player2: "Yan Valery",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/406008-1544621080.jpg?lm=1",
    player2Team: "Angers",
    player3: "Mike Maignan",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/182906-1598303138.jpg?lm=1",
    player3Team: "Lille",
    player4: "Ryan Bertrand",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/40611-1518794490.jpg?lm=1",
    player4Team: "Southampton",
  },
  {
    correctPlayer: "Mooy",
    player1: "Joe Hart",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/40204-1471254796.jpg?lm=1",
    player1Team: "Celtic",
    player2: "Dan Burn",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/134270-1583252763.jpg?lm=1",
    player2Team: "Brighton",
    player3: "Oscar",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/85314-1563435929.jpg?lm=1",
    player3Team: "Shanghai Port",
    player4: "Danny Ward",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/203026-1459255910.jpg?lm=1",
    player4Team: "Huddersfield",
  },
  {
    correctPlayer: "Enner Valencia",
    player1: "Alioski",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/129604-1665589597.png?lm=1",
    player1Team: "Fenerbache",
    player2: "Barkley",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/131978-1662368517.jpg?lm=1",
    player2Team: "Everton",
    player3: "Alex Song",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/s_27394_131_2013_08_05_1.jpg?lm=1",
    player3Team: "West Ham",
    player4: "Gignac",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/43907-1465213831.jpg?lm=1",
    player4Team: "Tigres",
  },
  {
    correctPlayer: "Babel",
    player1: "Gregory van der Wiel",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/45548-1520787963.jpg?lm=1",
    player1Team: "Ajax",
    player2: "Talisca",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/258626-1563350063.jpg?lm=1",
    player2Team: "Besiktas",
    player3: "Javier Mascherano",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/19981-1465280515.jpg?lm=1",
    player3Team: "Liverpool",
    player4: "Andre Schürrle",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/58205-1471509802.jpg?lm=1",
    player4Team: "Fulham",
  },
  {
    correctPlayer: "Fosu-Mensah",
    player1: "Ruben Loftus-Cheek",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/202886-1518793502.jpg?lm=1",
    player1Team: "Crystal Palace",
    player2: "Andre Schürrle",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/58205-1471509802.jpg?lm=1",
    player2Team: "Fulham",
    player3: "Memphis Depay",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/167850-1668167349.jpg?lm=1",
    player3Team: "Manchester United",
    player4: "Ryan Sessegnon",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/392775-1554559145.jpg?lm=1",
    player4Team: "Fulham",
  },
  {
    correctPlayer: "Estupiñan",
    player1: "Iddrisu Baba",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/442805-1568028870.jpg?lm=1",
    player1Team: "Mallorca",
    player2: "Joël Veltman",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/111195-1524562477.jpg?lm=1",
    player2Team: "Brighton",
    player3: "Juan Foyth",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/480763-1662668281.jpg?lm=1",
    player3Team: "Villareal",
    player4: "Serge Aurier",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/127032-1479730792.jpg?lm=1",
    player4Team: "Villareal",
  },
  {
    correctPlayer: "Carson",
    player1: "Mason Mount",
    player1Image:
      "https://img.a.transfermarkt.technology/portrait/big/346483-1642175298.jpg?lm=1",
    player1Team: "Derby",
    player2: "Xabi Alonso",
    player2Image:
      "https://img.a.transfermarkt.technology/portrait/big/7476-1471439383.JPG?lm=1",
    player2Team: "Liverpool",
    player3: "Burak Yilmaz",
    player3Image:
      "https://img.a.transfermarkt.technology/portrait/big/34987-1622122750.jpg?lm=1",
    player3Team: "Bursaspor",
    player4: "Carlos Vela",
    player4Image:
      "https://img.a.transfermarkt.technology/portrait/big/35773-1646496838.jpg?lm=1",
    player4Team: "West Brom",
  },
];

export const correctPlayers = [
  "Ronaldo",
  "Messi",
  "Pogba",
  "Neymar",
  "Ramos",
  "Di Maria",
  "Higuain",
  "Kovacic",
  "Bale",
  "Lewandowski",
  "Eden Hazard",
  "De Bruyne",
  "Thiago",
  "Mane",
  "Pjanic",
  "Eriksen",
  "Torres",
  "Falcao",
  "Hakimi",
  "Coman",
  "Lukaku",
  "Salah",
  "Gnabry",
  "Cavani",
  "Perisic",
  "Alaba",
  "Pepe",
  "Boateng",
  "Rabiot",
  "Alderweireld",
  "Casemiro",
  "Alex Sandro",
  "Meunier",
  "Fofana",
  "Alonso",
  "Giroud",
  "Raphinha",
  "Paredes",
  "Digne",
  "Payet",
  "Isak",
  "Osimhen",
  "Welbeck",
  "Cucurella",
  "Tielemans",
  "Richarlison",
  "Lovren",
  "Ake",
  "Can",
  "Milik",
  "Cuadrado",
  "Dzeko",
  "Wijnaldum",
  "Matic",
  "Otamendi",
  "Tavares",
  "Martinez",
  "Bernardo Silva",
  "Adama Traore",
  "Hamsik",
  "Andre Silva",
  "Matuidi",
  "Emerson Royal",
  "Ben Yedder",
  "Andersen",
  "Danilo",
  "Dolberg",
  "Cheryshev",
  "Aurier",
  "Arnautovic",
  "Mandanda",
  "Foster",
  "Maitland-Niles",
  "Minamino",
  "Wanyama",
  "Trippier",
  "Jovetic",
  "Yedlin",
  "Sarr",
  "Maupay",
  "Lucas Perez",
  "Targett",
  "El Ghazi",
  "Gallagher",
  "Saiss",
  "Denis Suarez",
  "Musa",
  "Cambiasso",
  "Amad",
  "Modeste",
  "Boufal",
  "Mooy",
  "Enner Valencia",
  "Babel",
  "Fosu-Mensah",
  "Estupiñan",
  "Carson",
];
