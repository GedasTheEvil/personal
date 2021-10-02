const $euras = 1 / 3.4528;
const $montly_interest = 1.01; // 1%

//// the debt

let $skola = 3200 * $euras; //Kompui
$skola += 100; // Papildomas skolinimas
$skola *= $montly_interest; // Palukanos uz balandzio men
$skola *= $montly_interest; // Palukanos uz Birzelio
$skola *= $montly_interest; // Palukanos uz Liepos
$skola -= 25; // 2015-05-05 Grazino, nes neturejau grynu visai as
$skola *= $montly_interest; // Palukanos uz 2015-09
$skola *= $montly_interest; // Palukanos uz 2015-10
$skola *= $montly_interest; // Palukanos uz 2015-11
$skola *= $montly_interest; // Palukanos uz 2015-12
$skola *= $montly_interest; // Palukanos uz 2016-01
$skola *= $montly_interest; // Palukanos uz 2016-02
$skola *= $montly_interest; // Palukanos uz 2016-03
$skola += 140; // 2016-04-15
$skola *= $montly_interest; // Palukanos uz 2016-05
$skola -= 500; // 2016-06-06 Grazino
$skola += 150; // 2016-07-14
$skola -= 60; // 2016-07-22
$skola *= $montly_interest; // Palukanos uz 2016-08
$skola *= $montly_interest; // Palukanos uz 2016-09
$skola *= $montly_interest; // Palukanos uz 2016-10
$skola *= $montly_interest; // Palukanos uz 2016-11
$skola *= $montly_interest; // Palukanos uz 2016-12
$skola += 150; // Papildomai paskolinu 2017-01
$skola *= $montly_interest; // Palukanos uz 2017-02
$skola *= $montly_interest; // Palukanos uz 2017-03
$skola *= $montly_interest; // Palukanos uz 2017-04
$skola += 42; // 2017-05-31 moar munyz lent
$skola += 250; // 2017-06-06 Lieku per 50 pinigu ant ribos :D
$skola *= $montly_interest; // Palukanos uz 2017-07
$skola += 100; // 2017-08-09 vel paskolinu
$skola *= $montly_interest; // Palukanos uz 2017-09
$skola += 100; // 2017-10-28 even moar
$skola *= $montly_interest; // Palukanos uz 2017-11
$skola *= $montly_interest; // Palukanos uz 2017-12
$skola *= $montly_interest; // Palukanos uz 2018-01
$skola *= $montly_interest; // Palukanos uz 2018-02
$skola *= $montly_interest; // Palukanos uz 2018-03
$skola *= $montly_interest; // Palukanos uz 2018-04
$skola *= $montly_interest; // Palukanos uz 2018-05



$skola -= 20; // return 2019-11-13
$skola -= 30; // return 2019-12-10
$skola -= 50;  // return 2020-01-10
$skola -= 30.39;  // return 2020-02-12
$skola -= 80; // return 03-05
$skola -= 50; // return 04-23
$skola -= 44; // return 08-12
$skola -= 50; // return 09-02
$skola -= 50; // return 10-05
$skola -= 50; // return 11-04
$skola -= 50; // return 12-03
$skola -= 50; // return 12-28
$skola -= 100; // return 2021-02-02
$skola -= 100; // return 2021-03-04
$skola -= 100; // return 2021-04-06
$skola -= 100; // return 2021-05-05
$skola -= 100; // return 2021-06-03
$skola -= 100; // return 2021-07-07
$skola -= 100; // return 2021-08-03
$skola -= 100; // return 2021-09-02
$skola -= 100; // return 2021-10-01


//// View

console.log(`\n\nSkola yra ${$skola.toFixed(2)} Euro\n\n` );
