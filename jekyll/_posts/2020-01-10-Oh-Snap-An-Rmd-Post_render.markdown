---
layout: post
title: Oh Snap, an RMD Post
date: 2020-01-10 23:18:45 -0800
tags: code cucumbers
---

## Oh no u mean we can also do like code in this thing

See the .rmd file in  `jekyll/_rmd`


## a table


{% highlight r %}
options(digits = 3)
knitr::kable(head(mtcars))
{% endhighlight %}



|                  |  mpg| cyl| disp|  hp| drat|   wt| qsec| vs| am| gear| carb|
|:-----------------|----:|---:|----:|---:|----:|----:|----:|--:|--:|----:|----:|
|Mazda RX4         | 21.0|   6|  160| 110| 3.90| 2.62| 16.5|  0|  1|    4|    4|
|Mazda RX4 Wag     | 21.0|   6|  160| 110| 3.90| 2.88| 17.0|  0|  1|    4|    4|
|Datsun 710        | 22.8|   4|  108|  93| 3.85| 2.32| 18.6|  1|  1|    4|    1|
|Hornet 4 Drive    | 21.4|   6|  258| 110| 3.08| 3.21| 19.4|  1|  0|    3|    1|
|Hornet Sportabout | 18.7|   8|  360| 175| 3.15| 3.44| 17.0|  0|  0|    3|    2|
|Valiant           | 18.1|   6|  225| 105| 2.76| 3.46| 20.2|  1|  0|    3|    1|

## a yno ggplot


{% highlight r %}
library(ggplot2)
ggplot(mtcars, aes(x=wt, y=mpg))+
	geom_point()
{% endhighlight %}

![plot of chunk unnamed-chunk-2](/assets/images/2020-01-10-Oh-Snap-An-Rmd-Post/unnamed-chunk-2-1.png)

## toggling code visibility
<details><summary class="toggle-code">Expand/Collapse Code</summary>

{% highlight r %}
now_u_see_me <- seq(100)
{% endhighlight %}

</details>
