---
layout: work
title: Business Intelligence Dashboard
technology: D3.js, SVG, Canvas, Backbone.js, Adobe Omniture API, PHP, Grunt
thumbnail-url: /assets/images/case-studies/dashboard/thumbnail.jpg

previous-work-url: /work/bny-reports
previous-work-title: Automated Reports
next-work-url: /work/nbr
next-work-title: Modular Visualizations
---

<div class="row">
    <div class="medium-6 columns">
        <p><a href="http://www.boostlabs.com/">Boost Labs</a> was asked to work on a project that would bring transparency to data and metrics from disparate departments across this large company. Our solution was a dashboard intended to be displayed on TV screens in a number of company buildings.</p>
        <p>To accomplish the goal of unifying these datasets, we came up with the paradigm of screens for each department that move across the TV horizontally. Within the department screens we scroll through visualizations vertically, making sure by the design that insights can be easily derived.</p>
        <h4>Results</h4>
        <p>Leveraging Backbone views and Marionette layouts, I was really pleased with the amount of unification and DRY-ness that we were able to accomplish with the final application. We ended up doing a handful of super fast extensions to the dashboard for departments that wanted to be included, and really only needed to add in the additional data.</p>
    </div>
    <div class="medium-6 columns">
        <img src="/assets/images/case-studies/dashboard/visitors.jpg" alt="">
        <h4>Challenges</h4>
        <p>One challenging requirement on this dashboard was the inclusion of real-time unique visitor data being collected by Adobe Omniture. I hadn't extracted data from Omniture before, so the API was interesting to figure out. Then with the real-time data in hand, we were presented with some initial performance issues since there were <strong>so many</strong> points to display. I ended up converting the initially SVG "ping map" into a Canvas implementation, which luckily improved the performance (removing ~10,000 DOM elements really helped).</p>
    </div>
</div>
<div class="row">
    <div class="medium-6 columns">
        <img src="/assets/images/case-studies/dashboard/sales.jpg" alt="">
    </div>
    <div class="medium-6 columns">
        <img src="/assets/images/case-studies/dashboard/prospects.jpg" alt="">
    </div>
</div>
<div class="row">
    <div class="medium-6 medium-push-6 columns">
        <h4>Bonus Projects!</h4>
        <p>We worked on some other really cool projects for this client, such as this snippet of a presentation for the Detroit Auto Show. I worked on developing some prototypes and MVPs that we used in the presentation via screenshots & videos. There was a particular focus on animating the introduction of new data points, and using transitions to tell as much of a story as the static views.</p>
    </div>
    <div class="medium-6 medium-pull-6 columns">
        <img src="/assets/images/case-studies/dashboard/forecast.gif" alt="">
    </div>
</div>


