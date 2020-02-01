function companyBotStrategy(trainingData: number[][]): number {
    let companyBotStrategyResult = 0, companyBotStrategyDiv = 0;
    trainingData.forEach(element => {
        if(element[1] == 1)
        {
            companyBotStrategyResult += element[0];
            companyBotStrategyDiv += element[1];
        }
    });
    return companyBotStrategyResult == 0 ? 0: companyBotStrategyResult/companyBotStrategyDiv;
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));
