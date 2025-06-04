import { Given, When, Then } from "@wdio/cucumber-framework";

import RegisterPage from '../pageobjects/register.page.js';

Given(/^I am on the (\w+) page$/, async (page) => {
  await RegisterPage.open();
});

When(
  /^I register with (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*)$/,
  async (
    firstName,
    lastName,
    address,
    city,
    state,
    zipCode,
    phone,
    ssn,
    username,
    password,
    confirmPassword
  ) => {
    if (username === "random") {
      username = Math.random().toString(36).substring(2, 10); // Generate random username
    }
    await RegisterPage.Register(
      firstName,
      lastName,
      address,
      city,
      state,
      zipCode,
      phone,
      ssn,
      username,
      password,
      confirmPassword
    );
  }
);

Then(
  /^I should see a text on the Register result saying (.*)$/,
  async (message) => {
    if (message == "Passwords did not match.") {
      // incorrect password and confirmed password
      await expect($("span[id='repeatedPassword.errors']")).toBeExisting();
      await expect($("span[id='repeatedPassword.errors']")).toHaveTextContaining(message);      
    } else if (message == "This username already exists.") {
      //username already exist
      await expect($('.error')).toBeExisting();
      await expect($('.error')).toHaveTextContaining(message);
    } else {
      // valid data
      await expect($('.title')).toBeExisting();
      await expect($('.title')).toHaveTextContaining(message);
    }
  }
);
