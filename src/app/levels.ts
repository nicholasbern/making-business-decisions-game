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

const styleLevelFunction0 = (input: string) => {
    styleLevelState.activeFunction = styleLevelFunction1; // TODO: this seems bad
    return {
        completed: false, 
        output: 
"You've made it to the first decision point! \n\
Before we start making actual decisions, it's important to understand how you make decisions. \
What are three adjectives that describe how you naturally approach decisions? \n\
Valid inputs include: 3 adjectives separated by commas."
    }
}

const styleLevelFunction1 = (input: string) => {
    styleLevelState.activeFunction = errorLevelFunction; // TODO: this seems bad
    return {
        completed: true, 
        output: 
"Got it! You are naturally " + input + " when you make decisions. \n\
No wrong answers here. It's important to understand how you approach decisions so that you can \
mitigate your biases. Emotions unavoidably inform what we choose and we need to be mindful lest they \
overwhelm us. \n\
You'll need to keep your impulses in mind for the next decisions! \n\
Great job! \n\ "
    }
}

const styleLevelState: LevelState = {
    activeFunction: styleLevelFunction0
}

const probabilityLevelFunction0 = (input: string) => {
    probabilityLevelState.activeFunction = probabilityLevelFunction1; // TODO: this seems bad
    return {
        completed: false, 
        output: 
"You're rushing between interviews on campus and swing by an INSEAD vending machine. \
There's a new sign on today: \"50% chance of working, 75% off the price!\" \n\
It sounds like a deal, but you want to verify. You're willing to buy a few 1 Euro sticks of gum to be certain. \n\
Press any key to continue..."
    };
}

const probabilityLevelFunction1 = (input: string) => {
    probabilityLevelState.activeFunction = probabilityLevelFunction2; // TODO: this seems bad
    return {
        completed: false, 
        output: 
"You can: \n\
  1. Put in a 0.25 Euro for a stick of gum \n\
  2. Guess the machine is cheaper than usual \n\
  3. Guess the machine is more expensive than usual \n\
Valid inputs include: \"1\", \"2\", and \"3\""
    };
}

const probabilityLevelFunction2 = (input: string) => {
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
        probabilityLevelState.activeFunction = errorLevelFunction; // TODO: this seems bad
        return {completed: true, output: 
"That's correct, the machine only works 5% of the time, so that's some expensive gum. \n\
Great job! \n "
        };
    } 
    return {completed: false, output: "Valid inputs include: \"1\", \"2\", and \"3\""};
}

const probabilityLevelState: LevelState = {
    activeFunction: probabilityLevelFunction0
}

const jobOffersLevelFunction0 = (input: string) => {
    jobOffersLevelState.activeFunction = jobOffersLevelFunction1; // TODO: this seems bad
    return {
        completed: false, 
        output: 
"Your gum-interrupted interviews went great and now you have some offers! But don't get cocky! \
Now it's time to choose between them so you reach out to some alums to get their perspective. \n\
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
"That's a great choice and will help you eliminate selection bias by getting a balanced overview. \n\
Great job! \n "
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
    return {completed: false, output: "Valid inputs include: \"1\", \"2\", and \"3\"."};
}

const jobOffersLevelState: LevelState = {
    activeFunction: jobOffersLevelFunction0
}

const careerStartLevelFunction0 = (input: string) => {
    careerStartLevelState.activeFunction = careerStartLevelFunction1; // TODO: this seems bad
    return {
        completed: false, 
        output: 
"One offer is from your dream firm. However, you've gotten kicked down to a junior level, \
whereas your other offers were for more senior positions. HR assured you a stellar promotion path \
so you won't be junior very long. What would you do in order to make a decision? \n\
Press any key to continue: "
    }
}

const careerStartLevelFunction1 = (input: string) => {
    careerStartLevelState.activeFunction = careerStartLevelFunction2; // TODO: this seems bad
    return {
        completed: false, 
        output: 
"You can: \n\
  1. Follow your dream. You came this far, one small obsticle shouldn't disuade you from the career path you envisioned \n\
  2. Look at people with your experience who started around the same time and evaluate their growth. \n\
Valid inputs include: \"1\" and \"2\"."
    }
}

const careerStartLevelFunction2 = (input: string) => {
    if (input === "2") {
        careerStartLevelState.activeFunction = errorLevelFunction; // TODO: this seems bad
        return {
            completed: true, 
            output: 
"Good decision! You might think you're special, but you still need as much information as possible. \
While it might make sense and be tempting to follow your dream, it is good to take a step back \
and critically evaluate your options. \n\
Great job! \n "
        };
    } else if (input === "1") {
        return {
            completed: false, 
            output: 
"It seems like you might be falling for confirmation bias. Do you have enough information to make that call? \n\
Try again!"
        };
    }
    return {completed: false, output: "Valid inputs include: \"1\" and \"2\"."};
}

const careerStartLevelState: LevelState = {
    activeFunction: careerStartLevelFunction0
}

const workProjectLevelFunction0 = (input: string) => {
    workProjectLevelState.activeFunction = workProjectLevelFunction1; // TODO: this seems bad
    return {
        completed: false, 
        output: 
"You've started your job and you receive an email from your director about a project in New York. \
The work would be complex and likely require people who have done similar projects before. \
You need experience, but this looks daunting. \n\
Press any key to continue..."
    };
}

const workProjectLevelFunction1 = (input: string) => {
    workProjectLevelState.activeFunction = workProjectLevelFunction2; // TODO: this seems bad
    return {
        completed: false, 
        output: 
"Do you think your technical skills will allow you to take on this project? \n\
You can tell your director: \n\
  1. \"Yes\". You're sure you can get up to speed. Also, your boss has been pressuring your team to perform, so you need this one. \n\
  2. \"I'm not sure\". You need to reevaluate a bit. Maybe you can ask someone who has done similar projects before. \n\
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
You may want to check with your team and boss to see whether they can support you to complete the project. \n\
Great job! \n "
        };
    } else if (input === "1") {
        return {
            completed: false, 
            output: 
"You might be overconfident about your ability to make this judgment. \
What advice would you give a friend? \
It's possible you've fallen for the \“2nd stage\” of the Dunning-Kruger effect. \n\
Try again!"
        };
    }
    return {completed: false, output: "Valid inputs include: \"1\" and \"2\""};
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
  1. Toe the company line -- the people in the room know far more than you and have been successful so far. \n\
  2. Give your honest opinion, even if it questions how the company approaches the issue. \n\
Valid inputs include: \"1\" and \"2\"."
    };
}

const diversityLevelFunction2 = (input: string) => {
    if (input === "2") {
        // TODO: for some odd reason, the below function breaks the app
        // diversitytLevelState.activeFunction = errorLevelFunction; // TODO: this seems bad
        return {
            completed: true, 
            output: 
"Even though you don't have all the context, your background adds necessary counterpoint to the discussion. \
Likewise, companies with diverse workplaces more successfully problem-solve, so 40% shouldn't be your ending point. \n\
Great job! \n "
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
    return {completed: false, output: "Valid inputs include: \"1\" and \"2\""};
}

const diversitytLevelState: LevelState = {
    activeFunction: diversityLevelFunction0
}

const expertLevelFunction0 = (input: string) => {
    expertLevelState.activeFunction = expertLevelFunction1; // TODO: this seems bad
    return {
        completed: false, 
        output: 
"What is the capital of Burkina Faso. That's it. That's the question. A client asked your team just to test you. \n\
I know you don't know the answer. But someone on your team (i.e. in this room) does. \
You need to figure out who quickly and drown out the fake experts before the client get's annoyed. \n\
Ask around and NO CHEATING! \n\
Valid inputs include: \"Ouagadougou\", \"Abuja\", and \"Conakry\"."
    }
}

const expertLevelFunction1 = (input: string) => {
    if (input === "ouagadougou") {
        expertLevelState.activeFunction = errorLevelFunction; // TODO: this seems bad
        return {
            completed: true,
            output: 
"Nice! You found the expect and drowned out the fakers. \n\
Great job! \n "
        }
    } else {
        return {
            completed: false,
            output: 
"Ouch, not only are client and the Burkinabè people upset, but it sounds like you fell for a fake expert. \n\
Try again!"
        }
    }
}

const expertLevelState: LevelState = {
    activeFunction: expertLevelFunction0
}

const commitmentLevelFunction0 = (input: string) => {
    commitmentLevelState.activeFunction = commitmentLevelFunction1; // TODO: this seems bad
    return {
        completed: false, 
        output: 
"After a busy month working on a high-stakes project you run into a technical issue with no workaround. \
You  already committed to the manager that you'll be done next week but now you'll need 3 weeks \
unless you invest twice your teams' budget for a low probability of success (<10%). What do you do? \n\
Press any key to continue..."
    }
}

const commitmentLevelFunction1 = (input: string) => {
    commitmentLevelState.activeFunction = commitmentLevelFunction2; // TODO: this seems bad
    return {
        completed: false, 
        output: 
"You can: \n\
  1. Notify your manager that you are running behind \n\
  2. Swing for the fenses as any change to the plan now will likely disrupt even more important company operations \n\
Valid inputs include: \"1\" and \"2\"."
    }
}

const commitmentLevelFunction2 = (input: string) => {
    if (input === "1") {
        commitmentLevelState.activeFunction = errorLevelFunction; // TODO: this seems bad
        return {
            completed: true, 
            output: 
"This option avoids irrationally escalating your commitment and skips the tripwire your company put in place. \n\
Great job! \n\ "
        };
    } else if (input === "2") {
        return {
            completed: false, 
            output: 
"Hmmmm... why do you think the company gave you a budget for this project? \n\
Try again!"
        };
    }
    return {completed: false, output: "Valid inputs include: \"1\" and \"2\"."};
}

const commitmentLevelState: LevelState = {
    activeFunction: commitmentLevelFunction0
}

const endLevelFunction0 = (input: string) => {
    return {
        completed: false, 
        output: 
"Congrats! You've made it to the end, which is... somewhere because Nicholas wanted to generate the map randomly so it could be anwhere. \n\
You're ready to get out there and make some real decision! \n\
Who knows, you might even make the right ones ;)"
    }
}

const endLevelState: LevelState = {
    activeFunction: endLevelFunction0
}

const levels = [
    styleLevelState,
    probabilityLevelState, 
    jobOffersLevelState, 
    careerStartLevelState, 
    workProjectLevelState, 
    diversitytLevelState, 
    expertLevelState, 
    commitmentLevelState, 
    endLevelState
];

export {levels}
