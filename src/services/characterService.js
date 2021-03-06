export const characters = [
  {
    id: 1,
    title: "Kero Kero Keroppi",
    imagePath:
      "https://www.sanrio.co.jp/wp-content/uploads/2013/09/kerokerokeroppi_b.png",
    isClicked: false
  },
  {
    id: 2,
    title: "Hello Kitty",
    imagePath:
      "https://www.sanrio.co.jp/wp-content/uploads/2013/09/hellokitty_b.png",
    isClicked: false
  },
  {
    id: 3,
    title: "Chococate",
    imagePath:
      "https://www.sanrio.co.jp/wp-content/uploads/2013/09/chococat_b.png",
    isClicked: false
  },
  {
    id: 4,
    title: "Pom Pom Purin",
    imagePath:
      "https://www.sanrio.co.jp/wp-content/uploads/2013/09/pompompurin_b.png",
    isClicked: false
  },
  {
    id: 5,
    title: "Tuxedosam",
    imagePath:
      "https://www.sanrio.co.jp/wp-content/uploads/2013/09/tuxedosam_b.png",
    isClicked: false
  },
  {
    id: 6,
    title: "Bad Badtz-Maru",
    imagePath:
      "https://www.sanrio.co.jp/wp-content/uploads/2013/09/badtzmaru_b.png",
    isClicked: false
  },
  {
    id: 7,
    title: "Pandapple",
    imagePath:
      "https://imgcdn.sanrio.co.jp/wp-content/uploads/2013/09/pandapple_b.png",
    isClicked: false
  },
  {
    id: 8,
    title: "Gudetama",
    imagePath:
      "https://www.sanrio.co.jp/wp-content/uploads/2014/03/gudetama_b.png",
    isClicked: false
  },
  {
    id: 9,
    title: "Tiny Chum",
    imagePath:
      "https://imgcdn.sanrio.co.jp/wp-content/uploads/2014/08/tinychum_b.png",
    isClicked: false
  },
  {
    id: 10,
    title: "Cinnamoroll",
    imagePath:
      "https://www.sanrio.co.jp/wp-content/uploads/2013/09/cinnamoroll_b.png",
    isClicked: false
  },

  {
    id: 11,
    title: "Pekkle",
    imagePath:
      "https://imgcdn.sanrio.co.jp/wp-content/uploads/2013/09/pekkuru_b.png",
    isClicked: false
  },
  {
    id: 12,
    title: "The Vaudeville Duo",
    imagePath:
      "https://imgcdn.sanrio.co.jp/wp-content/uploads/2013/09/vaudevilleduo_b.png",
    isClicked: false
  },
  {
    id: 13,
    title: "My Melody",
    imagePath:
      "https://www.sanrio.co.jp/wp-content/uploads/2013/09/mymelody_b.png",
    isClicked: false
  },
  {
    id: 14,
    title: "Kuromi",
    imagePath:
      "https://www.sanrio.co.jp/wp-content/uploads/2013/09/kuromi_b.png",
    isClicked: false
  },
  {
    id: 15,
    title: "Shinkansen",
    imagePath:
      "https://www.sanrio.co.jp/wp-content/uploads/2013/09/shinkansen_b.png",
    isClicked: false
  },
  {
    id: 16,
    title: "Usahana",
    imagePath:
      "https://imgcdn.sanrio.co.jp/wp-content/uploads/2013/09/usahana_b.png",
    isClicked: false
  },
  {
    id: 17,
    title: "Monkichi",
    imagePath:
      "https://imgcdn.sanrio.co.jp/wp-content/uploads/2013/09/osarunomonkichi_b.png",
    isClicked: false
  },
  {
    id: 18,
    title: "Kuririn",
    imagePath:
      "https://imgcdn.sanrio.co.jp/wp-content/uploads/2013/09/kuririn_b.png",
    isClicked: false
  }
];

export function shuffleCharacters() {
  let counter = characters.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = characters[counter];
    characters[counter] = characters[index];
    characters[index] = temp;
  }

  return characters;
}
