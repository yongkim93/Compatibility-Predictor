// given input value
let input = {
    team: [
        {
            name: "Eddie",
            attributes: {
                intelligence: 1,
                strength: 5,
                endurance: 3,
                spicyFoodTolerance: 1
            }
        },
        {
            name: "Will",
            attributes: {
                intelligence: 9,
                strength: 4,
                endurance: 1,
                spicyFoodTolerance: 6
            }
        },
        {
            name: "Mike",
            attributes: {
                intelligence: 3,
                strength: 2,
                endurance: 9,
                spicyFoodTolerance: 5
            }
        }
    ],
    applicants: [
        {
            name: "John",
            attributes: {
                intelligence: 4,
                strength: 5,
                endurance: 2,
                spicyFoodTolerance: 1
            }
        },
        {
            name: "Jane",
            attributes: {
                intelligence: 7,
                strength: 4,
                endurance: 3,
                spicyFoodTolerance: 2
            }
        },
        {
            name: "Joe",
            attributes: {
                intelligence: 1,
                strength: 1,
                endurance: 1,
                spicyFoodTolerance: 10
            }
        }
    ]
}
/**
 * this function calculates compatibility of applicants against team members.
 * 1. calculate team average socore per attribute
 * 2. calcualte applicants compatibility percentage per attributes and multiply each attribute scores percantage into one.
 * 3. format output structure and return
 * @param {*} input object that contains array of team and applicants.
 * @returns object that contains array of scoredApplicants.
 */
function compatibilityPredictor(input) {
    // variable that holds team average attribute scores
    let teamAverageAttributeScores = {
        intelligence: 0,
        strength: 0,
        endurance: 0,
        spicyFoodTolerance: 0
    }

    // variable that holds applicants compatibility percentage score
    let applicantScores = {}

    // variable that will be used in formatting output structure
    let output = {
        scoredApplicants: []
    }

    // 1. calculate team average socore per attribute
    input.team.map(member => {
        Object.entries(member.attributes).map(([key, value]) => {
            teamAverageAttributeScores[key] += value / input.team.length
        })
    })

    // 2. calcualte applicants compatibility percentage per attributes and multiply each attribute scores percantage into one.
    input.applicants.map(member => {
        // if applicants attribute score goes over avergage team attribute score, give value 1 which implies 100%
        Object.entries(member.attributes).map(([key, value], index) => {
            // if index is 0, set applicates first percentage score
            if (index === 0) {
                applicantScores[member.name] = Math.min(1, value / teamAverageAttributeScores[key])
                return
            }
            // multiply each attribute percentage into one
            applicantScores[member.name] *= Math.min(1, value / teamAverageAttributeScores[key])
        })
    })

    // 3. format output structure and return
    Object.entries(applicantScores).map(([key, value]) => {
        output.scoredApplicants.push({ name: key, score: value })
    })

    return output
}

console.log(compatibilityPredictor(input))