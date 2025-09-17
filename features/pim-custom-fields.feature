Feature: PIM Module Custom Fields capability

  Scenario Outline: Add a custom dropdown field to PIM
    Given Admin is on Custom Fields
    When Admin adds a new DropDown Custom Field
      | Field Name   | Screen   | Type     | Select Options |
      | <fieldName>  | <screen> | Dropdown | <options>     |
    Then the custom field is created successfully

    Examples:
      | fieldName   | screen             | options   |
      | Blood Type  | Personal Details   | A+,A-     |
      | ICE Contact | Emergency Contacts | Mom,Dad   |
      | Allergy     | Dependents         | Penicillin,Peanuts |
      | Language    | Immigration        | English,French |
      | Relation    | Dependents         | Father,Mother |

 Scenario Outline: Add a custom Text or Number field to PIM
    Given Admin is on Custom Fields
    When Admin adds a new Text or Number Custom Field
      | Field Name   | Screen   | Type           |
      | <fieldName>      | <screen> | Text or Number |
    Then the custom field is created successfully

    Examples:
      | fieldName      | screen             |
      | 1          | Contact Details    |
      | 0869361190 | Emergency Contacts |
      | 15303136103160360193901631690360936190361903169013690360913169036190316901369031690361901360936109   | Immigration        |
      | S*Pe,CiAl\_Tx10-!. | Dependents |
