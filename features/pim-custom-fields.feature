Feature: PIM Module Custom Fields capability

  @customfields
  Scenario Outline: Admin adds a new DropDown Custom Field
    Given Admin is on Custom Fields
    When Admin adds a new DropDown Custom Field with "<fieldName>" on "<screen>" with options "<selectOptions>"
    Then the custom field is created successfully

    Examples:
      | fieldName   | screen              | selectOptions            |
      | BloodsType  | Personal Details    | A+,A-                    |
      | ICE Contact | Emergency Contacts  | Mom,Dad                  |
      | Allergy     | Dependents          | Penicillin,Peanuts       |
      | Language    | Immigration         | English,French           |
      | Relation    | Dependents          | Father,Mother            |

  @customfields
  Scenario Outline: Add a custom Text or Number field to PIM
    Given Admin is on Custom Fields
    When Admin adds a new Text or Number Custom Field with "<fieldName>" on "<screen>"
    Then the custom field is created successfully

    Examples:
      | fieldName                                    | screen             |
      | 1                                            | Contact Details    |
      | 0869361190                                   | Emergency Contacts |
      | 1530313610316036019390163169036              | Immigration        |
      | S*Pe,CiAl_Tx10-!.                            | Dependents         |
