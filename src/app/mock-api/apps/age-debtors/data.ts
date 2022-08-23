import { faker } from '@faker-js/faker';


const USERS: any[] = [];

function createRandomUser(): any {
    return {
      payeeId: faker.datatype.uuid(),
      payee: faker.internet.userName(),
      child: faker.internet.userName(),
      threeWeeks: faker.finance.amount(),
      twoWeeks: faker.finance.amount(),
      oneWeek: faker.finance.amount(),
      current: faker.finance.amount(),
      pendingAmount: faker.finance.amount(),
      overPayment: faker.finance.amount(),
      pendingCreditNote: faker.finance.amount(),
      totalCreditNote: faker.finance.amount()
    };
  }

  Array.from({ length: 200 }).forEach(() => {
    USERS.push(createRandomUser());
  });


export default USERS;