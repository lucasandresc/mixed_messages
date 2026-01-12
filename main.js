const getRandomSportRule = () => {
  const sports = [
    {
      name: 'soccer',
      rules: [
        'Cannot touch the ball with hands (except goalkeeper)',
        'Offside is called when a player is ahead without the ball',
        'A match lasts 90 minutes divided into two 45-minute halves',
      ],
    },
    {
      name: 'basketball',
      rules: [
        'Cannot walk with the ball without dribbling (traveling)',
        'Players have 24 seconds to attempt a shot',
        'A game consists of 4 quarters of 10 minutes each',
      ],
    },
    {
      name: 'volleyball',
      rules: [
        'The ball cannot touch the ground on your own side',
        'Each team has a maximum of 3 touches before returning the ball',
        'Sets are played to 25 points with a 2-point difference',
      ],
    },
    {
      name: 'rugby',
      rules: [
        'Can only pass the ball backwards or laterally',
        'Tackles must be made below the shoulders',
        'A try is worth 5 points and the conversion adds 2 additional points',
      ],
    },
    {
      name: 'hockey',
      rules: [
        'Can only hit the ball with the flat side of the stick',
        'Cannot raise the stick above the waist in dangerous plays',
        'Short corners are taken from the 23-meter line',
      ],
    },
  ];

  const randomSportIndex = Math.floor(Math.random() * sports.length);
  const selectedSport = sports[randomSportIndex];
  const randomRuleIndex = Math.floor(
    Math.random() * selectedSport.rules.length
  );
  const selectedRule = selectedSport.rules[randomRuleIndex];

  return `Sport: ${selectedSport.name} | Rule #${
    randomRuleIndex + 1
  } - ${selectedRule}`;
};

console.log(getRandomSportRule());
