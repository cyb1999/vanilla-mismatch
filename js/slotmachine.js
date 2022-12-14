const myLucky = new LuckyCanvas.SlotMachine({
    divElement: document.querySelector('#my-lucky'),
    dpr: 2// 这里会使用传入的dpr
}, {
    width: '400px',
    height: '170px',
    blocks: [{
        imgs: [{
            src: "/assets/Image/slot_1.png",
            width: '100%',
            height: '100%'
        }]
    }],
    slots: [

        { order: [0, 1, 2, 3, 4, 5, 6, 7], speed: 20, direction: -1 },
        { order: [6, 7, 5, 4, 3, 2, 1, 0], speed: 20 },
        // { order: [0, 1, 2, 3], direction: -1, speed: 20 },
        // { order: [2, 1, 3, 0], speed: 20 },

    ],
    prizes: [
        {
            id: 0,
            imgs: [{
                tips: 'banana',
                width: '100%',
                top: '20%',
                src: "/assets/Image/slot_banana.png"
            }]
        },
        {
            id: 1,
            imgs: [{
                tips: 'sauce',
                width: '100%',
                top: '10%',
                src: "/assets/Image/slot_sauce.png"
            }]
        },
        {
            id: 2,
            imgs: [{
                tips: 'chicken',
                width: '90%',
                src: "/assets/Image/slot_chicken.png"

            }]
        },
        {
            id: 3,
            imgs: [{
                tips: 'ice cream',
                width: '100%',
                top: '10%',
                src: "/assets/Image/slot_icecream.png"


            }]
        },
        {
            id: 4,
            imgs: [{
                tips: 'pineapple',
                width: '100%',
                top: '10%',
                src: "/assets/Image/slot_pineapple.png"
            }]
        },
        {
            id: 5,
            imgs: [{
                tips: 'prunes',
                width: '100%',
                top: '10%',
                src: "/assets/Image/slot_prunes.png"

            }]
        },
        {
            id: 6,
            imgs: [{
                tips: 'miso',
                width: '100%',
                top: '20%',
                src: "/assets/Image/slot_miso.png"
            }]
        },
        {
            id: 7,
            imgs: [{
                tips: 'yogurt',
                width: '85%',
                top: '15%',
                src: "/assets/Image/slot_yogurt.png"
            }]
        },


    ],
    defaultConfig: {
        rowSpacing: '30px',
        colSpacing: '80px'
    },
})
var touchState = true
const playGame = () => {
    if (touchState) {
        myLucky.play()
    }

}
playGame()

const stopGame = () => {
    if (touchState) {
        touchState = false
        const synthetic_text = document.querySelector('.synthetic_text')
        const res = [
            [0, 1],
            [2, 3],
            [4, 5],
            [6, 7],
        ]
        // 随机取一组数据
        const group = res[Math.random() * 4 >> 0]
        // 调用 stop 方法停止游戏
        myLucky.stop(group)
        synthetic_text.innerHTML = 'マッチするかな?'
        var timer = setInterval(() => {
            if (myLucky.step === 0) {
                setTimeout(() => {
                    let bottom_ctr = document.getElementById('bottom_ctr')
                    let videostyle = document.getElementById('loading_ctr')
                    videostyle.style.display = 'flex'
                    bottom_ctr.style.display = 'none'
                    clearInterval(timer)
                    setTimeout(() => {
                        group.forEach((item) => {
                            //香蕉组
                            if (item == 0) {
                                window.location.href = '/view/banana.html'
                                window.removeEventListener("click", stopGame, false);
                                clearInterval(timer)
                            }
                            //鸡排组
                            if (item == 2) {
                                window.location.href = '/view/chicken.html'
                                window.removeEventListener("click", stopGame, false);
                                clearInterval(timer)
                            }
                            //菠萝组
                            if (item == 4) {
                                window.location.href = '/view/pineapple.html'
                                window.removeEventListener("click", stopGame, false);
                                clearInterval(timer)

                            }
                            //味增汤组
                            if (item == 6) {
                                window.location.href = '/view/miso.html'
                                window.removeEventListener("click", stopGame, false);
                                clearInterval(timer)
                            }
                        })
                    }, 2400)
                }, 1500)

            }
        }, 1000)
    }


}


