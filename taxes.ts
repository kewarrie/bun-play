/**
 * 
 * @function calculate_simple_tax - 01. Simple Tax
 * 
 * @param {number} taxation_rate  - The rate at which the government is taxing you. This is a percentage, e.g. 30%
 * @param {number} gross_income - This is the total negotiated salary with your employer, before taxes.
 * 
 * @returns {object} - P.A.Y.E (Pay As You Earn); Your take home salary.
 */

const DEFAULT_TAXATION_RATE: number = 30;


function calculate_simple_tax(taxation_rate: number, gross_income: number) {
  // Validate taxation_rate
  if (taxation_rate < 0 || taxation_rate > 100) {
    taxation_rate = DEFAULT_TAXATION_RATE;
  }

  // Validate gross_income
  if (gross_income < 0) {
    gross_income = 0;
  }

  // Calculate taxes (because you pay the government first)
  const taxes: number = (taxation_rate/100) * gross_income;

  // Calculate net income
  const net_income: number = gross_income - taxes;

  // Return P.A.Y.E
  return {
    net_income: `Ksh. ${net_income}`,
    taxes: `Ksh. ${taxes}`,
  };
}

/**
 * @example
 */

const james_gross_salary: number = 50000; // James has a gross salary of Ksh. 50,000
const gok_tax_rate: number = 23; // GoK charges James a simple tax of 23% on his gross salary
const james_paye: object = calculate_simple_tax(gok_tax_rate, james_gross_salary); // Jame's take home salary is

// Print to console
console.log(james_paye)
