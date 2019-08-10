<h2>AEP Charge Code Kata</h2>
<h4>Scenario</h4>
You and a group of friends have determined the growing need for an application that consolidates Social Chat applications (Slack, Discord, Steam, etc.) and allows a single application to control communications on said platforms. Your application intends to interface with any current and future platforms that expose a public API for user management.
<h4>Problem Statement</h4>
You and your friends have broken up this project into appropriate tasks including project scaffolding, platform authentication & session management, and platform friend states among others. You have taken the task to define the object model for how your application will manage Users from different platforms with varying user attributes.
<h4>Task</h4>
For the purposes of this Code Kata you are tasked with defining an extensible object model using the guidelines defined above for the User model as well as provide a sample implementation for populating a specific user. The sample integration for this kata will have you interfacing with the [Slack](https://slack.com/) Workspaces API to retrieve the details for a specific user by Username.
<br><br>
The Slack integration will use the [Users.info](https://api.slack.com/methods/users.info) API to get the appropriate details for the Slack User.
<br>Feel free to implement this solution using the language of your choice.
<h4>Goals</h4>
<ul>
    <li>Extensible User Data Model</li>
    <li>Extensible API Invocation Model</li>
    <li>Slack Integration using the above model</li>
    <li>Logical Integration Tests for your implementation</li>
</ul>

*Note*: For testing purposes you may want to spin up your own Slack Workspace and generate a web token.  They are free and easy to setup, just go through Slack.com and create an account if you currently don't have one.
<br>[Creating a Slack Workspace](https://get.slack.help/hc/en-us/articles/206845317-Create-a-Slack-workspace)
<br>[Generating a Slack Token](https://get.slack.help/hc/en-us/articles/215770388-Create-and-regenerate-API-tokens)