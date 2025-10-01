Feature: PIM Module Data Import capability

Scenario: Import valid CSV file
Given Admin is on Data Import
When Admin uploads file "importData.csv" 
Then all employees from the file should appear in the Employee List