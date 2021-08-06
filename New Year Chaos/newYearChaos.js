function minimumBribes(q) {
    // Write your code here
    
    const queueBribes = {}
    let isToochaotic = false
    let numBribe = 0
        //the number of people in the queue
        // const numPeople = q[count]
        const numPeople = 8
        // console.log(q)
        // space-separated integers describing the final state of the queue
        // const finalOrder = q[orderCount]
        const finalOrder = q

        for (let i = 1; i <= 8; i++) {
            for (let j = 0; j < finalOrder.length; j++ ) {
            // has the person been accounted for
            if (!queueBribes.hasOwnProperty(i)) {
                // adds to has with zero bribes
                queueBribes[i] = 0
            }
                if (i === finalOrder[j]) {
                    // if negative someone bribed you
                    // if (Math.sign((i - 1) - j) !== -1) {
                        // old position in line minus new position
                        // to check for bribes
                        queueBribes[i] = ((i - 1) - j)
                    // }
                }
            }          
        }
        // Adds the total bribes up
          for (let ele in queueBribes) {
                //checks if any bribe was past the threshold
                if(queueBribes[ele] > 2) {
                    isToochaotic = true
                }
                if (Math.sign(queueBribes[ele]) !== -1) {
                    numBribe = numBribe + parseInt(queueBribes[ele])
                }
                for (let i = 0; i < 8; i++) {
                    if (ele < i && queueBribes[ele] < queueBribes[i] && Math.sign(queueBribes[ele]) == -1 && Math.sign(queueBribes[i]) == -1) {
                    numBribe = numBribe + 1
                    }
                }
            }   
            return (isToochaotic ? console.log('Too chaotic') : console.log(numBribe))
        

    // key: the person position in line
    // value: the number of bribes
    
    // value 1 cannot bribe (No negative bribe)
    // value 2 idx = 1 - newidx 0 = 1 bribe
    // value 3 idx = 2 - newidx 3 = -1 bribe (No negative bribe)
    // value 4 idx = 3 - newidx 4 = -1 bribe (No negative bribe)
    // value 5 idx = 4 - newidx 2 = 2 bribes
    //[1,2,3,4,5]
    //[0,1,2,3,4] //idx
    
    //[2,1,5,3,4]
    //[0,1,2,3,4] // new idx
    
    // value 1 newidx = 1 - neweridx 2 = -1 (No negative bribe)
    // value 2 newidx = 0 - neweridx 0 = 0 bribes
    // value 3 newidx = 3 - neweridx 3 = 0 bribes
    // value 4 newidx = 4 - neweridx 4 = 0 bribes
    // value 5 newidx = 2 - neweridx 1 = 1 bribe
    //[2,5,1,3,4]
    //[0,1,2,3,4] // new idx
    
    //total the bribes
    // if any individual bribe is over 3 retun Too chaotic
}