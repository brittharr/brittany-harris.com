---
layout: page
title: Automated Reports for BNY Mellon
---
## Automated Reports

[BNY Mellon](https://www.bnymellon.com/) conducts an investor relations survey each year among 700 participants representing companies from 63 nations. This survey covers key emerging trends in today’s capital markets. They approached [Boost Labs](http://www.boostlabs.com/) with a ton of survey data, and were looking for our help to find meaning in the data and visualize it in a series of reports.

In our initial discovery and analysis, I helped the team analyze the survey data on a global scale. We based our visual analysis on stories from the BNY Investor Relations team, and determined highly custom charts and infographics to express these stories in the primary report "Global Trends in Investor Relations 2013" (GTIR).

After figuring out the trends as a whole, we needed to find a way to show how respondents from 10 regions, 9 sectors, and 700+ companies compared to the responses from other cross-sections of the data, (e.g. generating a report for Japan comparing them to Global, Developed Markets, and Asia Pacific responses). Clearly, these reports would take a significant amount of time to create manually as we had for the GTIR, so it was time to come up with a method of automation.

We decided to break the survey data down by question and develop a template that would work across all of these reports and facilitate that automated process.

![700 Benchmark Reports](/images/case-studies/bny/bny10.png)

I used [D3](http://d3js.org/) to generate the charts in-browser as svg elements, then downloading the generated report and using it as a support for the InDesign document required by the BNY team.

This is an interesting project, because BNY performed the survey again in 2015, and came back to Boost Labs to update the 2013 report with the new data and findings. So I got to go through and update the D3 chart templates with slightly updated designs (to match their new marketing and brand guidelines).

This did require going through my code from over a year ago, and well, it was a little like this:
![Looking at my old code](http://imgs.xkcd.com/comics/future_self.png)
