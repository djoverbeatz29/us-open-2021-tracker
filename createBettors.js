const bettors = {
    "Brian Sefton": ["Xander Schauffele", "Jon Rahm", "Justin Thomas", "Tony Finau", "Collin Morikawa"],
    "Jack Overby": ["Jon Rahm", "Dustin Johnson", "Bryson DeChambeau", "Brooks Koepka", "Rory McIlroy"],
    "Joe LoCascio": ["Tony Finau", "Collin Morikawa", "Jon Rahm", "Jordan Spieth", "Viktor Hovland"],
    "Joe Sefton": ["Dustin Johnson", "Phil Mickelson", "Jordan Spieth", "Viktor Hovland", "Brooks Koepka"],
    "Robert Overby": ["Jon Rahm", "Bryson DeChambeau", "Dustin Johnson", "Viktor Hovland", "Rory McIlroy"],
    "Robert Sefton": ["Xander Schauffele", "Patrick Cantlay", "Brooks Koepka", "Collin Morikawa", "Will Zalatoris"],
    "Steve Sefton": ["Dustin Johnson", "Rory McIlroy", "Jordan Spieth", "Patrick Reed", "Webb Simpson"]
};

const getTotalScore = golferArray => golferArray.map(golfer=>golferDict[golfer].score).reduce((a,b)=>a+b, 0);