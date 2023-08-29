# Compatibility-Predictor

compatibility predicotor calculation procceed as follow:

1. calculate average attribute scores of team members.
2. calculate percentage of each applicant's attributes against team avarage attribute scores.
    if applicant's attribute score goes over the average team attribute score, it will set to 1 which is 100%
3. multiply all attribute percentages of applicant's into one.
4. format output structure and return.

in the code, step 2 and 3 are combined for optimize the runtime.