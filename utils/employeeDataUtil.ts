export function generateEmployeeData() {
    const unique = (Date.now().toString().slice(-4) + Math.floor(Math.random() * 1000)).slice(0, 6);
    return {
        firstName: `John${unique}`.slice(0, 30),
        middleName: `A${unique}`.slice(0, 30),
        lastName: `Doe${unique}`.slice(0, 30),
        employeeId: `ID${unique}`.slice(0, 10),
        newFirstName: `Johnny${unique}`.slice(0, 30)
    };
}