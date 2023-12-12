# New Labour MP Database

## What is this project for?

MPs can be difficult to build relationships with and influence. They have many commitments and lots of people competing for their time. This is a problem for campaign groups trying to find allies and build parliamentary support for their issue. 

Future Labour MPs helps you build relationships early. Search by issue or constituency to identify potential allies before they get into parliament. 

The next election is likely to be won by Labour. Our database shows Labour candidates who are new to parliament and very likely get elected. This interface can be used to build relationships with the new cohort of Labour MPs and influence what the next Labour government does.

## Setup

This is a React app with TypeScript. To get started, run `yarn install` and `yarn start` - the frontend app should then be running at `localhost:3000`.

To get the server running, go into the folder `./server` and run `yarn start`;

## Testing

Run tests with `yarn test`. All tests must pass before your changes can be added to the project.

## Contributions

If you'd like to contribute to this tool, feel free to pick up one of the issues that's currently open, or create your own!

When submitting a pull request, please describe your changes clearly, and include screenshots and tests where relevant.

## FAQ

### What is Future Labour MPs?

Future Labour MPs is a website and database where you can find information about many of the Labour Party general election candidates (PPCs, or prospective parliamentary candidates) most likely to be elected into Parliament at the next general election. You’ll find information about what these candidates have said and done on a host of issues, their backgrounds and social media pages.

### What is this tool for?
This tool is for campaigners and local constituents to better understand who their future MP is and what they think. It can be used by campaigners to find allies among future MPs on the issues that matter and build useful relationships now, or for constituents to reach out to the candidates who will likely represent them in Parliament in the near future. 

### Why have you made this tool?
There’s lots of great resources that give us information about current MPs, including how they voted and who they have accepted donations from. But there’s often very little accessible information in one place about candidates standing for Parliament. Building awareness of candidates before they become MPs is essential for effective campaigning and informed voting. 

### How have you chosen the candidates?
We have chosen Labour candidates that are among the most likely to be elected as MPs, standing in seats where there are small (implied) majorities for the incumbent MP and where Electoral Calculus has them listed with a very high chance of winning (as of December 2023). This is not an exhaustive list, and there are some Labour candidates who have a high chance of becoming an MP who we haven’t yet included, but we are hoping to in time. 

We haven’t included General Election candidates who were previously MPs, as there is already lots of great information out there, including how they previously voted. They also tend to have bigger public profiles. 

### Where have you got your information from? 
All of the information we’ve included about candidates has been taken from publicly available sources, whether social media accounts, Companies House, candidate websites or news outlets. We relied on LabourList for some biographical detail. Where possible, we cite these sources. 

### Why only Labour candidates?
We don’t support any political party, but on current polling and by most predictions, Labour is likely to win a sizeable majority in the next General Election. This swing will mean potentially hundreds of new Labour MPs coming into Parliament next year, and they will be part of the governing Party. Relative to new MPs from other parties, new Labour MPs will potentially hold more influence within Westminster. There will also be many more of them. 
In the future, if we have more resources, we’d like to expand this database to include future MPs from more parties. 

### Do you evaluate what candidates have said?
You’ll see that the issues (e.g. ‘migration’) are colour coded: green for positive, red for negative and black for neutral. This isn’t an assessment of the candidates overall position on an issue, just an evaluation of the particular statement or action that we’ve referenced. How people vote on an issue as MPs is influenced by a variety of external factors, but we think this will be useful for campaigners looking to find allies.  

### What do you mean by ‘majority (implied 2019)’?
Because of the boundary changes most Parliamentary seats have changed, with some gaining new wards/areas and losing others. This means that if the 2019 General Election were held based on the new boundaries, in many seats the results would be different because of these changes. Electoral Calculus use the term ‘implied majority 2019’ to estimate what an MP’s majority would be were the 2019 election held on the new boundaries. This is a better way of getting a sense of an incumbent MP’s current majority under the new boundaries, though this doesn’t account for current polling. But that’s why we’ve also included Electoral Calculus’ percentage chance of winning category, which does factor polling. 

### Who are you?
This tool is maintained by volunteers from the [Movement Research Unit](http://mvmtresearch.org). They do practical research in support of social movements and campaign groups.
