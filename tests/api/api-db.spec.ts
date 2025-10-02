// import { test, expect } from '@playwright/test';
// import { getAccessTokenAndUpdateEnv } from '../../utils/authUtil.js';
// import 'dotenv/config';

// let accessToken: string;

// test.beforeAll(async () => {
//   accessToken = await getAccessTokenAndUpdateEnv();
// });

// test('Get employees via API', async ({ request }) => {
//   const response = await request.get(
//     'http://localhost/orangehrm/orangehrm-5.7/web/index.php/api/v2/pim/employees',
//     {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         'Content-Type': 'application/json',
//       }
//     }
//   );
//   expect(response.ok()).toBeTruthy();
// });

// test('Create employee via API', async ({ request }) => {
//   const response = await request.post(
//     'http://localhost/orangehrm/orangehrm-5.7/web/index.php/api/v2/pim/employees',
//     {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         'Content-Type': 'application/json',
//       },
//       data: {
//         firstName: 'Stoych',
//         lastName: 'Doe'
//       }
//     }
//   );
//   expect(response.ok()).toBeTruthy();
//   const data = await response.json();
//   console.log(data.data.empNumber);
// });
