package step_bindings;

import static org.junit.Assert.assertTrue;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

public class Test_1_steps {
	
	@When("^I run this scenario$")
	public void i_run_this_scenario() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		assertTrue(true);
	}

	@Then("^I get a message in the results$")
	public void i_get_a_message_in_the_results() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		assertTrue(false);
	}

}
