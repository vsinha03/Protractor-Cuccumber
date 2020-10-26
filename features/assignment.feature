Feature: Assignment

  @test @Webtable
  Scenario: Web table is visible to user
    Given User navigates to Web table page
    When Web table should be visible to user
    Then Web table headings is visible to user

  @test @Webtable
  Scenario: User can add data in Web table
    Given User navigates to Web table page
    When User clicks on add button
    Then User provide required data and submit
    And User should see added data in web table

  @test @Webtable
  Scenario: User can edit data in Web table
    Given User navigates to Web table page
    When User clicks on edit button of a web table entry
    Then User provide updated data and submit
    And User should see updated data in web table

  @test @Webtable
  Scenario: User can delete data in Web table
    Given User navigates to Web table page
    When User click on delete button of a web table entry
    Then User should not see deleted data in web table

  @test @file
  Scenario: File is downloaded successfully
    Given User navigates to file transfer page
    Then User downloads the file

  @test @file
  Scenario: File is uploaded successfully
    Given User navigates to file transfer page
    When User uploads files
    Then User can see file is uploaded successfully

  @test @progressbar
  Scenario: Progress bar is visible to user
    Given User navigates to progress bar page
    When User start the progress
    Then User should see progress bar completed

  @test @alert
  Scenario: USer accepts alert
    Given User navigates to alert page
    When User click to show alert
    Then User accepts alert

  @test @newTab
  Scenario: New tab is visible to user
    Given User navigates to parent tab
    When User clicks on new tab button
    Then User should see new tab