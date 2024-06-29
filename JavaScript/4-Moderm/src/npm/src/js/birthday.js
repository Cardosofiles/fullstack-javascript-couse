const dayjs = require("dayjs");

function birthday(date) {
  const birthday = dayjs(date);
  const today = dayjs();

  const ageInYears = today.diff(birthday, "year");
  const nextBirthday = birthday.add(ageInYears + 1, "year");
  const daysToNextBirthday = nextBirthday.diff(today, "day") + 1;

  console.log(`Idade: ${ageInYears} anos`);
  console.log(`O próximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}`);
  console.log(
    `Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`
  );
}

birthday("1996-05-13");
// formato da data em inglês: year, month, day 1996-05-13 ano, mês, dia.
// dia em inglês: monday, seg | tuesday, ter | wednesday, qua | thursday, qui | friday, sex | saturday, sáb | sunday, dom
