const myLucky = new LuckyCanvas.SlotMachine('#my-lucky', {
    width: '400px',
    height: '170px',
    blocks: [{
        imgs: [{
            src: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/a52c9cc28c429420c2df64197ed7e06b.png",
            width: '100%',
            height: '100%'
        }]
    }],
    slots: [

        { order: [0, 1, 2, 3, 4, 5, 6, 7,], direction: -1 },
        { order: [6, 7, 5, 4, 3, 2, 1, 0], speed: 20 },

    ],
    prizes: [
        {
            id: 0,
            imgs: [{
                tips: 'banana',
                width: '100%',
                top: '20%',
                src: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/9ef1805e19139b822bec214abbff5be9.png"
            }]
        },
        {
            id: 1,
            imgs: [{
                tips: 'sauce',
                width: '100%',
                top: '10%',
                src: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/9ed0330f40714a42a81a1bbc1a2a1a1f.png"
            }]
        },
        {
            id: 2,
            imgs: [{
                tips: 'chicken',
                width: '90%',
                src: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/8179277b95dff8ff8a41931054e0aeac.png"

            }]
        },
        {
            id: 3,
            imgs: [{
                tips: 'ice cream',
                width: '100%',
                top: '10%',
                src: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/d146a2e27d3ef2360f355854b4dbbbf2.png"


            }]
        },
        {
            id: 4,
            imgs: [{
                tips: 'pineapple',
                width: '100%',
                top: '10%',
                src: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/a0b7d7c3663c69548cb4653284b1dc55.png"
            }]
        },
        {
            id: 5,
            imgs: [{
                tips: 'prunes',
                width: '100%',
                top: '10%',
                src: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/1b30a030d3d9289d6a93e9d1fd83e2f0.png"

            }]
        },
        {
            id: 6,
            imgs: [{
                tips: 'miso',
                width: '100%',
                top: '20%',
                src: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/c889f68062c6aee24c21421cf0c0ed3d.png"
            }]
        },
        {
            id: 7,
            imgs: [{
                tips: 'yogurt',
                width: '85%',
                top: '15%',
                src: "https://vanilla-mismatch.vercel.app/assets/Image/yogurt.png"
            }]
        },


    ],
    defaultConfig: {
        rowSpacing: '30px',
        colSpacing: '80px'
    }

})

const playGame = () => {
    myLucky.play()
}
playGame()

const stopGame = () => {
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
    console.log(group)
    group.forEach((item) => {
        if (item == 0) {
            synthetic_text.innerHTML = 'マッチするかな?'
            setTimeout(() => {
                window.location.href = '/view/banana.html'
            }, 4500)
            window.removeEventListener("click", stopGame, false);
        }
        if (item == 2) {
            synthetic_text.innerHTML = 'マッチするかな?'
            setTimeout(() => {
                window.location.href = '/view/chicken.html'
            }, 4500)
            window.removeEventListener("click", stopGame, false);

        }
        if (item == 4) {
            synthetic_text.innerHTML = 'マッチするかな?'
            setTimeout(() => {
                window.location.href = '/view/pineapple.html'
            }, 4500)
            window.removeEventListener("click", stopGame, false);
        }
        if (item == 6) {
            synthetic_text.innerHTML = 'マッチするかな?'
            setTimeout(() => {
                window.location.href = '/view/miso.html'
            }, 4500)
            window.removeEventListener("click", stopGame, false);
        }
    })


}

