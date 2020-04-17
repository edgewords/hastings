package step_bindings;

import static org.junit.Assert.assertTrue;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

public class Test_2_steps {
	
	@When("^I run this test$")
	public void i_run_this_test() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		assertTrue(true);
	}

	@Then("^it passes$")
	public void it_passes() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		assertTrue(true);
	}

}
