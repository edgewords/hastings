$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test 1-1001.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Auto generated Octane revision tag"
    }
  ],
  "line": 3,
  "name": "Feature 1",
  "description": "",
  "id": "feature-1",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@TID1001REV0.2.0"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Scenario 1",
  "description": "",
  "id": "feature-1;scenario-1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I run this scenario",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I get a message in the results",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_1_steps.i_run_this_scenario()"
});
formatter.result({
  "duration": 106560900,
  "status": "passed"
});
formatter.match({
  "location": "Test_1_steps.i_get_a_message_in_the_results()"
});
formatter.result({
  "duration": 364400,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat step_bindings.Test_1_steps.i_get_a_message_in_the_results(Test_1_steps.java:21)\r\n\tat ✽.Then I get a message in the results(Test 1-1001.feature:7)\r\n",
  "status": "failed"
});
formatter.uri("Test 2-1002.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Auto generated Octane revision tag"
    }
  ],
  "line": 3,
  "name": "Feature 2",
  "description": "",
  "id": "feature-2",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@TID1002REV0.2.0"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Scenario 2",
  "description": "",
  "id": "feature-2;scenario-2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I run this test",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "it passes",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_2_steps.i_run_this_test()"
});
formatter.result({
  "duration": 106700,
  "status": "passed"
});
formatter.match({
  "location": "Test_2_steps.it_passes()"
});
formatter.result({
  "duration": 23300,
  "status": "passed"
});
});