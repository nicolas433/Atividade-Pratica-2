const countBtn = document.getElementById("count");
const resetBtn = document.getElementById("reset");
const visor = document.getElementById("visor-block");

countBtn.addEventListener("click", () => {
  const input = document.getElementById("text").value;
  let newInput = String(input)
    .replace(/[\n]+/g, " ")
    .replace(/[" "]+/g, " ")
    .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
    .split(" ")
    .map((Element) => {
      if (isAWord(Element)) {
        return Element.toLocaleLowerCase();
      }
    })
    .filter(isDefined)
    .sort();
  count(newInput);
});

resetBtn.addEventListener("click", () => {
  const howManyDifferentWords = document.getElementById(
    "how-many-different-words"
  );
  const input = document.getElementById("text").value;

  howManyDifferentWords.innerHTML = "";
  visor.innerHTML = "";
});

function isAWord(str) {
  if (str.length > 1 && isNaN(Number(str))) {
    return true;
  } else {
    return false;
  }
}
function isDefined(value) {
  return value;
}
function count(words) {
  let manyDifferet = 0;
  let equals = 0;
  let sort = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] != words[i + 1]) {
      sort.push({
        word: words[i],
        times: equals,
      });
      manyDifferet++;
      equals = 0;
    } else {
      equals++;
    }
  }
  sort.sort(orderByAppearances);
  sort.forEach((element) => {
    render(element.word, element.times);
  });

  const howManyDifferentWords = document.getElementById(
    "how-many-different-words"
  );
  howManyDifferentWords.innerHTML = manyDifferet;
  z;
}
function render(valueOne, valueTwo) {
  const box = document.createElement("div");
  box.classList.add("result");
  const text = document.createTextNode(
    `A palavra "${valueOne}" repete ${valueTwo + 1} vez(es).`
  );
  box.appendChild(text);
  visor.appendChild(box);
}
function orderByAppearances(a, b) {
  return b.times - a.times;
}
