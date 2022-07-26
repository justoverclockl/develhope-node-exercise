const luckyDraw = async (player: any) => {
    return new Promise((resolve, reject) => {
        const win = Boolean(Math.round(Math.random()));

        process.nextTick(() => {
            if (win) {
                resolve(`${player} won a prize in the draw!`)
            } else {
                reject(new Error(`${player} lost the draw.`));
            }
        });
    })
}

const getResult = async () => {
    let a = await luckyDraw('Tina')
        .then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err.message)
        })
    let b = await luckyDraw('jorge')
        .then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err.message)
        })
    let c = await luckyDraw('julien')
        .then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err.message)
        })
}

getResult()