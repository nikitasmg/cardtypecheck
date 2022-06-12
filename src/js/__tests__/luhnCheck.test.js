import {luhnCheck} from "../components/luhnCheck";

test.each([
  ['Should return visa',
    '4119213927228410',
    true],
  ['Should return maestro',
    '5038155354905355',
    true],
  ['Should return american-express',
    '373423211299014',
    true],
  ['Should return mir',
    '2444456745674567',
    false],
  ['Should return visa-electron',
    '4917881439840940',
    true]
])('objects should be equal %number ', (a, number, expected) => {
  expect(luhnCheck(number)).toEqual(expected);
});
