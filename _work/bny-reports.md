---
layout: work
title: Automated Reports
displaytitle: Automated Reports for BNY Mellon
technology: D3.js, Adobe Illustrator, Backbone.js, wkhtmltopdf
thumbnail-url: /assets/images/case-studies/bny/thumbnail.jpg

next-work-url: /work/nbr
next-work-title: Modular Visualizations
---

<div class="row">
    <div class="medium-6 columns">
        <p><a href="https://www.bnymellon.com/">BNY Mellon</a> conducts an investor relations survey each year among 700 participants representing companies from 63 nations. This survey covers key emerging trends in today’s capital markets. They approached <a href="http://www.boostlabs.com/">Boost Labs</a> with a ton of survey data, and were looking for our help to find meaning in the data and visualize it in a series of reports.</p>
        <p>Our goal was to standardize a cutting-edge, print-ready report intended for investors and investment professionals. We then developed a system of integrating the data and rendering designed reports. The outcome is a system that can build beautiful reports from BNY Mellon’s survey results for years to come.</p>
        <p>In our initial discovery and analysis, I helped the team analyze the survey data on a global scale. We based our visual analysis on stories from the BNY Investor Relations team, and determined highly custom charts and infographics to express these stories in the primary report "Global Trends in Investor Relations 2013" (GTIR).</p>
        <p>After figuring out the trends as a whole, we needed to find a way to show how respondents from 10 regions, 9 sectors, and 700+ companies compared to the responses from other cross-sections of the data, (e.g. generating a report for Japan comparing them to Global, Developed Markets, and Asia Pacific responses). Clearly, these reports would take a significant amount of time to create manually as we had for the GTIR, so it was time to come up with a method of automation.</p>
        <p>We decided to break the survey data down by question and develop a template that would work across all of these reports and facilitate that automated process.</p>
        <img src="/assets/images/case-studies/bny/bny9.png" alt="700 Benchmark Reports">
    </div>
    <div class="medium-6 columns">
        <img src="/assets/images/case-studies/bny/bny10.png" alt="700 Benchmark Reports">
        <p>I used <a href="http://d3js.org/">D3</a> to generate the charts in-browser as svg elements, then downloading the generated report and using it as a support for the InDesign document required by the BNY team.</p>
        <p>This is an interesting project, because BNY performed the survey again in 2015, and came back to Boost Labs to update the 2013 report with the new data and findings. We slightly updated the D3 chart templates to match their new marketing and brand guidelines, but the most satisfying part of this second year was seeing the original business goal achieved.</p>
    </div>
</div>

