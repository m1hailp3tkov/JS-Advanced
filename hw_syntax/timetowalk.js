function solveTimeToWalk(steps, stepLength, speed)
{
    function leadingZero(num)
    {
        if(Math.floor(num/10) == 0)
        {
            return `0${num}`;
        }
    
        return num;
    }

    let distance = steps * stepLength;
    let seconds = 0;
    let metersPerSecond = speed / 3.6;

    seconds = Math.floor(distance/500)*60 + distance/metersPerSecond;

    let dHrs = leadingZero(Math.floor(seconds/3600));
    let dMins = leadingZero(Math.floor(seconds/60%60));
    let dSecs = leadingZero(Math.round(seconds%60));

    console.log(`${dHrs}:${dMins }:${dSecs}`);
}


solveTimeToWalk(4000, 0.60, 5);
solveTimeToWalk(2564, 0.70, 5.5);