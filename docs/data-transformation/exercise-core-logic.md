---
sidebar_position: 47
---
# Exercise: Core Logic
![project-structure-transformation-navi.png](./assets/project-structure-transformation-navi.png)

For this exercise, we will work in Databricks. We'll be using Databricks because we can provide a narrative of the logic and walk through the logic together. It also makes learning the Spark API super easy! [Follow these instructions](https://github.com/data-derp/exercise-co2-vs-temperature#data-transformation) to get started.

## Reference Solution Highlights
Pivoting in Spark (reshape_europe_big_three_emissions)
* For the .pivot() method, supplying distinct values to the values argument can really improve performance by skipping unnecessary aggregations

Window Functions (boss_battle)
* Using the .rangeBetween() vs .rowsBetween()
* Make sure to understand the differences