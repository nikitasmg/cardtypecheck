import {cardType} from "../components/cardType";

test.each([
  ['Should return visa',
    '4119213927228410',
    'visa'],
  ['Should return maestro',
    '5038155354905355',
    'maestro'],
  ['Should return american-express',
    '373423211299014',
    'american-express'],
  ['Should return mir',
    '2444456745674567',
    'mir'],
  ['Should return visa-electron',
    '4917881439840940',
    'visa-electron']
])('objects should be equal ', (_, number, expected) => {
  expect(cardType(number)).toEqual(expected);
});
