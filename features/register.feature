Feature: Para Bank Register Feature

  Scenario Outline: As a new customer, I can register into the Para Bank Website
    Given I am on the register page
    When I register with <firstName> and <lastName> and <address> and <city> and <state> and <zipCode> and <phone> and <ssn> and <username> and <password> and <confirmPassword>
    Then I should see a text on the Register result saying <message>

    Examples: 
      | firstName | lastName  | address    | city          | state     | zipCode  | phone | ssn   | username     | password | confirmPassword | message                       |
      | Juan | Calle | provenza | medellin | antioquia |    35155 |    123   | 35155 | test5     | test | test        | Welcome |