export interface LevelReturn {
    completed: boolean;
    output: string;
}

type levelFunction = (input: string) => LevelReturn;

export interface LevelState {
    activeFunction: levelFunction;
}

const errorLevelFunction = (input: string) => {
    return {completed: false, output: "ERROR, this shouldn't be showing up!!!"};
}

const testLevelFunction0 = (input: string) => {
    testLevelState.activeFunction = testLevelFunction1; // TODO: this seems bad
    return {
        completed: false, 
        output: 
"You're rushing between interviews on campus and swing by one of the vending machines. \
There's a new sign on today: \"50% chance of working, 75% off!\" \n\
You want to figure out if you're getting a deal if you put your money in, and you're willing to buy a few 1 Euro sticks of gum. \n\
Press any key to continue..."
    };
}

const testLevelFunction1 = (input: string) => {
    testLevelState.activeFunction = testLevelFunction2; // TODO: this seems bad
    return {
        completed: false, 
        output: 
"You can: \n\
  1. put in a 0.25 Euro for a stick of gum \n\
  2. guess the machine is cheaper than usual \n\
  3. guess the machine is more expensive than usual \n\
Valid inputs include: \"1\", \"2\", and \"3\""
    };
}

const testLevelFunction2 = (input: string) => {
    if (input === "1") {
        if (Math.random() > .95) {
            return {
                completed: false,
                output: "You got a stick of gum! Woooooo!"
            }
        }
        return {
            completed: false,
            output: "The gum got stuck and you got nothing for you money. You feel sad...."
        }
    } else if (input === "2") {
        return {completed: false, output: "Oops! Do you need to buy more gum to figure out the answer? Try again!"};
    } else if (input === "3") {
        testLevelState.activeFunction = errorLevelFunction; // TODO: this seems bad
        return {completed: true, output: "That's correct, the machine only work 5% of the time, so that's some expensive gum. Great job!"};
    } 
    return {completed: false, output: "Valid inputs include: \"1\", \"2\", and \"3\""};;
}

const testLevelState: LevelState = {
    activeFunction: testLevelFunction0
}

const jobOffersLevelFunction0 = (input: string) => {
    jobOffersLevelState.activeFunction = jobOffersLevelFunction1; // TODO: this seems bad
    return {
        completed: false, 
        output: 
"Congrats to your job offers! Don't get cocky! \
Now it's time to choose and you reach out to some alums to get their perspective. \n\
To best evaluate your offers, which INSEAD alums should you talk to? \n\
Press any key to continue..."
    }
}

const jobOffersLevelFunction1 = (input: string) => {
    jobOffersLevelState.activeFunction = jobOffersLevelFunction2; // TODO: this seems bad
    return {
        completed: false, 
        output: 
"You can talk to: \n\
  1. Alums who have been with the firm several years and have had an amazing growth trajectory \n\
  2. Alums who have left the firm, especially those who did so just a few months into the job \n\
  3. A mixture of both \n\
Valid inputs include: \"1\", \"2\", and \"3\"."
    }
}

const jobOffersLevelFunction2 = (input: string) => {
    if (input === "3") {
        jobOffersLevelState.activeFunction = errorLevelFunction; // TODO: this seems bad
        return {
            completed: true, 
            output: 
"That's a great choice and will help you eliminate selection bias by getting a ballanced overview. \n\
Great job!"
        };
    } else if (input === "1" || input === "2") {
        return {
            completed: false, 
            output: 
"That's a great start, but you might fall for selection bias. \
Those people may have just one perspective. \n\
Try again!"
        };
    }
    return {completed: false, output: "Valid inputs include: \"1\", \"2\", and \"3\"."};;
}

const jobOffersLevelState: LevelState = {
    activeFunction: jobOffersLevelFunction0
}

const workProjectLevelFunction0 = (input: string) => {
    workProjectLevelState.activeFunction = workProjectLevelFunction1; // TODO: this seems bad
    return {
        completed: false, 
        output: 
"You receive an email from your director about bidding on a project in New York. \
The project is complex and will most likely require people who have done similar projects before. \
However, you never learned those techniques in your professional life. \n\
Press any key to continue..."
    };
}

const workProjectLevelFunction1 = (input: string) => {
    workProjectLevelState.activeFunction = workProjectLevelFunction2; // TODO: this seems bad
    return {
        completed: false, 
        output: 
"Do you think your technical skills would allow you to take on this project? \n\
You can choose to: \n\
  1. I'm sure I can understand these techniques on the spot. Also, my boss wants our team to look good this year, so I help our team achieve the goal. \n\
  2. I'm not sure. I think I need to reevaluate a bit. Maybe I will ask someone who has done similar projects before. \n\
Valid inputs include: \"1\" and \"2\"."
    };
}

const workProjectLevelFunction2 = (input: string) => {
    if (input === "2") {
        workProjectLevelState.activeFunction = errorLevelFunction; // TODO: this seems bad
        return {
            completed: true, 
            output: 
"Smart choice! You know that you don’t have enough skill, and allow yourself to accept the reality. \
You may want to check with your team and boss to see whether they have equip with enough skills to complete the project. \n\
Great job!"
        };
    } else if (input === "1") {
        return {
            completed: false, 
            output: 
"You are overconfident about your ability to make this judgment. \
The organizational pressures give you motivation and courage. \
You are likely to fail because the project requires people who have done similar projects. \
You are possible at the \“2nd stage\” of the Dunning-Kruger effect. Your confidence does not imply your competency. \n\
Try again!"
        };
    }
    return {completed: false, output: "Valid inputs include: \"red\" and \"blue\""};;
}

const workProjectLevelState: LevelState = {
    activeFunction: workProjectLevelFunction0
}

const diversityLevelFunction0 = (input: string) => {
    diversitytLevelState.activeFunction = diversityLevelFunction1; // TODO: this seems bad
    return {
        completed: false, 
        output: 
"Your company has received a distinguished award for championing diversity in the workplace and has \
grown from a mere 5% to now 40% women representation in senior leadership roles. \
You’ve recently been selected as the youngest member of the Diversity Council and in the first meeting of the year \
you’re asked to share your perspectives on the hiring, promotion, and employee policies. \n\
Press any key to continue..."
    };
}

const diversityLevelFunction1 = (input: string) => {
    diversitytLevelState.activeFunction = diversityLevelFunction2; // TODO: this seems bad
    return {
        completed: false, 
        output: 
"The council consists of senior leaders who pride themselves on the work they’ve done on this front. \
This a great opportunity for you to drive impact in the company, but also to leave the right impression with important people. \n\
You can choose to: \n\
  1. Toe the company line -- the people in the room know far more than you and have been successful. \n\
  2. Give your honest opinion, even if it questions how the company approaches the issue. \n\
Valid inputs include: \"1\" and \"2\"."
    };
}

const diversityLevelFunction2 = (input: string) => {
    if (input === "2") {
        diversitytLevelState.activeFunction = errorLevelFunction; // TODO: this seems bad
        return {
            completed: true, 
            output: 
"Even though you don't have all the context, your background adds necessary counterpoint to the discussion. \
Likewise, companies with diverse workplaces more successfully problem-solve, so 40% shouldn't be your ending point. \n\
Great job!"
        };
    } else if (input === "1") {
        return {
            completed: false, 
            output: 
"While you might have less information than your colleagues, you also don't know enough to agree with them. Maybe you could ask for more data. \
Although the outcome of a more inclusive workplace may indicate that your policies are favourable, \
you might be falling into a bias of focusing on successes and you need to actively look for disconfirming evidence. \n\
Try again!"
        };
    }
    return {completed: false, output: "Valid inputs include: \"red\" and \"blue\""};;
}

const diversitytLevelState: LevelState = {
    activeFunction: diversityLevelFunction0
}

const levels = [testLevelState, jobOffersLevelState, ];

export {levels}
