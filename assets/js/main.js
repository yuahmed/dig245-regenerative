/* javascript */
let btn = document.getElementById("GenBtn");

let place = document.querySelector("#location");
let feeling = document.querySelector("#feel");
let partner = document.querySelector("#partner");
let bg = document.getElementById("bg");

const bgSize = window.innerWidth + "px " + window.innerHeight + "px";
bg.style.backgroundSize = bgSize;

feeling.addEventListener("change", buttonStyle);
place.addEventListener("change", buttonStyle);
partner.addEventListener("change", buttonStyle);

function buttonStyle() {
  if (feeling.value === "" || place.value === "" || partner.value === "") {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}

const general = [
  "tave a bubble wrap popping competition.",
  "try talking in a different accent for the entire day.",
  "create a fictional backstory for a random stranger you see online.",
  "make a time-lapse video of yourself attempting to solve a complex puzzle.",
  "practice your balancing skills by walking along a line like a tightrope walker.",
  "have a contest to see who can make the tallest tower using spaghetti and marshmallows.",
];

const atHome = [
  "have a 'dance-off'in front of a mirror, trying out your silliest dance moves.",
  "create your own comedy stand-up routine and perform it for an imaginary audience.",
  "paint a picture of your favorite fictional character or scene.",
  "experiment with creating a unique and bizarre smoothie recipe with whatever ingredients you have on hand.",
  "build a blanket fort and spend some time inside reading, watching movies, or simply relaxing.",
  "treat yourself to a rejuvenating DIY spa day at home. Create a calming atmosphere for a bubble bath with scented candles, soothing music, and soft lighting.",
];

const atParty = [
  "have a contest to see who can make the tallest tower using spaghetti and marshmallows.",
  "set up an indoor scavenger hunt with quirky riddles and clues.",
  "write a short, funny poem about objects around you.",
  "host a 'craziest outfit' fashion show with household items.",
  "have a movie marathon featuring films from a specific genre or director.",
  "challenge someone or a group of people to a friendly dance-off competition.",
];

const atStonehenge = [
  "see how many small rocks you can balance on top of one another in the nearby fields, creating your own mini stone formations. ",
  "wait until dusk to do some stargazing. The night sky over Stonehenge can be quite stunning.",
  "practice yoga or meditation at Stonehenge, harnessing the ancient energy of the site to find your inner zen.",
  "crank up some music on your headphones and have a dance party among the stones. It's a great way to liven up the atmosphere.",
  "appreciate Stonehenge's beauty during sunset, when the light casts a warm and mesmerizing glow on the ancient stones.",
  "fashion a makeshift time capsule using items you have with you. Bury it near Stonehenge make a note to return and unearth it in the future for a delightful surprise.",
];

const atPark = [
  "go for a leisurely bike ride on the park's trails.",
  "have a picnic with your favorite snacks and drinks.",
  "take part in a spontaneous interpretive dance session to entertain passersby.",
  "try birdwatching and identify local bird species.",
  "have a picnic with stuffed animals and pretend they're having a tea party.",
  "organize a friendly game of frisbee or capture the flag with other park-goers.",
];

const atPentagon = [
  "organize a paper airplane competition in the courtyard.",
  "imagine yourself as a secret agent and engage in a playful spy mission.",
  'challenge your imagination with a game of "What if?" about the Pentagon.',
  "set up a 'Pentagon Karaoke Night' and belt out your favorite tunes in the corridors.",
  "conduct a pretend scavenger hunt for secret documents.",
  "give a humorous and imaginative tour to imaginary people or fellow visitors. You can create an entertaining narrative about the Pentagon's history and secrets while adding a touch of humor and absurdity to make it fun.",
];

const atSchool = [
  "organize a mini-treasure hunt or scavenger hunt, setting up clues around the school. You can do this alone or with a friend.",
  "have a creative writing session. Find a quiet spot, and write short stories, poems, or journal entries.",
  "start a photography project. Capture interesting and unique aspects of your school environment. You can either compete with your partner or share your photos online.",
  "play a musical instrument in the school's music room or practice your singing in the empty auditorium.",
  "find a book to read, and discuss it with your partner or invite other friends to join in. You can have in-depth conversations about the story and characters.",
  "organize a film screening in a classroom. Watch a classic movie or a new release with friends or fellow film enthusiasts.",
];

const HomeImg = [
  "url(assets/img/homeOne.jpg)",
  "url(assets/img/homeThree.jpg)",
  "url(assets/img/homeTwo.jpg)",
];
const ParkImg = [
  "url(assets/img/parkOne.jpg)",
  "url(assets/img/parkTwo.jpeg)",
  "url(assets/img/parkThree.jpeg)",
];
const PartyImg = [
  "url(assets/img/partyOne.gif)",
  "url(assets/img/partyTwo.jpeg)",
  "url(assets/img/partyThree.jpeg)",
];
const PentImg = [
  "url(assets/img/pentOne.jpg)",
  "url(assets/img/pentTwo.jpeg)",
  "url(assets/img/pentThree.gif)",
];
const StoneImg = [
  "url(assets/img/stoneOne.jpeg)",
  "url(assets/img/stoneTwo.jpg)",
  "url(assets/img/stoneThree.jpeg)",
];
const SchoolImg = [
  "url(assets/img/schoolOne.jpeg)",
  "url(assets/img/schoolTwo.jpeg)",
  "url(assets/img/schoolThree.jpeg)",
];

btn.addEventListener("click", () => change());

function change() {
  let resultbox = document.getElementById("result");
  let res = document.getElementById("resultText");
  let loc = place.value;
  let feel = feeling.value;

  // 0 HOME  // 1 PENTAGON  // 2 PARK  // 3 STONEHENGE  // 4 A PARTY

  if (loc == 0) {
    activity =
      atHome[Math.floor(Math.random() * 6)] ||
      general[Math.floor(Math.random() * 6)];

    bg.style.backgroundImage = HomeImg[Math.floor(Math.random() * 3)];
    bg.style.backgroundSize = bgSize;
    //bg.style.opacity = "50%";
  } else if (loc == 1) {
    activity =
      atPentagon[Math.floor(Math.random() * 6)] ||
      general[Math.floor(Math.random() * 6)];

    bg.style.backgroundImage = PentImg[Math.floor(Math.random() * 3)];
    bg.style.backgroundSize = bgSize;
  } else if (loc == 2) {
    activity =
      atPark[Math.floor(Math.random() * 6)] ||
      general[Math.floor(Math.random() * 6)];

    bg.style.backgroundImage = ParkImg[Math.floor(Math.random() * 3)];
    bg.style.backgroundSize = bgSize;
    //bg.style.opacity = "50%";
  } else if (loc == 3) {
    activity =
      atStonehenge[Math.floor(Math.random() * 6)] ||
      general[Math.floor(Math.random() * 6)];

    bg.style.backgroundImage = StoneImg[Math.floor(Math.random() * 3)];
    bg.style.backgroundSize = bgSize;
  } else if (loc == 4) {
    activity =
      atParty[Math.floor(Math.random() * 6)] ||
      general[Math.floor(Math.random() * 6)];

    bg.style.backgroundImage = PartyImg[Math.floor(Math.random() * 3)];
    bg.style.backgroundSize = bgSize;
  } else {
    activity =
      atSchool[Math.floor(Math.random() * 6)] ||
      general[Math.floor(Math.random() * 6)];

    bg.style.backgroundImage = SchoolImg[Math.floor(Math.random() * 3)];
    bg.style.backgroundSize = bgSize;
  }

  //0 HAPPY   //1 SAD  //2 ANGRY  //3 HUNGRY  //4 TIRED

  if (feel == 1) {
    activity = activity + "\n Hopefully, you will feel much better after this!";
  } else if (feel == 2) {
    activity = activity + "\n Hopefully, this will calm down your anger!";
  } else if (feel == 3) {
    activity = activity + "\n Or, have a quick snack first.";
  } else if (feel == 4) {
    activity = activity + "\n Though, taking a quick nap would be great too!";
  }

  resultbox.style.display = "block";
  res.innerText = activity;
}
