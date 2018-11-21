export class TrainingModuleData {
    name: string;
    embed: string;
    embed1: string;
    embed2: string;
    question1: string;
    question2: string;
    question3: string;
    question4: string;
    question5: string;
    question6: string;
    question7: string;
    question8: string;
    question9: string;
    question10: string;
    isActive: boolean;
    Completed: boolean;
    URL: string;
    URL1: string;
    URL2: string;
    Score: number;
    Opta1: string;
    Optb1: string;
    Optc1: string;
    Optd1: string;
    Opta2: string;
    Optb2: string;
    Optc2: string;
    Optd2: string;
    Opta3: string;
    Optb3: string;
    Optc3: string;
    Optd3: string;
    Opta4: string;
    Optb4: string;
    Optc4: string;
    Optd4: string;
    Opta5: string;
    Optb5: string;
    Optc5: string;
    Optd5: string;
    Opta6: string;
    Optb6: string;
    Optc6: string;
    Optd6: string;
    Opta7: string;
    Optb7: string;
    Optc7: string;
    Optd7: string;
    Opta8: string;
    Optb8: string;
    Optc8: string;
    Optd8: string;
    Opta9: string;
    Optb9: string;
    Optc9: string;
    Optd9: string;
    Opta10: string;
    Optb10: string;
    Optc10: string;
    Optd10: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
    answer5: string;
    answer6: string;
    answer7: string;
    answer8: string;
    answer9: string;
    answer10: string;
    isQCompleted: boolean;
    key: string;
    file: string;
    file1: string;
    file2: string;
    ownership: string;
    completedUserList:CompletedUser[];
}
export class CompletedUser{
  UserName:string;
  IsCompleted:boolean;
}

export class QuizData {
    course_name: string;
    quiz_name: string;
    question1: string;
    isActive: boolean;
    Score: number;
    Opta1: string;
    Optb1: string;
    Optc1: string;
    Optd1: string;
    answer1: string;
    isQCompleted: boolean;
    key: string;
}

export class DocData {
    course_name: string;
    file: string;
}
